import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DubaiPageComponent } from './dubai-page.component';

describe('DubaiPageComponent', () => {
  let component: DubaiPageComponent;
  let fixture: ComponentFixture<DubaiPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DubaiPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DubaiPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
