import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrdDetailsComponent } from "./PrdDetailsComponent";

describe('PrdDetailsComponent', () => {
  let component: PrdDetailsComponent;
  let fixture: ComponentFixture<PrdDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrdDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrdDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
