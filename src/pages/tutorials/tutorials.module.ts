import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Tutorials } from './tutorials';

@NgModule({
  declarations: [
    Tutorials,
  ],
  imports: [
    IonicPageModule.forChild(Tutorials),
  ],
  exports: [
    Tutorials
  ]
})
export class TutorialsModule {}
