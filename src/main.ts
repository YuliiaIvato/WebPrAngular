import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';

import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { appRoutes } from './app/app.routes';


bootstrapApplication(AppComponent,
  { ...appConfig,  providers: [provideHttpClient(), provideRouter(appRoutes),
      importProvidersFrom(ReactiveFormsModule) ]} )
  .catch((err) => console.error(err));



// bootstrapApplication(AppComponent, {
//   ...appConfig,
//   providers: [
//     provideHttpClient(),
//     ...(appConfig.providers || [])
//   ]
// }).catch((err) => console.error(err));

