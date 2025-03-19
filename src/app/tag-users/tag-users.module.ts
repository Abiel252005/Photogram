import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TagUsersPageRoutingModule } from './tag-users-routing.module';

import { TagUsersPage } from './tag-users.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TagUsersPageRoutingModule
  ],
  declarations: [TagUsersPage]
})
export class TagUsersPageModule {}
