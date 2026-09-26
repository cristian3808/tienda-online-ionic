import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';

// INTERFAZ: Define la estructura estricta que tendrá cada objeto de fotografía en nuestra app
export interface UserPhoto {
  filepath: string;     // Ruta física donde se almacena el archivo de la imagen en el dispositivo
  webviewPath: string;  // Ruta web temporal requerida por Angular para renderizar la foto en el HTML
}

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  // ARREGLO DINÁMICO: Almacena temporalmente en memoria la lista de fotos capturadas para la galería
  public photos: UserPhoto[] = [];

  constructor() { }

  // MÉTODO PRINCIPAL: Invoca la cámara nativa del emulador o dispositivo y procesa la captura
  public async addNewToGallery() {
    // LLAMADO NATIVO: Utiliza el plugin de Capacitor para levantar la interfaz de la cámara de hardware
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri, // Solicita un URI que apunta de manera temporal a la foto tomada
      source: CameraSource.Camera,     // Fuerza la apertura directa de la cámara (sin pasar por la galería)
      quality: 100                     // Configura la resolución de la imagen al máximo nivel de calidad (0-100)
    });

    // INSERCIÓN DE DATOS: Agrega el objeto estructurado al inicio del arreglo para su visualización inmediata
    this.photos.unshift({
      filepath: "foto_" + new Date().getTime() + ".jpeg", // Genera un nombre de archivo único basado en milisegundos
      webviewPath: capturedPhoto.webPath! // Asigna la ruta de renderizado seguro extraída de la captura
    });
  }
}