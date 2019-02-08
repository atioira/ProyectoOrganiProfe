import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { FichaItem } from '../../models/ficha-item/ficha-item.interface';


@Injectable()
export class ListaFichasProvider {

  private refListaFicha=this.db.list<FichaItem>('listaFicha');

  constructor(private db:AngularFireDatabase) {
    console.log('Hello ListaFichasProvider Provider');
  }
  addItem(item: FichaItem){
    return this.refListaFicha.push(item);
  }

  getItemList(){
    return this.refListaFicha;
  }

  editItem(item:FichaItem){
    return this.refListaFicha.update(item.key, item);
  }

  deleteItem(item:FichaItem){
    return this.refListaFicha.remove (item.key);
  }

}
