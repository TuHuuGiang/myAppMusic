import { Component, OnInit } from '@angular/core';
import { SongServiceService } from '../service/song-service.service';
import { ZingchartService } from '../service/zingchart.service';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.scss'],
})
export class MainHomeComponent implements OnInit {
  listAlbumHome1: any = [];
  listAlbumHome2: any = [];
  listZingChart: any = [];
  songsZingChart: any;
  listSinger: any;
  index = 0;

  constructor(private songService: SongServiceService, private zingchart: ZingchartService) {}

  ngOnInit(): void {
    this.loadAlbum();
    this.loadSinger();
  }

  loadAlbum() {
    this.songService.getAllAlbum().subscribe(data => {
      this.listAlbumHome1 = data.filter((s: any) => s.id > 10 && s.id <= 15);
      this.listAlbumHome2 = data.filter((s: any) => s.id > 15 && s.id <= 20);
      this.listZingChart = data.filter((s: any) => s.id > 20);
      this.songsZingChart = this.listZingChart[0].songsAlbum.filter((s: any) => s.id < 204);
    });
  }

  loadSinger() {
    this.songService.getAllSinger().subscribe((data) => {
      this.listSinger = data;
    });
  }

  getSinger(nameSinger: any) {
    let singer = this.listSinger.filter((s: any) => s.name == nameSinger);
    this.songService.singerService = singer;
  }
}
