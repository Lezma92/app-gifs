import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent {
  @ViewChild('txtSearch')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) {}
  searchTag() {
    const valor = this.tagInput.nativeElement.value;
    this.gifsService.searchTag(valor);
    this.tagInput.nativeElement.value = '';
  }
}
