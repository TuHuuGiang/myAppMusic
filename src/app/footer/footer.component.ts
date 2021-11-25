import { Component, OnInit } from '@angular/core';
import { SongServiceService } from '../service/song-service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  songs: any;
  listAlbumFooter: any;

  isPlay = false;
  isMute = true;
  audio = new Audio();
  indexSong = 0;

  timeValue: number = 0;

  currentVolume: any;
  volume: any;

  constructor(private songService: SongServiceService) {}

  ngOnInit(): void {
    this.songs = this.songService.getCurrentSong();
    this.audio.addEventListener('timeupdate', () => {
      if (this.audio.ended) {
        this.indexSong++;
        this.songService.indexSongService = this.indexSong;
        this.songService.currentSongService =
        this.listAlbumFooter[this.indexSong];

        if (this.indexSong >= this.listAlbumFooter.length) {
          this.indexSong = 0;
          this.songService.indexSongService = this.indexSong;
          this.songService.currentSongService =
            this.listAlbumFooter[this.indexSong];
        }
        this.play();
      }
    });
  }

  ngDoCheck() {
    if (this.songs) {
      if (this.songs.id != this.songService.getCurrentSong()?.id) {
        this.songs = this.songService.getCurrentSong();
        this.indexSong = this.songService.indexSongService;
        this.play();
      }
    } else {
      this.songs = this.songService.getCurrentSong();
      this.play();
      this.indexSong = this.songService.indexSongService;
    }

    // Load Album
    this.listAlbumFooter = this.songService.listAlbumCurrent;
    this.timeSong();
    this.timeValue;
  }

  playOrPause() {
    this.isPlay = !this.isPlay;
    if (this.isPlay == true) {
      this.audio.play();
    } else {
      this.audio.pause();
    }
  }

  play() {
    if (this.songs) {
      this.indexSong = this.songService.indexSongService;
      this.audio.src = 'assets/music/' + this.listAlbumFooter[this.indexSong].path;
      console.log(this.listAlbumFooter[this.indexSong].path);
      this.audio.load();
      this.audio.play();
      this.isPlay = true;
    }
  }

  nextSong() {
    this.indexSong++;
    this.songService.indexSongService = this.indexSong;
    this.songService.currentSongService = this.listAlbumFooter[this.indexSong];

    if (this.indexSong >= this.listAlbumFooter.length) {
      this.indexSong = 0;
      this.songService.indexSongService = this.indexSong;
      this.songService.currentSongService =
      this.listAlbumFooter[this.indexSong];
    }
    this.play();
  }

  prevSong() {
    this.indexSong--;
    this.songService.indexSongService = this.indexSong;
    this.songService.currentSongService = this.listAlbumFooter[this.indexSong];

    if (this.indexSong < 0) {
      this.indexSong = this.listAlbumFooter.length - 1;
      this.songService.indexSongService = this.indexSong;
      this.songService.currentSongService =
        this.listAlbumFooter[this.indexSong];
    }
    this.play();
  }

  targetTime(e: any) {
    let sekkTime = (this.audio.duration / 100) * e.target.value;
    this.audio.currentTime = sekkTime;
    console.log('e', sekkTime);
  }

  timeSong() {
    if (this.audio.duration) {
      let time = Math.floor(
        (this.audio.currentTime / this.audio.duration) * 100
      );
      this.timeValue = time;
    }
  }

  changeVolume(e: Event) {
    let value = Number((e.target as HTMLInputElement).value);
    let volume = value / 100;
    this.volume = volume * 100;
    this.currentVolume = volume * 100;
    console.log('11', volume);
    this.audio.volume = volume;
  }

  isMuted() {
    this.isMute = !this.isMute;
    if (this.isMute) {
      this.audio.muted = false;
      this.volume = this.currentVolume;
      console.log(this.isMute);
    } else {
      this.audio.muted = true;
      this.volume = 0;
    }
  }
}
