import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryAlbumComponent } from './category-album.component';

describe('CategoryAlbumComponent', () => {
  let component: CategoryAlbumComponent;
  let fixture: ComponentFixture<CategoryAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryAlbumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
