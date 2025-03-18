import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-content',
  templateUrl: './profile-content.component.html',
  styleUrls: ['./profile-content.component.scss'],
  standalone: false
})
export class ProfileContentComponent  implements OnInit {
  user = {
    username: 'abiel_ont',
    name: 'Abiel Ontiveros',
    profilePicture: 'https://i.pinimg.com/474x/39/07/d6/3907d69a0e401c5355fdd5b35de54f31.jpg',
    bio: "We're kissing in the bathroom 🚻, girl, and, uh I hope nobody catch us",
    followers: 168,
    following: 422,
    posts: 0,
  };
  
  stories = [
    { image: 'https://picsum.photos/id/20/200/300', title: '🤖' },
    { image: 'https://picsum.photos/id/1/200/300', title: '💀' },
    { image: 'https://picsum.photos/id/40/200/300', title: '🦆' },
    { image: 'https://picsum.photos/id/43/200/300', title: '✈️' },
  ];

  headerIcons = [
    { icon: 'notifications-outline', action: 'notifications' },
    { icon: 'add-outline', action: 'addPost' },
    { icon: 'menu-outline', action: 'menu' }
  ];

  constructor() { }

  ngOnInit() {}

}
