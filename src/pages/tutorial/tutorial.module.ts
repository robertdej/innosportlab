import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Tutorial } from './tutorial';

@NgModule({
  declarations: [
    Tutorial,
  ],
  imports: [
    IonicPageModule.forChild(Tutorial),
  ],
  exports: [
    Tutorial
  ]
})
export class TutorialModule {}
