import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RPGCookiesComponent } from './rpg-cookies.component';

describe('RPGCookiesComponent', () => {
  let component: RPGCookiesComponent;
  let fixture: ComponentFixture<RPGCookiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RPGCookiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RPGCookiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
