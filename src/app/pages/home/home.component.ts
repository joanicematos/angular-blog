import { Component } from '@angular/core';
import { MenuTitleComponent } from "../../componentes/menu-title/menu-title.component";
import { BigCarComponent } from "../../componentes/big-car/big-car.component";
import { SmallCardComponent } from "../../componentes/small-card/small-card.component";
import { MenuBarComponent } from '../../componentes/menu-bar/menu-bar.component';

@Component({
  selector: 'app-home',
  imports: [MenuBarComponent, MenuTitleComponent, BigCarComponent, SmallCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
