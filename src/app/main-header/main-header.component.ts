import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SongServiceService } from '../service/song-service.service';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss'],
})
export class MainHeaderComponent implements OnInit {
  resultSearchS: any;
  resultSearchA: any;
  listAlbum = [{
    id: '',
    albumId: '',
    albumName: '',
    sologan: '',
    image: '',
    singer1: '',
    singer2: '',
    singer3: '',
    songsAlbum: []
  }];
  albumName = this.listAlbum[0].albumName;
  test: any;
  test1: any = [];
  listSong = {
    id: '',
    songId: '',
    songName: '',
    singer1: '',
    singer2: '',
    image: '',
    path: '',
  };

  constructor(
    private songService: SongServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadAlbum();
  }

  loadAlbum() {
    this.songService.getAllAlbum().subscribe(data => {
      this.listAlbum = data;
      this.listAlbum.forEach((s: any) => {
        this.test = s.songsAlbum;
        // this.test1.push(this.test[0]);
        console.log('43', this.test1)
      });
    });
  }

  fSearch(songName: any) {
    this.router.navigateByUrl('/search');
    this.listSong.songName = '';
    let searchSong = this.test.filter(
      (result: any) => result.songName.toLowerCase() == songName
    );
    this.songService.resultSearchSService = searchSong;
    console.log('21', searchSong);
  }

  fSearchAlbum(albumName: any) {
    this.router.navigateByUrl('/search');
    this.albumName = '';
    let searchAlbum = this.listAlbum.filter(
      (result: any) => result.albumName.toLowerCase() == albumName
    );
    this.songService.resultSearchAService = searchAlbum;
    console.log('22', searchAlbum);
  }
}
