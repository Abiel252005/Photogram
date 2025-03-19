import { Component } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular'; // Se agregó ModalController
import { Geolocation } from '@capacitor/geolocation';
import { TagUsersPage } from '../tag-users/tag-users.page'; // Importación del componente para etiquetar
import { AddMusicPage } from '../add-music/add-music.page'; // Importación del componente para agregar música

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
  standalone: false,
})
export class CreatePage {
  imagenPreview: string | ArrayBuffer | null = null;
  caption: string = '';
  ubicacion: string = ''; // Agregado para almacenar la ubicación
  etiquetados: any[] = []; // Lista para almacenar etiquetas de usuarios
  selectedMusic: { name: string; artist: string } | null = null; // Para almacenar la música seleccionada

  constructor(
    private navCtrl: NavController,
    private modalCtrl: ModalController // Se inyectó ModalController
  ) {}

  cargarImagen(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imagenPreview = e.target?.result ?? null;
      };
      reader.readAsDataURL(file);
    }
  }

  async agregarUbicacion() {
    try {
      const coordinates = await Geolocation.getCurrentPosition();
      console.log('Ubicación:', coordinates);
      this.ubicacion = `Lat: ${coordinates.coords.latitude}, Lng: ${coordinates.coords.longitude}`;
    } catch (error) {
      console.error('Error obteniendo ubicación:', error);
    }
  }

  async etiquetarPersonas() {
    const modal = await this.modalCtrl.create({
      component: TagUsersPage,
    });

    modal.onDidDismiss().then((data) => {
      if (data.data) {
        this.etiquetados = data.data;
        console.log('Usuarios etiquetados:', this.etiquetados);
      }
    });

    return await modal.present();
  }

  async openMusicModal() {
    const modal = await this.modalCtrl.create({
      component: AddMusicPage, // Componente que se utiliza para agregar música
    });

    await modal.present();

    const { data } = await modal.onWillDismiss();
    if (data) {
      this.selectedMusic = data; // Guardar la música seleccionada
      console.log('Música seleccionada:', this.selectedMusic);
    }
  }

  publicarPost() {
    if (this.imagenPreview) {
      console.log('Publicación creada:', {
        imagen: this.imagenPreview,
        caption: this.caption,
        ubicacion: this.ubicacion,
        etiquetados: this.etiquetados,
        musica: this.selectedMusic, // Incluye la música seleccionada
      });

      // Resetear campos
      this.imagenPreview = null;
      this.caption = '';
      this.ubicacion = '';
      this.etiquetados = [];
      this.selectedMusic = null; // Reiniciar música seleccionada

      // Volver a la pantalla principal
      this.navCtrl.navigateRoot('/tabs');
    } else {
      console.log('Selecciona una imagen antes de publicar');
    }
  }
}
