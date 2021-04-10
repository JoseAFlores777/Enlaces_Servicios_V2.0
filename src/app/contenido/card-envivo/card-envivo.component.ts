import { Component, OnInit } from '@angular/core';
import { EnlacesService } from '../services/enlaces.service';
import { Enlaces } from '../interfaces/enlaces.interface';

@Component({
  selector: 'app-card-envivo',
  templateUrl: './card-envivo.component.html',
  styleUrls: ['./card-envivo.component.css']
})
  
  
export class CardEnvivoComponent  {


  // private url: string = this.resultados.length.toString();

  get resultados(): Enlaces {
    
    return this.enlacesService.resultados;
  }

  
  constructor(private enlacesService: EnlacesService) {
    //  console.log(this.enlacesService);
    
    // this.url=this.resultados[0].toString();
    // console.log(this.url)

  }


}
