import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discovers',
  templateUrl: './discovers.component.html',
  styleUrls: ['./discovers.component.scss'],
  standalone: false
})
export class DiscoversComponent implements OnInit {

  media: any[] = [
    { type: 'image', url: 'https://picsum.photos/id/10/200/300' },
    { type: 'video', url: 'assets/pride.mp4' },
    { type: 'image', url: 'https://picsum.photos/id/12/200/300' },
    { type: 'image', url: 'https://picsum.photos/id/13/200/300' },
    { type: 'image', url: 'https://picsum.photos/id/14/200/300' },
    { type: 'image', url: 'https://picsum.photos/id/15/200/300' },
    { type: 'image', url: 'https://picsum.photos/id/43/200/300' },
    { type: 'image', url: 'https://picsum.photos/id/44/200/300' },
    { type: 'image', url: 'https://picsum.photos/id/45/200/300' },
  ];

  selectedMedia: any | null = null;

  constructor() {}

  ngOnInit() {}

  openMedia(media: any) {
    this.selectedMedia = media;
  }

  closeModal() {
    this.selectedMedia = null;
  }
}
