import { Component } from '@angular/core';
import { environment } from '@enviroments/environment';
//import { environment } from '../../../../../environments/environment.development';

@Component({
  selector: 'gifs-side-menu-header',
  imports: [],
  templateUrl: './gifs-side-menu-header.html',
})
export default class  GifsSideMenuHeader {

  envs = environment;

}
