import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardDamasComponent } from './damas/card-damas/card-damas.component';
import { CardComponent } from './principal/card/card.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component:CardComponent
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContenidoRoutingModule { }
