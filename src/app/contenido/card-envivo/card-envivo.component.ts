import { Component, OnInit } from '@angular/core';
import { EnlacesService } from '../services/enlaces.service';

@Component({
  selector: 'app-card-envivo',
  templateUrl: './card-envivo.component.html',
  styleUrls: ['./card-envivo.component.css']
})
  
  
export class CardEnvivoComponent  {


  // private url: string = this.resultados.length.toString();

  get resultados() {
    return this.enlacesService.resultados.length;
  }

  
  constructor(private enlacesService: EnlacesService) {
    console.log(this.enlacesService)
    console.log(this.resultados)
    // this.url=this.resultados[0].toString();
    // console.log(this.url)
  }


}
