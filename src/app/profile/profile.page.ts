import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: false
})
export class ProfilePage implements OnInit {
  user = {
    username: 'abiel_ont'
  };
  

  constructor() { }
  ngOnInit() {
  }

}
