import { AfterContentInit, Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { Enlaces } from '../../interfaces/enlaces.interface';
import { EnlacesDamasService } from '../../services/enlacesDamas.service';


@Component({
  selector: 'app-card-no-en-vivo-damas',
  templateUrl: './card-no-en-vivo-damas.component.html',
  styleUrls: ['./card-no-en-vivo-damas.component.css']
})
export class CardNoEnVivoDamasComponent implements OnInit {


    // private url: string = this.resultados.length.toString();
  
    



    get resultados(): Enlaces {
    
      return this.enlacesService.resultados;
    }
    
     Datos = this.enlacesService.Datos;
    
    constructor(private enlacesService: EnlacesDamasService) {
     
      // this.updateCountdown()
      //  setInterval(this.updateCountdown, this.MILLISECONDS_OF_A_SECOND);
    }
  
  ngOnInit(): void {
    
  }
  
  

  
}
