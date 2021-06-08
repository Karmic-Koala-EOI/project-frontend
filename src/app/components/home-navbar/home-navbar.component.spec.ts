import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNavbarComponent } from './home-navbar.component';

describe('HomeNavbarComponent', () => {
  let component: HomeNavbarComponent;
  let fixture: ComponentFixture<HomeNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
