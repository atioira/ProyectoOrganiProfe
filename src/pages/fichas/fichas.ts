import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListaFichasProvider } from '../../providers/lista-fichas/lista-fichas';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FichaItem } from './../../models/ficha-item/ficha-item.interface';

/**
 * Generated class for the FichasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fichas',
  templateUrl: 'fichas.html',
})
export class FichasPage {

  listaFicha: Observable<FichaItem[]>;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private ficha: ListaFichasProvider) {
    this.listaFicha = this.ficha
      .getItemList()
      .snapshotChanges()
      .pipe(map(changes => {
        return changes.map(c => (
          {
            key: c.payload.key,
            ...c.payload.val(),
          }
        )
        )
      }
      )
      )
  }

  selectFichaItem(fichaItem: FichaItem){
    this.navCtrl.push("EditItemPage",{"item": fichaItem});
  }

}
