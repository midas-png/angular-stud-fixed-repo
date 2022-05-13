import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseinfoPageComponent } from './houseinfo-page.component';

describe('HouseinfoPageComponent', () => {
  let component: HouseinfoPageComponent;
  let fixture: ComponentFixture<HouseinfoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseinfoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseinfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
