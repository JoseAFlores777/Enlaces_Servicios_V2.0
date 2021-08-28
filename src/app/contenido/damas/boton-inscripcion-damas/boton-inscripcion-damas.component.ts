import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

import { EnlacesDamasService } from '../../services/enlacesDamas.service';

@Component({
  selector: 'app-boton-inscripcion-damas',
  templateUrl: './boton-inscripcion-damas.component.html',
  styleUrls: ['./boton-inscripcion-damas.component.css']
})
  
export class BotonInscripcionDamasComponent  {

  constructor(private enlacesService: EnlacesDamasService) { }

  redirection() {
   
    window.location.href = this.enlacesService.resultados.url_f_Encuesta1;
  }

  

}
