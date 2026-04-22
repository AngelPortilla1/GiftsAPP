import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { GiphyResponse } from '../../../interfaces/giphy.interface';
import { Gif } from '../interfaces/gif.interface';
import { GifMapper } from '../mapper/gif.mapper';

@Injectable({providedIn: 'root'})
export class GifsService {

  private http = inject(HttpClient);

  trendingGifs = signal<Gif[]>([]);
  trendingGifsLoading = signal(true);


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
      const gifs = GifMapper.mapGiphyItemsToGifsArray(resp.data);
      this.trendingGifs.set(gifs);
      this.trendingGifsLoading.set(false);
      console.log(gifs)

    })

  }


  searchGifs(query:string){
    this.http.get<GiphyResponse>(`${environment.giphyUrl }/gifs/search`,
    {
      params: {
        api_key: environment.gifphyapiKey,
        q : query,
        limit : 20,
      },
    }).subscribe( (resp)=>{
      const gifs = GifMapper.mapGiphyItemsToGifsArray(resp.data);
      console.log(gifs)
    })
  }
}
