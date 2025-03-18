import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-content',
  templateUrl: './menu-content.component.html',
  styleUrls: ['./menu-content.component.scss'],
  standalone:false
})
export class MenuContentComponent  implements OnInit {

  constructor() { }

  options = [
    { name: 'Guardado', icon: 'bookmark-outline' },
    { name: 'Archivo', icon: 'time-outline' },
    { name: 'Tu actividad', icon: 'bar-chart-outline' },
    { name: 'Notificaciones', icon: 'notifications-outline' },
    { name: 'Administración del tiempo', icon: 'time-outline' },
  ];

  ngOnInit() {}

}
