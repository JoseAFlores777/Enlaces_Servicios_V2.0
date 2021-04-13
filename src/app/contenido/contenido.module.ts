import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardEnvivoComponent } from './card-envivo/card-envivo.component';
import { CardComponent } from './card/card.component';
import { CardNoEnVivoComponent } from './card-no-en-vivo/card-no-en-vivo.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { FooterComponent } from './footer/footer.component';
import { BotonEncuestaComponent } from './boton-encuesta/boton-encuesta.component';



@NgModule({
  declarations: [
    CardEnvivoComponent,
    CardComponent,
    CardNoEnVivoComponent,
    FooterComponent,
    BotonEncuestaComponent
  ],
  exports: [
    CardComponent,
    FooterComponent
  ]
  ,
  imports: [
    CommonModule,
    SweetAlert2Module
  ]
})
export class ContenidoModule { }
