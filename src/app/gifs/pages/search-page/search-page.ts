import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { GifList } from '../../components/gif-list/gif-list';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-search-page',
  imports: [GifList],
  templateUrl: './search-page.html',
  styleUrl: './search-page.css',
})
export default class SearchPage {

  GifsService = inject(GifsService);

  onSearch(query: string) {

    this.GifsService.searchGifs(query);
  }
}
