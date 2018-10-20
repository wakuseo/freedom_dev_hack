import { GeoDataService } from '../provider/geo-data.service';
import { Component, OnInit } from '@angular/core';
import { tileLayer } from 'leaflet';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(private service: GeoDataService) { }

  // definizione dei layer di base per la mappa
  streetMaps = tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    detectRetina: true,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });
  wMaps = tileLayer('http://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png', {
    detectRetina: true,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });
  overlayMaps = L.layerGroup();
  // oggetto controller per i layer
  layersControl = {
    baseLayers: {
      'Street Maps': this.streetMaps,
      'Wikimedia Maps': this.wMaps
    },
    overlays: {
      'Overlay Maps': this.overlayMaps
    }
  };
  // impostazioni dei layer per inizializzazione della mappa
  options = {
    layers: [this.streetMaps],
    zoom: 8,
    center: L.latLng([46.879966, -121.726909])
  };

  createIcon() {
    return L.icon({
      iconSize: [90, 60],
      iconAnchor: [90, 60],
      iconUrl: 'leaflet/mano.png',
      shadowUrl: 'leaflet/marker-shadow.png'
    });
  }

  ngOnInit() {
    /*this.service.getGeoData().subscribe(data => {
      data.map(k => {
        const id = k.id;
        const name = k.name;
        const lat = k.lat;
        const lng = k.lng;

        const markerMaps = L.marker(
          [lat, lng],
          { icon: this.createIcon() }
        );
        const p = L.popup().setContent('ID: ' + id + ' - ' + 'Utente: ' + name);
        markerMaps.bindPopup(p).openPopup();
        markerMaps.addTo(this.overlayMaps);
      });
  });*/
  }

}
