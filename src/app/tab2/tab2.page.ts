import { Component } from '@angular/core';
import { PhotoService } from '../services/photo'; // Importa el servicio de fotos clásico

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false // ¡CAMBIO CLAVE! Le dice a Angular que este componente pertenece a un módulo tradicional
})
export class Tab2Page {

  // CONTROLADOR: Inyección del servicio para que la vista HTML renderice el arreglo de capturas
  constructor(public photoService: PhotoService) {}

}
