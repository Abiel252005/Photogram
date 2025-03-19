import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tag-users',
  templateUrl: './tag-users.page.html',
  styleUrls: ['./tag-users.page.scss'],
  standalone: false,
})
export class TagUsersPage {
  users = [
    { name: 'Chica Guapa', image: 'assets/nay.jpg' },
    { name: 'Daniels', image: 'assets/abiel.jpg' },
    { name: 'Carlos', image: 'assets/abiel.jpg' },
    { name: 'Ana', image: 'assets/abiel.jpg' },
  ];

  selectedUsers: string[] = [];

  constructor(private modalCtrl: ModalController) {}

  toggleUser(user: string) {
    if (this.selectedUsers.includes(user)) {
      this.selectedUsers = this.selectedUsers.filter(u => u !== user);
    } else {
      this.selectedUsers.push(user);
    }
  }

  closeModal() {
    this.modalCtrl.dismiss(this.selectedUsers);
  }
}
