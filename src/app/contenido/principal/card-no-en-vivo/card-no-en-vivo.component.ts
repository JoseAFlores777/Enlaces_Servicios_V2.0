import { Component, ElementRef,ViewChild, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Enlaces } from '../../interfaces/enlaces.interface';
import { EnlacesService } from '../../services/enlaces.service';





@Component({
  selector: 'app-card-no-en-vivo',
  templateUrl: './card-no-en-vivo.component.html',
  styleUrls: ['./card-no-en-vivo.component.css']
})
export class CardNoEnVivoComponent  {


  // private url: string = this.resultados.length.toString();



  get resultados(): Enlaces {
    
    return this.enlacesService.resultados;
  }
  
   Datos = this.enlacesService.Datos;
  
  constructor(private enlacesService: EnlacesService) {
    //  console.log(this.enlacesService);
    
    // this.url=this.resultados[0].toString();
    // console.log(this.url)
    

  }



}
