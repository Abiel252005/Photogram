import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TagUsersPage } from './tag-users.page';

const routes: Routes = [
  {
    path: '',
    component: TagUsersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TagUsersPageRoutingModule {}
