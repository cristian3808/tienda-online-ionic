import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1PageRoutingModule } from './tab1-routing.module';
import { Tab1Page } from './tab1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    Tab1PageRoutingModule,
    Tab1Page // Importado aquí de forma obligatoria por ser un componente standalone
  ],
  declarations: [] // Se mantiene completamente vacío para evitar el error NG6008
})
export class Tab1PageModule {}
