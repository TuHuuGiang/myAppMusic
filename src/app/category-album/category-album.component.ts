import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { setTimeout } from 'timers';
import { SongServiceService } from '../service/song-service.service';

@Component({
  selector: 'app-category-album',
  templateUrl: './category-album.component.html',
  styleUrls: ['./category-album.component.scss'],
})
export class CategoryAlbumComponent implements OnInit {
  // Xử Lý Phát Nhạc
  currentSong: any;
  audio = new Audio();
  isPlay = false;
  iSong = 0;

  // Album
  albumAll: any;
  albumById: any;
  albumSong: any;
  albumSuggest: any;

  // Singer
  listSinger: any;
  listSongFavorite: any = [];

  constructor(
    private songService: SongServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadAlbum();
    this.loadSinger();
    let id = Number(this.route.snapshot.paramMap.get('id'));
    this.loadIdAlbum(id);
  }

  loadAlbum() {
    this.songService.getAllAlbum().subscribe((data) => {
      this.albumAll = data;
    });

    this.songService.getAllAlbum().subscribe((data) => {
      this.albumSuggest = data.filter((s: any) => s.id > 3 && s.id <= 8);
    });
  }

  loadIdAlbum(id: number) {
    this.songService.getAlbumById(id).subscribe((data) => {
      this.albumById = data;
      this.albumSong = this.albumById.songsAlbum;
      this.songService.listAlbumCurrent = this.albumSong;
    });
  }

  getId(id: any) {
    // alert(id);
    this.songService.getAlbumById(id).subscribe((data) => {
      this.albumById = data;
      this.albumSong = this.albumById.songsAlbum;
      this.songService.listAlbumCurrent = this.albumSong;
    });
  }

  getSong(index: any) {
    let song = this.albumSong[index];
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

  addSongFavorite(id: any) {
    let songFavorite = this.albumSong.filter((s: any) => s.id == id);
    let s = this.listSongFavorite.push(songFavorite[0]);
    this.songService.listSongFavoriteService = this.listSongFavorite;
    console.log('id Song', this.listSongFavorite);
  }

  // Phát nhạc
  playOrPause() {
    this.isPlay = !this.isPlay;
    if (this.isPlay == true) {
      this.playAudio(this.albumSong.path);
    } else {
      this.audio.pause;
    }
  }

  play(i: any) {
    this.iSong = i;
    this.currentSong = this.albumSong[this.iSong];
    this.songService.indexSongService = this.iSong;
    this.songService.setCurrentSong(this.currentSong);
    // this.playAudio(this.currentSong.path);
    console.log('77', this.currentSong);
  }

  playAudio(src: string) {
    this.audio.src = 'assets/music/' + src;
    this.audio.load();
    this.audio.play();
  }

  songRandom() {
    let i = Math.floor(Math.random() * this.albumSong.length);
    this.currentSong = this.albumSong[i];
    this.songService.indexSongService = i;
    this.songService.setCurrentSong(this.currentSong);
    // this.playAudio(this.currentSong.path);
    console.log('77', this.songService.indexSongService);
  }
}
