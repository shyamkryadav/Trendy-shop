import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { API_BASE_URL } from '../shared/service-proxies/service-proxies';

import { routes } from './app.routes';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import {
  HttpClientModule,
  provideHttpClient,
  withFetch,
} from '@angular/common/http';
import { provideToastr } from 'ngx-toastr';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import {  provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export function getRemoteServiceBaseUrl(): string {
  return 'https://localhost:7142';
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideAnimationsAsync(),
    BrowserModule,
    HttpClientModule,
    provideHttpClient(),
    provideHttpClient(withFetch()),
    provideClientHydration(),
    { provide: API_BASE_URL, useFactory: getRemoteServiceBaseUrl },
    provideToastr({}),
    BrowserAnimationsModule, provideAnimationsAsync(),
  ],
};
