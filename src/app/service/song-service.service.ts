import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SongServiceService {
  url: string = "http://localhost:3000/album/";
  urlSinger: string = "http://localhost:3000/listSinger/";

  getSongService: any;
  currentSongService: any;
  listAlbumCurrent: any;
  indexSongService = 0;

  // Singer
  singerService: any;

  // Favorite
  listSongFavoriteService: any;

  // Search
  resultSearchSService: any;
  resultSearchAService: any;

  constructor(private http: HttpClient) {}

  getAllAlbum():Observable<any> {
    return this.http.get(this.url);
  }

  getAlbumById(id: number) {
    let endPointHipHop = this.url + id;
    return this.http.get(endPointHipHop);
  }

  getAllSinger():Observable<any> {
    return this.http.get(this.urlSinger);
  }

  getCurrentSong() {
    return this.currentSongService;
  }

  setCurrentSong(song: any) {
    this.currentSongService = song;
  }
}
