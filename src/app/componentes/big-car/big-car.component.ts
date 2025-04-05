import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-car',
  imports: [],
  templateUrl: './big-car.component.html',
  styleUrl: './big-car.component.css'
})
export class BigCarComponent {
  @Input()
  fotoCover:string = "";

  @Input()
  cardTitle:string = "";

  @Input()
  cardDescricao:string = "";
}
