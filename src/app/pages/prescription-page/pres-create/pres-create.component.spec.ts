import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresCreateComponent } from './pres-create.component';

describe('PresCreateComponent', () => {
  let component: PresCreateComponent;
  let fixture: ComponentFixture<PresCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
