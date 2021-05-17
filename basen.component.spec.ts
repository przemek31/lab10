import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasenComponent } from './basen.component';

describe('BasenComponent', () => {
  let component: BasenComponent;
  let fixture: ComponentFixture<BasenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
