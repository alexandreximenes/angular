import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FotoComponent } from './foto.component';
// import { FiltroPorTitulo } from './foto.pipes';

@NgModule({
  imports: [ CommonModule ],
  declarations: [ FotoComponent ],
  exports: [FotoComponent]
})

export class FotoModule { }