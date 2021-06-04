import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RpgLegalNoticeComponent } from './rpg-legal-notice.component';

describe('RpgLegalNoticeComponent', () => {
  let component: RpgLegalNoticeComponent;
  let fixture: ComponentFixture<RpgLegalNoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RpgLegalNoticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RpgLegalNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
