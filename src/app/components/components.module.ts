import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { CardPostComponent } from './card-post/card-post.component';
import { IonicModule } from '@ionic/angular';
import { StoriesComponent } from './stories/stories.component';
import { DiscoversComponent } from './discovers/discovers.component';
import { ProfileContentComponent } from './profile-content/profile-content.component';
import { MenuContentComponent } from './menu-content/menu-content.component';

@NgModule({
  declarations: [
    LayoutComponent,
    CardPostComponent,
    StoriesComponent,
    DiscoversComponent,
    ProfileContentComponent,
    MenuContentComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    LayoutComponent,
    CardPostComponent,
    StoriesComponent,
    DiscoversComponent,
    ProfileContentComponent,
    MenuContentComponent
  ]
})
export class ComponentsModule { }
