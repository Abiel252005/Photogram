import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'feed',
        loadChildren: () => import('../feed/feed.module').then(m => m.FeedPageModule)
      },

      {
        path: 'discover',
        loadChildren: () => import('../discover/discover.module').then( m => m.DiscoverPageModule)
      },

      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then( m => m.ProfilePageModule)
      },

      {
        path: 'menu',
        loadChildren: () => import('../menu/menu.module').then( m => m.MenuPageModule)
      },

      {
        path: 'create',
        loadChildren: () => import('../create/create.module').then( m => m.CreatePageModule)
      },
    
      {
        path: '',
        redirectTo: '/feed',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/feed',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
