# Blocks lint rules

The root ESLint config combines the existing strict TypeScript rules with Angular's recommended and template accessibility rules, Prettier, and
`eslint-plugin-simple-import-sort`. It keeps Blocks selectors (`bx` for library code and `app` for playground code), explicit accessibility, and ordinary
private names without required underscores. Prettier resolves one configuration for the CLI, ESLint, editors, and TypeScript generators.

## Ordering and spacing

`blocks/member-ordering` recognizes imported Angular APIs, including aliases, namespace calls and `.required()` calls. Readonly injections come first (private,
protected, public). Other readonly fields are grouped by visibility (private, protected, public), then by API purpose inside each visibility group:
ordinary/derived state, inputs/models, outputs, singular queries, plural queries. Mutable fields follow (public, protected, private). Private queries therefore
remain together before protected state. Both static and instance fields follow these groups. After fields, use the constructor, lifecycle hooks in execution
order (including `ngOnDestroy`), public methods/accessors, protected methods/accessors, then private methods/accessors. Member ordering is diagnostic only:
moving initializers requires dependency review.

`blocks/member-spacing` automatically removes empty lines within a visibility/API group, adds one empty line between groups/methods, and removes empty lines
just inside class braces. Injected references form a group; nullable signals, other signal value families, computed state and query APIs form their own groups.
`blocks/block-indentation` explicitly enforces two-space indentation inside TypeScript brace bodies, including interfaces; Prettier completes multiline/comment
formatting. Both rules have whitespace-only autofixes.

`blocks/helpers-regions` requires private methods/accessors in a balanced `//#region Helpers` inside their own class, supports nested regions, and requires
empty lines after openings and before closings. It fixes spacing without moving methods. ESLint's statement padding separates declarations, control flow and
returns/throws while allowing consecutive declarations of the same kind. Prefer `const` before `let` when dependencies permit; declaration reordering remains
manual and `var` is forbidden.

Imports are grouped as side effects, Node built-ins, Angular types/values, RxJS types/values, other external types, Blocks packages, workspace aliases, other
packages, and relative types/values. Imports and named specifiers are sorted within groups. Side-effect imports retain their original relative order. Namespace
imports (`import * as`, including type-only and combined default/namespace declarations) always form the final group, separated from preceding imports by one
empty line. `blocks/ordered-imports` reuses simple-import-sort's comment/specifier handling; verify the adapter when upgrading that dependency. No
project-specific aliases, private-name prefixes, ticket formats, or magic-number allowlists are imported from the reference project.

## Types, Angular APIs, and documentation

`blocks/prefer-path-aliases` reads `tsconfig.json` path mappings. Only imports of direct siblings retain `./name`; nested and parent paths use `@` aliases. It
checks static imports/re-exports, lazy imports, import types, import-equals, and `require()`. Resource URLs (`templateUrl`, `styleUrl`, Sass imports, asset
links) keep their native resolution. Library entry-point boundaries still use public `@filip.mazev/blocks/...` imports.

The library's Angular builder lets ng-packagr's source analyser follow aliases, then resolves internal aliases in emitted JavaScript/declarations before
bundling, composing source maps. ng-packagr 22 follows relative modules during source analysis and treats bare alias names as external dependencies during
bundling, so passing aliases through would break dependency ordering and installed consumers. The wrapper preserves `ng build blocks`, production/development
builds and watch mode. Its adapter uses ng-packagr's internal source-analysis and write-bundle tokens; verify it when upgrading ng-packagr. Workspace aliases
must not appear in published FESM/declaration imports.

Class properties require explicit type annotations, including signal properties; Angular `inject()` references may retain their inferred token types. `any`,
unused TypeScript imports/locals/private members, constructor injection, and legacy input/output/query decorators are errors. Prefer signals for rendering
state; signal and output references are readonly. Necessary unused parameters/catch bindings may start with `_`; unused imports/locals remain errors.
Unavoidable `any` requires a narrow ESLint suppression explaining the external constraint. OnPush for new components is documented in `AGENTS.md` and is
intentionally not enforced by ESLint.

Public/protected class members can be consumed by templates, subclasses or application code; ESLint cannot prove that they are globally unused. Review those
manually. The Angular compiler check (`npm run lint:angular`) rejects unused standalone component imports and validates external and inline templates; unused
TypeScript imports are checked separately by ESLint.

`blocks/documented-interfaces` applies to interfaces exported from library source files, including file-local export lists. It requires a descriptive interface
JSDoc and descriptive JSDoc immediately above every member. Interface-level property `@param` lists are rejected; use property comments and `@typeParam` for
generic parameters. The linter verifies the presence and placement of descriptions; reviewers verify accuracy, defaults, optionality, behavior, and generic
documentation. Playground-only interfaces are outside this documentation rule.

HTML rules cover semantic/accessibility checks, attribute/binding order, explicit button types, duplicate attributes, `$any`, interpolation in attributes,
modern control flow, and static string attributes. Plain strings, translation contracts, signals, templates, accessibility preferences and theming still follow
`AGENTS.md`.

Stylelint's `comment-pattern` permits only ESLint/Stylelint control directives or essential `IMPORTANT:` explanations in SCSS. The prefix makes exceptions
explicit; it does not replace review of whether the styling explanation is necessary.

## Editor and test placeholders

`.vscode/settings.json` selects standalone Prettier for TypeScript, HTML/Angular HTML and SCSS; disables the competing built-in HTML formatter; and pins ESLint
to the repository root with validation on typing. It uses the workspace TypeScript installation and disables the experimental native TypeScript preview for this
Angular workspace. The recommended extensions are listed in `.vscode/extensions.json`. If an already running ESLint server has cached an old local plugin, use
**ESLint: Restart ESLint Server** once after pulling tooling changes.

Component/service `.spec.ts` files follow the installed Angular CLI templates, verified by generating temporary standalone component and service examples.
Components configure TestBed imports, compile, create a fixture, await stability, and run the default creation assertion. Services configure TestBed, inject the
service, and run the creation assertion. Explicit generic arguments are supplied where required by existing classes. Component-specific required inputs,
providers, and behavior mocks remain for the later testing phase; generating these baseline files does not establish passing coverage. They are not added to the
production application build. Existing test tooling is preserved.

## Reviewed change detection

The centered/side/bottom-sheet modal views now use OnPush: their rendered state uses input/computed/writable signals, including timer and pointer updates. The
playground modal/toast examples, confirmation dialog, modal content and toast content also use OnPush: asynchronous close feedback updates signals; other
visible changes originate from template events or initial injected data.

Four library components retain Eager: `ModalCore` and `ToastCore` accept configuration/content through existing imperative assignments, `SimpleToast` inherits
publicly mutable `Toast.data`, and `Radio` reads external `NgControl` validation/touched state through nonreactive inherited getters. Their APIs need a separate
reactive/notification review before changing strategy. OnPush remains a documented requirement for new components rather than a lint rule.

## Commit and push checks

Husky installs via `npm ci` / `npm run prepare`. Pre-commit invokes lint-staged in check-only mode with `--hide-unstaged`, preserving unstaged tracked work
while checking the staged snapshot. TypeScript/HTML changes also trigger the workspace Angular compiler check because template dependencies can cross files.
Pre-push runs all lint checks. Warnings fail the gates. Standard local Git hooks can be bypassed with Git options; enforcing the same checks on a protected
remote branch requires CI/branch protection.

The source migration follows these rules without a baseline. `npm run lint:ts`, `npm run lint:scripts`, `npm run lint:angular`, `npm run lint:styles`, and
`npm run lint:format` can also run separately. Full builds are separate from linting; `lint:angular` emits no files. Do not commit temporary validation fixtures
or test scaffolding.

## Generator consistency and compatibility

All TypeScript writers (icons, theme tokens, version constants, and documentation data) use `formatGeneratedTypeScript`, which checks and fixes their output
with the repository ESLint/Prettier rules before writing. The generator context disables only rules needing a TypeScript project for a file that may not exist
yet; ordinary source validation still checks the written files. CSS writers use `formatGeneratedStyle`. Compiled CSS is excluded from Stylelint source rules and
still checked by Prettier; its SCSS inputs remain linted.

Newly normalized interface names use the `I` prefix and dedicated interface files. Historical public type spellings remain available through compatibility
re-exports, including the effects runtime types and icon contracts. `BxCustomValidators` intentionally retains its original interface name because application
declaration merging depends on that exact name; its narrow lint suppression documents the compatibility requirement.
