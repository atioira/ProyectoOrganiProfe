import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FichasPage } from './fichas';

@NgModule({
  declarations: [
    FichasPage,
  ],
  imports: [
    IonicPageModule.forChild(FichasPage),
  ],
})
export class FichasPageModule {}
