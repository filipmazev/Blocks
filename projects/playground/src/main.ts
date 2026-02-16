import { provideZonelessChangeDetection } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { APP_CONFIG } from '@playground/app.config';
import { App } from '@playground/app';

bootstrapApplication(App, {
  ...APP_CONFIG,
  providers: [provideZonelessChangeDetection(), ...APP_CONFIG.providers]
}).catch((err) => console.error(err));
