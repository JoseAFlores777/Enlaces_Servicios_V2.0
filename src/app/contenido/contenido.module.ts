import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardEnvivoComponent } from './principal/card-envivo/card-envivo.component';
import { CardComponent } from './principal/card/card.component';
import { CardNoEnVivoComponent } from './principal/card-no-en-vivo/card-no-en-vivo.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { FooterComponent } from './footer/footer.component';
import { BotonEncuestaComponent } from './principal/boton-encuesta/boton-encuesta.component';
import { ContenidoRoutingModule } from './contenido-routing.module';
import { BotonInscripcionDamasComponent } from './damas/boton-inscripcion-damas/boton-inscripcion-damas.component';
import { CardDamasComponent } from './damas/card-damas/card-damas.component';
import { CardEnVivoDamasComponent } from './damas/card-en-vivo-damas/card-en-vivo-damas.component';
import { CardNoEnVivoDamasComponent } from './damas/card-no-en-vivo-damas/card-no-en-vivo-damas.component';
import { TimerComponent } from './damas/timer/timer.component';




@NgModule({
  declarations: [
    CardEnvivoComponent,
    CardComponent,
    CardNoEnVivoComponent,
    FooterComponent,
    BotonEncuestaComponent,
    BotonInscripcionDamasComponent,
    CardDamasComponent,
    CardEnVivoDamasComponent,
    CardNoEnVivoDamasComponent,
    TimerComponent,
    
  ],
  exports: [
    CardComponent,
    FooterComponent
  ]
  ,
  imports: [
    CommonModule,
    ContenidoRoutingModule,
    SweetAlert2Module
  ]
})
export class ContenidoModule { }
