# Custom icon content

Import `IconContentDirective` from `@filip.mazev/blocks/primitives`. Use `bxIconStart` and `bxIconEnd` on noninteractive elements to place logos, swatches or
custom artwork in supported leading and trailing positions.

```html
<button bx-button type="button" [loading]="saving()">
    <img bxIconStart src="assets/brand.svg" width="20" height="20" alt="" />
    Save theme
    <span bxIconEnd aria-hidden="true">⌘S</span>
</button>
<bx-menu-item label="Workspace" icon="folder" endIcon="chevron-right">
    <img bxIconStart src="assets/brand.svg" width="20" height="20" alt="" />
    <span bxIconEnd aria-hidden="true">Pro</span>
</bx-menu-item>
```

Projected visuals override built-in icons in the same position. Keep identifying text in the normal label and hide decorative artwork from assistive technology.
Do not put buttons or links inside another control's icon slots. Supply explicit image dimensions to avoid layout shifts.

Button, MenuItem and Tag support both positions. Chip, Alert, BottomDrawer and SidePanel support their existing leading positions. InputField and
Select/MultiSelect accept these markers alongside their existing prefix/suffix slots. Buttons recognize the directive during loading, replace the custom visual
with a measured spinner, and retain their dimensions and accessible name. `bxButtonIcon` remains supported.

Data-driven renderers use templates: Select/MultiSelect options accept `startTemplate`/`endTemplate` and default `optionStartTemplate`/`optionEndTemplate`
inputs; MenuItem and Tab accept `iconTemplate`/`endIconTemplate`; Step and picker actions accept `iconTemplate` and `pickerIconTemplate` respectively.
`IIconData.template` works in navigation, modal headers and side-panel headers. `Icon.contentTemplate` or direct projection renders custom artwork inside the
normal sized icon frame. Named icon and semantic busy/status feedback remain available.
