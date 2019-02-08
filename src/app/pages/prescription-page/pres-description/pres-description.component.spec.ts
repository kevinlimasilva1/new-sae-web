import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresDescriptionComponent } from './pres-description.component';

describe('PresDescriptionComponent', () => {
  let component: PresDescriptionComponent;
  let fixture: ComponentFixture<PresDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
