import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gifs, SearchResponse } from '../components/interfaces/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  public gifsLis: Gifs[] = [];

  private _tagHistorial: string[] = [];
  private apiKey: string = '9Kdd3l0S6cojMb9i8tzGFwF9raUcVK8Y';
  private urlService: string = 'https://api.giphy.com/v1/gifs';
  constructor(private httpPeticion: HttpClient) {
    this.cargarLocalStore();
  }

  get tashHistory() {
    return [...this._tagHistorial];
  }

  private organizarHistorial(tag: string) {
    tag = tag.toLowerCase();
    if (tag.includes(tag)) {
      this._tagHistorial = this._tagHistorial.filter(
        (etiqAnterior) => etiqAnterior !== tag
      );
    }
    this._tagHistorial.unshift(tag);
    this._tagHistorial = this._tagHistorial.splice(0, 10);
    this.guardarBusqueda();
  }

  private guardarBusqueda(): void {
    localStorage.setItem('historial', JSON.stringify(this._tagHistorial));
  }

  private cargarLocalStore(): void {
    if (!localStorage.getItem('historial')) return;
    this._tagHistorial = JSON.parse(localStorage.getItem('historial')!);
    if (this._tagHistorial.length === 0) return;
    this.searchTag(this._tagHistorial[0]);
  }

  searchTag(tag: string): void {
    if (tag.length === 0) return;
    this.organizarHistorial(tag);

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('q', tag)
      .set('limit', '12');

    this.httpPeticion
      .get<SearchResponse>(`${this.urlService}/search`, { params })
      .subscribe((response) => {
        this.gifsLis = response.data;
        console.log(this.gifsLis);
      });
  }
}
