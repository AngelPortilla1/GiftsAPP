import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { GiphyResponse } from '../../../interfaces/giphy.interface';
import { Gif } from '../interfaces/gif.interface';

@Injectable({providedIn: 'root'})
export class GifsService {

  private http = inject(HttpClient);

  trendingGifs = signal<Gif[]>([]);


  constructor(){
    this.loadTrendingGifs();
  }

  loadTrendingGifs(){

    this.http.get<GiphyResponse>(`${environment.giphyUrl }/gifs/trending`,
    {
      params: {
        api_key: environment.gifphyapiKey,
        limit : 20,
      },
    }).subscribe( (resp)=>{
      resp.data[0].images.original.url

    })

  }

}
