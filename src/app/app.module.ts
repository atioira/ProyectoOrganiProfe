import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthProvider } from '../providers/auth/auth';
import { ListaFichasProvider } from '../providers/lista-fichas/lista-fichas';

import {EmailComposer} from '@ionic-native/email-composer/ngx';

export const firebaseConfig = {
  apiKey: "AIzaSyCCmTtI4i6iFY3b5-aFgli4d6tsjqAsRyw",
    authDomain: "organiprofe.firebaseapp.com",
    databaseURL: "https://organiprofe.firebaseio.com",
    projectId: "organiprofe",
    storageBucket: "organiprofe.appspot.com",
    messagingSenderId: "765013847018"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    EmailComposer,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    ListaFichasProvider
  ]
})
export class AppModule {}
