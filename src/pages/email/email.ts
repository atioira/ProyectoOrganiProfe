import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {EmailComposer} from '@ionic-native/email-composer/ngx'
import { Subject } from 'rxjs/Subject';

/**
 * Generated class for the EmailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-email',
  templateUrl: 'email.html',
})
export class EmailPage {
  subject='';
  body='';
  to='';
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public emailComposer: EmailComposer) {
  }
  send(){
    /*  this.emailComposer.isAvailable().then((available: boolean) =>{
       if(available) {
         //Now we know we can send
       }
      }); */
     let email={
       to: this.to,
       cc: [],
       bcc:[],
       attachment:[],
       subject: this.subject,
       body: this.body,
       isHtml:false,
       app:"Gmail"
     }
     this.emailComposer.open(email);
   }
 }
 