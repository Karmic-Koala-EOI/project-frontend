import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RpgLegalTermsComponent } from './rpg-legal-terms.component';

describe('RpgLegalTermsComponent', () => {
  let component: RpgLegalTermsComponent;
  let fixture: ComponentFixture<RpgLegalTermsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RpgLegalTermsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RpgLegalTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
