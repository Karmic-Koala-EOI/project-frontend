import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RpgPrivacyPolicyComponent } from './rpg-privacy-policy.component';

describe('RpgPrivacyPolicyComponent', () => {
  let component: RpgPrivacyPolicyComponent;
  let fixture: ComponentFixture<RpgPrivacyPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RpgPrivacyPolicyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RpgPrivacyPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
