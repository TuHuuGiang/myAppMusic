import { Component, OnInit } from '@angular/core';
import { SongServiceService } from '../service/song-service.service';

@Component({
  selector: 'app-singer',
  templateUrl: './singer.component.html',
  styleUrls: ['./singer.component.scss']
})
export class SingerComponent implements OnInit {
  singer: any;
  index = 0;

  // Album gợi í
  albumSuggest: any;
  albumById: any;
  albumSong: any;

  constructor(private songService: SongServiceService) { }

  ngOnInit(): void {
    this.singer = this.songService.singerService;
    this.loadAlbum();
    console.log('10', this.singer);
  }

  loadAlbum() {
    this.songService.getAllAlbum().subscribe(data => {
      this.albumSuggest = data.filter((s: any) => s.id > 3 && s.id <=8);
    });
  }

  getId(id: any) {
    // alert(id);
    this.songService.getAlbumById(id).subscribe(data => {
      this.albumById = data;
      this.albumSong = this.albumById.songsAlbum;
      this.songService.listAlbumCurrent = this.albumSong;
      console.log('tesst', this.albumSong)
    });
  }
}
