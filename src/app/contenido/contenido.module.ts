import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardEnvivoComponent } from './card-envivo/card-envivo.component';
import { CardComponent } from './card/card.component';
import { CardNoEnVivoComponent } from './card-no-en-vivo/card-no-en-vivo.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';



@NgModule({
  declarations: [
    CardEnvivoComponent,
    CardComponent,
    CardNoEnVivoComponent
  ],
  exports: [
    CardComponent
  ]
  ,
  imports: [
    CommonModule,
    SweetAlert2Module
  ]
})
export class ContenidoModule { }
