import { Component } from '@angular/core';
import { NavController, ModalController, AlertController } from 'ionic-angular';
import { ZonasEcologicasPage } from '../zonas-ecologicas/zonas-ecologicas';
import { EmpresasPage } from '../empresas/empresas';
import { PuntosEcologicosPage } from '../puntos-ecologicos/puntos-ecologicos';
import { CodigoQRPage } from '../codigo-qr/codigo-qr';
import { PaginaScanerPage } from '../pagina-scaner/pagina-scaner';
import { InformacionCanecaPage } from '../informacion-caneca/informacion-caneca';



import * as moment from 'moment';
import { EventModalPage } from '../event-modal/event-modal';

@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html'
})


export class PrincipalPage {

  eventSource = [];
  viewTitle: string;
  selectedDay = new Date();

  calendar = {
    mode: 'month',
    currentDate: new Date()
  };

  constructor(public navCtrl: NavController, private modalCtrl: ModalController, private alertCtrl: AlertController) { }

  

  goToZonasEcologicas(params){
    if (!params) params = {};
    this.navCtrl.push(ZonasEcologicasPage);
  }goToEmpresas(params){
    if (!params) params = {};
    this.navCtrl.push(EmpresasPage);
  }goToPuntosEcologicos(params){
    if (!params) params = {};
    this.navCtrl.push(PuntosEcologicosPage);
  }goToCodigoQR(params){
    if (!params) params = {};
    this.navCtrl.push(CodigoQRPage);
  }goToPaginaScaner(params){
    if (!params) params = {};
    this.navCtrl.push(PaginaScanerPage);
  }goToInformacionCaneca(params){
    if (!params) params = {};
    this.navCtrl.push(InformacionCanecaPage);
  }goToEventos(params){
    if (!params) params = {};
    this.navCtrl.setRoot(EventModalPage);
  }

// calendario 


addEvent() {
  let modal = this.modalCtrl.create('EventModalPage', {selectedDay: this.selectedDay});
  modal.present();
  modal.onDidDismiss(data => {
    if (data) {
      let eventData = data;

      eventData.startTime = new Date(data.startTime);
      eventData.endTime = new Date(data.endTime);

      let events = this.eventSource;
      events.push(eventData);
      this.eventSource = [];
      setTimeout(() => {
        this.eventSource = events;
      });
    }
  });
}

onViewTitleChanged(title) {
  this.viewTitle = title;
}

onEventSelected(event) {
  let start = moment(event.startTime).format('LLLL');
  let end = moment(event.endTime).format('LLLL');
  
  let alert = this.alertCtrl.create({
    title: '' + event.title,
    subTitle: 'From: ' + start + '<br>To: ' + end,
    buttons: ['OK']
  })
  alert.present();
}

onTimeSelected(ev) {
  this.selectedDay = ev.selectedTime;
}
  

}
