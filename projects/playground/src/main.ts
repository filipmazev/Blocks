import { provideZonelessChangeDetection } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

import { App } from '@playground/app';
import { APP_CONFIG } from '@playground/app.config';

bootstrapApplication(App, {
  ...APP_CONFIG,
  providers: [provideZonelessChangeDetection(), ...APP_CONFIG.providers]
}).catch((err) => console.error(err));
