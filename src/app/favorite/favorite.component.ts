import { Component, OnInit } from '@angular/core';
import { SongServiceService } from '../service/song-service.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss'],
})
export class FavoriteComponent implements OnInit {
  songFavorite: any = [];
  songAFavorite: any = [];
  listFavorite: any = [];
  albumSuggest: any;

  constructor(private songService: SongServiceService) {}

  ngOnInit(): void {
    this.loadDataHome();
  }

  ngDoCheck() {
    
  }

  loadDataHome() {
    this.songService.getAllAlbum().subscribe((data) => {
      this.albumSuggest = data.filter((s: any) => s.id > 8 && s.id < 14);
      this.songFavorite = this.songService.listSongFavoriteService;
    });
  }
}
