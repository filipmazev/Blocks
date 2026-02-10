import { provideZonelessChangeDetection } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from '@playground/app.config';
import { App } from '@playground/app';

bootstrapApplication(App, {
  ...appConfig,
  providers: [
    provideZonelessChangeDetection(),
    ...appConfig.providers
  ]
})
  .catch((err) => console.error(err));
