import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FichaItem } from '../../models/ficha-item/ficha-item.interface';
import { ListaFichasProvider } from '../../providers/lista-fichas/lista-fichas';

/**
 * Generated class for the AddItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html',
})
export class AddItemPage {

  item:FichaItem={
    nombre:"",
    apellidos:"",
    direccion:"",
    fechaNacimiento:"",
    telefono:"",
    email:"",
    curso:"",
    materias:"",
    datosTutor:""
  }

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private servicioListaFicha: ListaFichasProvider,
              private toast: ToastController) {
  }

  addItem(item:FichaItem){
    if(this.comprobar(item)==true){
      this.servicioListaFicha.addItem(item).then (ref=>{
        console.log(ref.key); 
        this.navCtrl.setRoot("FichasPage");
      }
      )
      this.mensaje("Alumno añadido");
    }
    else this.mensaje("Rellene todos los campos");
 }
  comprobar(item:FichaItem){
    if(item.nombre!='' && item.apellidos!=''&& item.curso!=''
        && item.direccion!='' && item.email!='' && item.datosTutor!=''
        && item.fechaNacimiento!='' && item.materias!='' && item.telefono!='')
        return true;
    else return false;
  }

  mensaje (texto:string){
    const toast=this.toast.create({
      message: texto,
      duration: 3000
    });
    toast.present();
  }
}
