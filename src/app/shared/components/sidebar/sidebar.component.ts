import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  constructor(private gifService: GifsService) {}

  get historialBusqueda() {
    return this.gifService.tashHistory;
  }
  public buscarPersonaje(nomPersanaje: string): void {
    if (nomPersanaje.length > 0) {
      this.gifService.searchTag(nomPersanaje);
    }
  }
}
