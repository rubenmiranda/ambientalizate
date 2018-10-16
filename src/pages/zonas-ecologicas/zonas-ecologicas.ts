import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EmpresasPage } from '../empresas/empresas';
import { PuntosEcologicosPage } from '../puntos-ecologicos/puntos-ecologicos';

@Component({
  selector: 'page-zonas-ecologicas',
  templateUrl: 'zonas-ecologicas.html'
})
export class ZonasEcologicasPage {

  constructor(public navCtrl: NavController) {
  }
  goToEmpresas(params){
    if (!params) params = {};
    this.navCtrl.push(EmpresasPage);
  }goToPuntosEcologicos(params){
    if (!params) params = {};
    this.navCtrl.push(PuntosEcologicosPage);
  }
}
