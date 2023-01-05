// componente que se encarga de recibir el valor del input y de llamar a la función buscar()

import { Component, OnInit } from '@angular/core';
import { ImagenService } from 'src/app/services/imagen.service';

@Component({
  selector: 'app-buscar-imagen',
  templateUrl: './buscar-imagen.component.html',
  styleUrls: ['./buscar-imagen.component.css'],
})
export class BuscarImagenComponent implements OnInit {
  //almaceno el valor del input por doble binding
  // creo la variable background seteada a true para que con la directiva *ngIf renderice el background antes de obtener imágenes
  nameImg: string;
  background: boolean = true;

  constructor(private _imagenService: ImagenService) {
    this.nameImg = '';
  }

  ngOnInit(): void {}

  searchImg() {
    //console.log(this.nameImg); //compruebo que se dispara por el evento click del botón buscar
    //si el valor del input es vacío, llamo a la función setError() del servicio pasándole el message de error
    if (this.nameImg === '') {
      this._imagenService.setError('Añade una imagen a buscar');
      return;
    }
    this._imagenService.setTermSearch(this.nameImg);
    this.background = false;
    this.nameImg = '';
  }
}
