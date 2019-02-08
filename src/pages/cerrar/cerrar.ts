import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';


/**
 * Generated class for the CerrarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cerrar',
  templateUrl: 'cerrar.html',
})
export class CerrarPage {
  userEmail: string='';
  constructor(public navCtrl: NavController,
               public navParams: NavParams,
               public auth : AuthProvider) {
    this.userEmail = this.auth.getUserEmail();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CerrarPage');
  }

  cerrarSesion(){
    this.auth.logout();
}

}
