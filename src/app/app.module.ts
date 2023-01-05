import { ImagenService } from 'src/app/services/imagen.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BuscarImagenComponent } from './componentes/buscar-imagen/buscar-imagen.component';
import { ListarImagenComponent } from './componentes/listar-imagen/listar-imagen.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { ErrorComponent } from './shared/error/error.component';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatToolbarModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    BuscarImagenComponent,
    ListarImagenComponent,
    NavbarComponent,
    SpinnerComponent,
    ErrorComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AngularMaterialModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule
  ],
  providers: [
    ImagenService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
