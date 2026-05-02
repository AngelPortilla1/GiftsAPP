import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-gifhistory',
  imports: [],
  templateUrl: './gifhistory.html',
  styleUrls: ['./gifhistory.scss'],
})
export default class Gifhistory {
  query = toSignal(
    inject(ActivatedRoute).params.pipe(map((params) => params['query'] ?? ''))
  );
}
