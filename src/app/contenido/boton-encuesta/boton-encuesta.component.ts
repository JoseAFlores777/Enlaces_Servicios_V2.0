import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import Swal from 'sweetalert2';
import { EnlacesService } from '../services/enlaces.service';


@Component({
  selector: 'app-boton-encuesta',
  templateUrl: './boton-encuesta.component.html',
  styleUrls: ['./boton-encuesta.component.css']
})
export class BotonEncuestaComponent  {

  constructor(private enlacesService: EnlacesService) { }

  PedirDatos() {
    this.enlacesService.confirmFillForm();
  }

  Tutorial() {
    Swal.mixin({
      
      confirmButtonText: 'Siguiente &rarr;',
      cancelButtonText: 'Finalizar',
      showCancelButton: true,
      progressSteps: ['1', '2', '3']
    }).queue([
      {
        title: 'Paso 1',
        html: 'Haz Clic en el Botón <strong>"Llenar Encuesta"</strong>',
        imageUrl: './assets/Paso1.png',
        imageWidth: 400,
        
        imageAlt: 'Paso 1',
      },
      {
        title: 'Paso 2',
        html: 'Haz Clic en <strong>"No"</strong>',
        imageUrl: './assets/Paso2.png',
        imageWidth: 400,
        
        imageAlt: 'Paso 2',
      },
      {
        title: 'Paso 3',
        html: 'Llena el formulario con los datos de tu familiar o amigo',
        imageUrl: './assets/Paso3.png',
        imageWidth: 400,
        
        imageAlt: 'Paso 3',
        showConfirmButton:false
      },

    ])
    
    
  }

}
