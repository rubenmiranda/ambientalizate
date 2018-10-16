import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PaginaScanerPage } from '../pagina-scaner/pagina-scaner';
import { InformacionCanecaPage } from '../informacion-caneca/informacion-caneca';

@Component({
  selector: 'page-codigo-qr',
  templateUrl: 'codigo-qr.html'
})
export class CodigoQRPage {

  constructor(public navCtrl: NavController) {
  }
  goToPaginaScaner(params){
    if (!params) params = {};
    this.navCtrl.push(PaginaScanerPage);
  }goToInformacionCaneca(params){
    if (!params) params = {};
    this.navCtrl.push(InformacionCanecaPage);
  }
}
