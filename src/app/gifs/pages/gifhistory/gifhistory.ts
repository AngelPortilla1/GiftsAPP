import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { computed } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { GifList } from "../../components/gif-list/gif-list";
@Component({
  selector: 'app-gifhistory',
  imports: [GifList],
  templateUrl: './gifhistory.html',
  styleUrls: ['./gifhistory.scss'],
})
export default class Gifhistory {

  GifsService = inject(GifsService);
  query = toSignal(
    inject(ActivatedRoute).params.pipe(map((params) => params['query'] ?? ''))
  );

  gifsByKey = computed(()=>{
    return this.GifsService.getHistoryGifs(this.query());

  })
}
