import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './main/main.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { FooterComponent } from './footer/footer.component';
import { ZingchartComponent } from './zingchart/zingchart.component';
import { CategoryComponent } from './category/category.component';
import { CategoryAlbumComponent } from './category-album/category-album.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { SingerComponent } from './singer/singer.component';
import { FormsModule } from '@angular/forms';
import { BuildingComponent } from './building/building.component';
import { ResultSearchComponent } from './result-search/result-search.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    SidebarComponent,
    MainComponent,
    MainHeaderComponent,
    MainHomeComponent,
    FooterComponent,
    ZingchartComponent,
    CategoryComponent,
    CategoryAlbumComponent,
    FavoriteComponent,
    SingerComponent,
    BuildingComponent,
    ResultSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
