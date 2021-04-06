import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardEnvivoComponent } from './card-envivo/card-envivo.component';



@NgModule({
  declarations: [
    CardEnvivoComponent
  ],
  exports: [
    CardEnvivoComponent
  ]
  ,
  imports: [
    CommonModule
  ]
})
export class ContenidoModule { }
