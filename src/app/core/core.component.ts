import { Component } from '@angular/core';
import {MatCommonModule} from '@angular/material/core';

@Component({
  selector: 'app-core',
  standalone: true,
  imports: [MatCommonModule],
  templateUrl: './core.component.html',
  styleUrl: './core.component.css'
})
export class CoreComponent {

}
