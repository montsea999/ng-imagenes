import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

//creo un Subject porque necesito tanto emitir como recibir datos.
export class ImagenService {
  private error$ = new Subject<string>(); // name$ para el subject creado (por estándar)
  private termSearch$ = new Subject<string>();

  constructor(private http: HttpClient) {}

  // los componentes buscar-imagen y error se comunicarán con un Subject
  //setError() recibirá un message y lo emitirá mediante el método next() del Subject(error$)
  setError(message: string) {
    this.error$.next(message);
  }

  //getError() devuelve un observable donde la fuente será el Subject (error$)
  getError(): Observable<string> {
    return this.error$.asObservable();
  }

  setTermSearch(term: string) {
    this.termSearch$.next(term);
  }
  getTermSearch(): Observable<string> {
    return this.termSearch$.asObservable();
  }

  getImages(term: string, imgPerP: number, currentP: number): Observable<any> {
    const KEY = '*';

    const URL =
      'https://pixabay.com/api/?key=' +
      KEY +
      '&q=' +
      term +
      '&per_page=' +
      imgPerP +
      '&page=' +
      currentP;
    return this.http.get(URL);
  }
}
