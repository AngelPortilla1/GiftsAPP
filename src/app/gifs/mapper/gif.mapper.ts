import { GiphyItem } from 'src/interfaces/giphy.interface';
import { Gif } from '../interfaces/gif.interface';


export class GifMapper {

  static mapGiphyitemToGif(item : GiphyItem): Gif {
    return {
      id: item.id,
      title: item.title,
      url: item.images.original.url
    }
  }
    }


