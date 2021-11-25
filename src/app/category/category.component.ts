import { Component, OnInit } from '@angular/core';
import { SongServiceService } from '../service/song-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  listAlbum: any = [];
  listAlbumAcoustic: any = [];

  constructor(private songService: SongServiceService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.loadAlbum();
    this.loadAlbumAcoustic();
  }

  loadAlbum() {
    this.songService.getAllAlbum().subscribe(data => {
      this.listAlbum = data.filter((s: any) => s.id <=5);
      console.log(this.listAlbum);
    });
  }

  loadAlbumAcoustic() {
    this.songService.getAllAlbum().subscribe(data => {
      this.listAlbumAcoustic = data.filter((s: any) => s.id > 5 && s.id <= 10);
      console.log(this.listAlbum);
    });
  }
}
