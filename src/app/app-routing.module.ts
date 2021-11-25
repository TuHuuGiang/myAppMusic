import { CategoryComponent } from './category/category.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZingchartComponent } from './zingchart/zingchart.component';
import { CategoryAlbumComponent } from './category-album/category-album.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { SingerComponent } from './singer/singer.component';
import { BuildingComponent } from './building/building.component';
import { ResultSearchComponent } from './result-search/result-search.component';

const routes: Routes = [
  {path: '', component: MainHomeComponent},
  {path: 'category', component: CategoryComponent},
  {path: 'album/:id', component: CategoryAlbumComponent},
  {path: 'albumHome/:id', component: CategoryAlbumComponent},
  {path: 'zingchart', component: ZingchartComponent},
  {path: 'favorite', component: FavoriteComponent},
  {path: 'singer/:name', component: SingerComponent},
  {path: 'discover', component: BuildingComponent},
  {path: 'radio', component: BuildingComponent},
  {path: 'songnew', component: BuildingComponent},
  {path: 'mv', component: BuildingComponent},
  {path: 'search', component: ResultSearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
