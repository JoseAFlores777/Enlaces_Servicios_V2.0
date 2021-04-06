import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContenidoModule } from './contenido/contenido.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ContenidoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
