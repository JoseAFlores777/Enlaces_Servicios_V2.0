import { Component, OnInit } from '@angular/core';
import { Enlaces } from '../interfaces/enlaces.interface';
import { EnlacesService } from '../services/enlaces.service';

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

  
  constructor(private enlacesService: EnlacesService) {
    //  console.log(this.enlacesService);
    
    // this.url=this.resultados[0].toString();
    // console.log(this.url)

  }

}
