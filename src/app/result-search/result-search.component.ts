import { Component, OnInit } from '@angular/core';
import { SongServiceService } from '../service/song-service.service';

@Component({
  selector: 'app-result-search',
  templateUrl: './result-search.component.html',
  styleUrls: ['./result-search.component.scss'],
})
export class ResultSearchComponent implements OnInit {
  albumSuggest: any;
  albumById: any;
  albumSong: any;

  // Search
  songSearch: any;
  albumSearch: any;

  constructor(private songService: SongServiceService) {}

  ngOnInit(): void {
    this.loadAlbum();
  }

  ngDoCheck() {
    this.songSearch = this.songService.resultSearchSService;
    this.albumSearch = this.songService.resultSearchAService;
  }

  loadAlbum() {
    this.songService.getAllAlbum().subscribe((data) => {
      this.albumSuggest = data.filter((s: any) => s.id > 3 && s.id <= 8);
    });
  }

  getId(id: any) {
    this.songService.getAlbumById(id).subscribe((data) => {
      this.albumById = data;
      this.albumSong = this.albumById.songsAlbum;
      this.songService.listAlbumCurrent = this.albumSong;
    });
  }
}
