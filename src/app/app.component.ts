
import { Component } from '@angular/core';
import { EnlacesService } from './contenido/services/enlaces.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EnlacesIBC';

  constructor(private enlacesService: EnlacesService) {
    
  }
  MostrarModalInfo(){
    this.enlacesService.MostrarModalInfo()
  }

}


