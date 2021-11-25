import { Component, OnInit} from '@angular/core';
import { ZingchartService } from '../service/zingchart.service';
import { SongServiceService } from '../service/song-service.service';

@Component({
  selector: 'app-zingchart',
  templateUrl: './zingchart.component.html',
  styleUrls: ['./zingchart.component.scss']
})
export class ZingchartComponent implements OnInit {
  listZingChart: any = [];
  listSong: any;
  albumSuggest: any;
  
  // Singer
  listSinger: any;
  
  // Xử lý nhạc
  currentSong: any;
  audio = new Audio;
  isPlay = false;
  iSong = 0;

  // addSongFavorite
  albumSong: any;
  listSongFavorite: Array<any> = [];

  constructor(private zingchart: ZingchartService, private songService: SongServiceService) { }

  ngOnInit(): void {
    this.loadDataZingChart();
    this.loadSinger();
  }

  loadDataZingChart() {
    this.songService.getAllAlbum().subscribe(data => {
      this.listZingChart = data.filter((s: any) => s.id > 20);
      this.listSong = this.listZingChart[0].songsAlbum;
      this.songService.listAlbumCurrent = this.listSong;
    });

    this.songService.getAllAlbum().subscribe(data => {
      this.albumSuggest = data.filter((s: any) => s.id > 5 && s.id < 11);
      console.log('zingchart', this.albumSuggest);
    });
  }

  getSong(index: any) {
    let song = this.listSong[index];
    this.songService.getSongService = song;
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

  addSongFavorite(index: any) {
    let songFavorite = this.listSong[index];
    this.listSongFavorite.push(songFavorite);
    this.songService.listSongFavoriteService = this.listSongFavorite;
  }

  // Phát nhạc
  playOrPause() {
    this.isPlay = !this.isPlay;
    if(this.isPlay == true) {
      this.playAudio(this.listSong.path);
    } else {
      this.audio.pause;
    }
  }

  play(i: any) {
    this.iSong = i;
    this.currentSong = this.listSong[this.iSong];
    this.songService.indexSongService = this.iSong;
    this.songService.setCurrentSong(this.currentSong);
    console.log('77', this.currentSong)
  }

  playAudio(src: string) {
    this.audio.src = "assets/music/" + src;
    this.audio.load();
    this.audio.play();
  }
}
