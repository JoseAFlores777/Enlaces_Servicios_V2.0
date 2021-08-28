import { Component, OnInit } from '@angular/core';
import { Enlaces } from '../../interfaces/enlaces.interface';

import { EnlacesDamasService } from '../../services/enlacesDamas.service';

@Component({
  selector: 'app-card-damas',
  templateUrl: './card-damas.component.html',
  styleUrls: ['./card-damas.component.css']
})
export class CardDamasComponent  {


  // private url: string = this.resultados.length.toString();

  get resultados(): Enlaces {
    
    return this.enlacesService.resultados;
  }

  
  constructor(private enlacesService: EnlacesDamasService) {
    //  console.log(this.enlacesService);
    
    // this.url=this.resultados[0].toString();
    // console.log(this.url)

  }
}
