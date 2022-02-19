import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
 
})
export class ListadoComponent  {

  heroes: string[]=['Spiderman', 'Iroman', 'flash','Hulk'];
  heroeBorrado: string= '';

  borrarHeroe(){
    console.log('borrando...');
    const  heroeBorrado = this.heroes.pop() || '';
    this.heroeBorrado = heroeBorrado;
  }

  

}
