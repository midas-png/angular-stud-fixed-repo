import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoscowPageComponent } from './moscow-page.component';

describe('MoscowPageComponent', () => {
  let component: MoscowPageComponent;
  let fixture: ComponentFixture<MoscowPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoscowPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoscowPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
