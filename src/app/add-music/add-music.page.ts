import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-music',
  templateUrl: './add-music.page.html',
  styleUrls: ['./add-music.page.scss'],
  standalone: false,
})
export class AddMusicPage {
  songs = [
    { name: 'Amapola', artist: 'Natanael Cano', file: 'assets/amapola.mp3' },
    { name: 'El Drip', artist: 'Natanael Cano', file: 'assets/Drip.mp3' },
    { name: 'Porte Exuberante', artist: 'Natanael Cano', file: 'assets/Porte.mp3' }
  ];

  selectedSong: any = null;
  audio = new Audio();

  constructor(private modalCtrl: ModalController) {}

  playPreview(song: any) {
    if (this.selectedSong === song) {
      this.audio.pause();
      this.selectedSong = null;
    } else {
      this.audio.src = song.file;
      this.audio.play();
      this.selectedSong = song;
    }
  }

  selectSong(song: any) {
    this.audio.pause();
    this.modalCtrl.dismiss(song);
  }

  closeModal() {
    this.audio.pause();
    this.modalCtrl.dismiss();
  }
}
