import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@enviroments/environment';

@Injectable({providedIn: 'root'})
export class GifsService {

  private http = inject(HttpClient);


  constructor(){
    this.loadTrendingGifs();
  }

  loadTrendingGifs(){

    this.http.get(`${environment.giphyUrl }/gifs/trending`),
    {
      params: {
        api_key: environment.gifphyapiKey,
        limit : 20,
      }
    }

  }

}
