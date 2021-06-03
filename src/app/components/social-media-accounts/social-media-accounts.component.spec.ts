import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaAccountsComponent } from './social-media-accounts.component';

describe('SocialMediaAccountsComponent', () => {
  let component: SocialMediaAccountsComponent;
  let fixture: ComponentFixture<SocialMediaAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialMediaAccountsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialMediaAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
