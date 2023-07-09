import { Component, Input, OnInit } from '@angular/core';
import { Gifs } from '../interfaces/gifs.interface';

@Component({
  selector: 'gif-card',
  templateUrl: './card.component.html',
})
export class CardComponent implements OnInit {
  @Input()
  public gifs!: Gifs;

  ngOnInit(): void {
    if (!this.gifs) throw new Error('Los datos del gifs son obligatorios.');
  }
}
