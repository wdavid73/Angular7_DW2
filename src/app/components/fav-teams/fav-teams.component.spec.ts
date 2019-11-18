import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavTeamsComponent } from './fav-teams.component';

describe('FavTeamsComponent', () => {
  let component: FavTeamsComponent;
  let fixture: ComponentFixture<FavTeamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavTeamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
