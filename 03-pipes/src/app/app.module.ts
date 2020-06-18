import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { registerLocaleData } from '@angular/common';
// import localeEs from '@angular/common/locales/es';

// // the second parameter 'fr-FR' is optional
// registerLocaleData(localeEs, 'es-ES');

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    // {
    //   provide: LOCALE_ID,
    //   useValue: 'es'
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
