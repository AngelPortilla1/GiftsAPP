import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import GifsSideMenuHeader from '../../components/gifs-side-menu/gifs-side-menu-header/gifs-side-menu-header';
import GifsSideMenuOptions from '../../components/gifs-side-menu/gifs-side-menu-options/gifs-side-menu-options';
import GifsSideMenu from "../../components/gifs-side-menu/gifs-side-menu";

@Component({
  selector: 'app-dashboard-component',
  imports: [RouterOutlet,  GifsSideMenu],
  templateUrl: './dashboard-component.html',
  styleUrl: './dashboard-component.scss',
})
export default class DashboardComponent {

}
