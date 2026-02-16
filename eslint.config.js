import { parser as _parser } from "typescript-eslint";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import angular from "angular-eslint";
import sortClassMembers from "eslint-plugin-sort-class-members";
import prettierPlugin from "eslint-plugin-prettier";
import preferArrow from "eslint-plugin-prefer-arrow";
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default [
    eslint.configs.recommended,
    ...tseslint.configs.strict,
    {
        ignores: [
            ".angular/**",
            "dist/**",
            "coverage/**",
            "node_modules/**",
            "scripts/**",
            "**/*.spec.ts"
        ]
    },
    {
        files: ["**/*.ts"],
        languageOptions: {
            parser: _parser,
            parserOptions: {
                project: [
                    "./tsconfig.json",
                    "./tsconfig.app.json",
                    "./tsconfig.spec.json"
                ],
                tsconfigRootDir: __dirname,
                createDefaultProgram: true,
            },
        },
        plugins: {
            "@angular-eslint": angular.tsPlugin,
            "sort-class-members": sortClassMembers,
            "prettier": prettierPlugin,
            "prefer-arrow": preferArrow,
        },
        processor: angular.processInlineTemplates,
        rules: {
            "@typescript-eslint/member-ordering": "off",
            "lines-between-class-members": [
                "error",
                "always",
                { "exceptAfterSingleLine": true }
            ],
            "prettier/prettier": [
                "error",
                {
                    printWidth: 160,
                    tabWidth: 2,
                    useTabs: false,
                    singleQuote: true,
                    trailingComma: "none",
                    plugins: ["prettier-plugin-tailwindcss"],
                }
            ],
            "@typescript-eslint/naming-convention": [
                "error",
                {
                    selector: "classProperty",
                    modifiers: ["private"],
                    format: ["camelCase"],
                    leadingUnderscore: "allow"
                },
                {
                    selector: "classProperty",
                    modifiers: ["protected"],
                    format: ["camelCase"],
                    leadingUnderscore: "allow"
                },
                {
                    selector: "variable",
                    modifiers: ["const", "global"],
                    format: ["UPPER_CASE"]
                },
                {
                    selector: "variable",
                    format: ["camelCase", "UPPER_CASE"],
                    leadingUnderscore: "allow"
                }
            ],
            "sort-class-members/sort-class-members": [
                "error",
                {
                    accessorPairPositioning: "getThenSet",
                    order: [
                        "[private-readonly-properties]",
                        "[protected-readonly-properties]",
                        "[public-readonly-properties]",
                        "[static-properties]",
                        "[private-readonly-properties]",
                        "[public-properties]",
                        "[protected-properties]",
                        "[private-properties]",
                        "[properties]",
                        "[lifecycle-methods]",
                        "[initialization-methods]",
                        "[subscription-methods]",
                        "[public-methods]",
                        "[protected-methods]",
                        "[private-methods]"
                    ],
                    groups: {
                        "private-readonly-properties": [{ type: "property", accessibility: "private", readonly: true }],
                        "protected-readonly-properties": [{ type: "property", accessibility: "protected", readonly: true }],
                        "public-readonly-properties": [{ type: "property", accessibility: "public", readonly: true }],
                        "static-properties": [{ type: "property", static: true }],
                        "public-properties": [{ type: "property", accessibility: "public" }],
                        "protected-properties": [{ type: "property", accessibility: "protected" }],
                        "private-properties": [{ type: "property", accessibility: "private" }],
                        "lifecycle-methods": [
                            { name: "constructor", type: "method" },
                            { name: "ngOnChanges", type: "method" },
                            { name: "ngOnInit", type: "method" },
                            { name: "ngDoCheck", type: "method" },
                            { name: "ngAfterContentInit", type: "method" },
                            { name: "ngAfterContentChecked", type: "method" },
                            { name: "ngAfterViewInit", type: "method" },
                            { name: "ngAfterViewChecked", type: "method" },
                            { name: "ngOnDestroy", type: "method" }
                        ],
                        "initialization-methods": [
                            { name: "/^(init|initialize|initComponent)$/", type: "method" }
                        ],
                        "subscription-methods": [
                            { name: "createSubscriptions", type: "method" }
                        ],
                        "public-methods": [
                            {
                                type: "method",
                                accessibility: "public",
                                name: "/^(?!(ngOnChanges|ngOnInit|ngDoCheck|ngAfterContentInit|ngAfterContentChecked|ngAfterViewInit|ngAfterViewChecked|ngOnDestroy|init|initialize|initComponent|createSubscriptions|constructor)).*$/"
                            }
                        ],
                        "protected-methods": [
                            {
                                type: "method",
                                accessibility: "protected",
                                name: "/^(?!(ngOnChanges|ngOnInit|ngDoCheck|ngAfterContentInit|ngAfterContentChecked|ngAfterViewInit|ngAfterViewChecked|ngOnDestroy|init|initialize|initComponent|createSubscriptions|constructor)).*$/"
                            }
                        ],
                        "private-methods": [
                            {
                                type: "method",
                                accessibility: "private",
                                name: "/^(?!(ngOnChanges|ngOnInit|ngDoCheck|ngAfterContentInit|ngAfterContentChecked|ngAfterViewInit|ngAfterViewChecked|ngOnDestroy|init|initialize|initComponent|createSubscriptions|constructor)).*$/"

                            }
                        ]
                    }
                }
            ],
            "max-params": "off",
            "@typescript-eslint/explicit-member-accessibility": [
                "error",
                {
                    accessibility: "explicit",
                    overrides: {
                        constructors: "no-public"
                    }
                }
            ],
            "@typescript-eslint/no-unused-vars": [
                "warn",
                { "argsIgnorePattern": "^_", "varsIgnorePattern": "^_", "caughtErrorsIgnorePattern": "^_" }
            ],
            "@angular-eslint/directive-selector": [
                "error",
                { type: "attribute", prefix: "app", style: "camelCase" }
            ],
            "@angular-eslint/component-selector": [
                "error",
                { type: "element", prefix: "app", style: "kebab-case" }
            ]
        }
    }
];