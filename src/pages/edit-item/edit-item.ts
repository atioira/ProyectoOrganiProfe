import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FichaItem } from '../../models/ficha-item/ficha-item.interface';
import { ListaFichasProvider } from '../../providers/lista-fichas/lista-fichas';

/**
 * Generated class for the EditItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-item',
  templateUrl: 'edit-item.html',
})
export class EditItemPage {

  item: FichaItem;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private servicioListaFicha: ListaFichasProvider,
              private toast: ToastController) {
    this.item=navParams.get("item");
  }
  guardarItem(item:FichaItem){
    if(this.comprobar(item)==true){
      this.servicioListaFicha.editItem(item)
      .then(()=>{
        this.navCtrl.setRoot("TabsPage");
        this.mensaje("Alumno modificado");
      }
      )
    }
    else this.mensaje("Rellene todos los campos");
    
  }

  borrarItem(item:FichaItem){
    this.servicioListaFicha.deleteItem(item)
        .then (()=>{
          this.mensaje("Alumno borrado");
          this.navCtrl.setRoot("TabsPage");
        }
        )
  }

  mensaje (texto:string){
    const toast=this.toast.create({
      message: texto,
      duration: 3000
    });
    toast.present();
  }

  comprobar(item:FichaItem){
    if(item.nombre!='' && item.apellidos!=''&& item.curso!=''
        && item.direccion!='' && item.email!='' && item.datosTutor!=''
        && item.fechaNacimiento!='' && item.materias!='' && item.telefono!='')
        return true;
    else return false;
  }

}
