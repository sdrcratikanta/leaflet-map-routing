import { Component } from '@angular/core';
import {Map, tileLayer, marker} from 'leaflet';
import 'leaflet';
import 'leaflet-routing-machine';
declare let L;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  map: Map;
  constructor() {}

  ionViewDidEnter() {
    this.map = new Map('map', {
      zoomControl: false,
      attributionControl: false
    }).setView([20.148285, 85.881818], 12);
    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
    .addTo(this.map);
    L.Routing.control({
      waypoints: [L.latLng(20.148285, 85.881818), L.latLng(20.2720547, 85.8463495)],
      routeWhileDragging: true
    }).addTo(this.map);
  }

}
