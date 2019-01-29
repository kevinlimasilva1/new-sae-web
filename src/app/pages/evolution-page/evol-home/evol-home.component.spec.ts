import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvolHomeComponent } from './evol-home.component';

describe('EvolHomeComponent', () => {
  let component: EvolHomeComponent;
  let fixture: ComponentFixture<EvolHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvolHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvolHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
