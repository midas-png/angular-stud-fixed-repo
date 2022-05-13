import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LondonPageComponent } from './london-page.component';

describe('LondonPageComponent', () => {
  let component: LondonPageComponent;
  let fixture: ComponentFixture<LondonPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LondonPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LondonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
