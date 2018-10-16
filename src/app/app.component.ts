import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ZonasEcologicasPage } from '../pages/zonas-ecologicas/zonas-ecologicas';
import { EmpresasPage } from '../pages/empresas/empresas';
import { PuntosEcologicosPage } from '../pages/puntos-ecologicos/puntos-ecologicos';
import { EventoModalPage  } from '../pages/event-modal/event-modal';
import { CodigoQRPage } from '../pages/codigo-qr/codigo-qr';
import { PaginaScanerPage } from '../pages/pagina-scaner/pagina-scaner';
import { InformacionCanecaPage } from '../pages/informacion-caneca/informacion-caneca';

import { NgCalendarModule } from 'ionic2-calendar';
import { PrincipalPage } from '../pages/principal/principal';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = PrincipalPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToPrincipal(params){
    if (!params) params = {};
    this.navCtrl.setRoot(PrincipalPage);
  }goToZonasEcologicas(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ZonasEcologicasPage);
  }goToEmpresas(params){
    if (!params) params = {};
    this.navCtrl.setRoot(EmpresasPage);
  }goToPuntosEcologicos(params){
    if (!params) params = {};
    this.navCtrl.setRoot(PuntosEcologicosPage);
  }goToEventos(params){
    if (!params) params = {};
    this.navCtrl.setRoot(EventoModalPage);
  }goToCodigoQR(params){
    if (!params) params = {};
    this.navCtrl.setRoot(CodigoQRPage);
  }goToPaginaScaner(params){
    if (!params) params = {};
    this.navCtrl.setRoot(PaginaScanerPage);
  }goToInformacionCaneca(params){
    if (!params) params = {};
    this.navCtrl.setRoot(InformacionCanecaPage);
  }
}
