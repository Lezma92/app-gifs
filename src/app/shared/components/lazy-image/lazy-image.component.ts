import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
})
export class LazyImageComponent implements OnInit {
  @Input()
  public url!: string;
  @Input()
  public textAlt: string = '';

  public imgLoad: boolean = false;

  ngOnInit(): void {
    if (!this.url) throw new Error('La url de la imagen es obligatoria.');
  }

  onLoad() {
    setTimeout(() => {
      this.imgLoad = true;
    }, 1000);
    console.log('Imagen cargada correctamente');

  }
}
