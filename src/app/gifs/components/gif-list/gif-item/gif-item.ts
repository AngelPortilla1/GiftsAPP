import { Component, input } from '@angular/core';

@Component({
  selector: 'gif-item',
  imports: [],
  templateUrl: './gif-item.html',
})
export class GifItem {
  imageUrl = input.required<string>();

}
