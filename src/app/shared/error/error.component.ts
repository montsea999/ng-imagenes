import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, timeout } from 'rxjs';
import { ImagenService } from 'src/app/services/imagen.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
})
export class ErrorComponent implements OnInit, OnDestroy {
  text = '';
  show = false;
  suscription: Subscription;

  constructor(private _imagenService: ImagenService) {
    this.suscription = this._imagenService.getError().subscribe((data) => {
      this.showMessage();
      this.text = data;
      // console.log(data);
    });
  }

  ngOnInit(): void {}

  showMessage() {
    this.show = true;
    setTimeout(() => {
      this.show = false;
    }, 3000);
  }
  ngOnDestroy(): void {
    this.suscription.unsubscribe();
  }
}
