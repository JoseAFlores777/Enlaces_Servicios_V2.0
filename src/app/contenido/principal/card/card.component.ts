import { Component, OnInit } from '@angular/core';
import { Enlaces } from '../../interfaces/enlaces.interface';
import { EnlacesService } from '../../services/enlaces.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent  {

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
