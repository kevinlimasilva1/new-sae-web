import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresHomeComponent } from './pres-home.component';

describe('PresHomeComponent', () => {
  let component: PresHomeComponent;
  let fixture: ComponentFixture<PresHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
