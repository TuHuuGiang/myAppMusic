import { Component, OnInit } from '@angular/core';
import { SongServiceService } from '../service/song-service.service';

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.scss']
})
export class BuildingComponent implements OnInit {
  albumSuggest: any;
  albumById: any;
  albumSong: any;

  constructor(private songService: SongServiceService) { }

  ngOnInit(): void {
    this.loadAlbum();
  }

  loadAlbum() {
    this.songService.getAllAlbum().subscribe(data => {
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
