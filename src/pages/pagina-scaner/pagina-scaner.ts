import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InformacionCanecaPage } from '../informacion-caneca/informacion-caneca';

@Component({
  selector: 'page-pagina-scaner',
  templateUrl: 'pagina-scaner.html'
})
export class PaginaScanerPage {

  constructor(public navCtrl: NavController) {
  }
  goToInformacionCaneca(params){
    if (!params) params = {};
    this.navCtrl.push(InformacionCanecaPage);
  }
}
