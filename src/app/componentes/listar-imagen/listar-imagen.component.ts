import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AngularMaterialModule } from 'src/app/modules/angular-material/angular-material.module';
import { ImagenService } from 'src/app/services/imagen.service';

@Component({
  selector: 'app-listar-imagen',
  templateUrl: './listar-imagen.component.html',
  styleUrls: ['./listar-imagen.component.css'],
})
export class ListarImagenComponent implements OnInit {
  term = '';
  suscription: Subscription;
  listImages: any[] = [];
  loading: boolean = false;
  totalP = 0;
  currentP = 1;
  numberP = 1;
  imgPerP = 45;

  constructor(private _imagenService: ImagenService) {
    this.suscription = this._imagenService.getTermSearch().subscribe((data) => {
      console.log(data);
      this.term = data;
      this.loading = true;
      this.currentP = 1; //reseteo la pagina actual
      this.getImg();
    });
  }

  ngOnInit(): void {}

  getImg() {
    this._imagenService
      .getImages(this.term, this.imgPerP, this.currentP)
      .subscribe(
        (data) => {
          console.log(data);
          if (data.hits.length === 0) {
            this._imagenService.setError('No hay resultados'); //llamo a setError del servicio para que me muestre el message de error que recibe por parámetro
            this.loading = false; //oculto el spinner
            return;
          }
          this.listImages = data.hits; //guardo en el array listImages los datos que recibo del observable
          this.loading = false;
          this.totalP = Math.ceil(data.totalHits / this.imgPerP); //redondeo hacia arriba
          // console.log(this.totalP); //muestro en consola el total de paginas
        },
        (error) => {
          this._imagenService.setError('hay otro error');
          this.loading = false;
        }
      );
  }
  previous() {
    if (this.currentP > 1) {
      this.currentP--; //resto 1 a la pagina actual
      this.loading = true;
      this.listImages = []; //limpio el array
      this.getImg(); //llamo a la funcion para que me traiga las imagenes de la pagina previous
    }
  }
  following() {
    if (this.currentP < this.totalP) {
      this.currentP++; //sumo 1 a la pagina actual
      this.loading = true;
      this.listImages = [];
      this.getImg(); //llamo a la funcion para que me traiga las imagenes de la pagina siguiente
    }
  }
}
