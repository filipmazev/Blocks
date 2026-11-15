# Surface preview

Renders `BxSurfaceDirective` with opt-in glassiness above large text and a static accent light registered through `mountGlassScene`. Lighting, refraction,
translucency, theme updates and accessibility fallbacks come from the actual shared renderer. No simulated glass layer or copied lighting CSS is used. The scene
owns its observers and is destroyed with the preview.
