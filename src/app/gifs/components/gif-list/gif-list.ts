import { Component } from '@angular/core';
import { GifItem } from "./gif-item/gif-item";

@Component({
  selector: 'gif-list',
  imports: [GifItem],
  templateUrl: './gif-list.html',
  styleUrl: './gif-list.scss',
})
export class GifList {

}
