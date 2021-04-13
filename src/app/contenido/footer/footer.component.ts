import { Component } from '@angular/core';
import { EnlacesService } from '../services/enlaces.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  constructor(private enlacesService: EnlacesService) { }

  ModificarDatos() {
    this.enlacesService.confirmUpdate();
  }

}
