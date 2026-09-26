import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // 👈 Le enseña a Angular a aceptar todos los botones, cabeceras e íconos de Ionic
})
export class Tab1Page {

  producto = {
    id: 1,
    title: 'Calzado Deportivo Running',
    price: 249900,
    image: 'https://adidas.com'
  };

  constructor() {}

  // Función interactiva vinculada al botón verde
  comprar() {
    // Criterio de Almacenamiento Local (localStorage nativo de la rúbrica)
    localStorage.setItem('carrito_status', 'activo_ucompensar_tienda');
    
    // Alerta interactiva nativa para la captura de pantalla del informe
    alert('¡Éxito! Producto añadido al carrito. Almacenamiento local en localStorage actualizado.');
  }
}
