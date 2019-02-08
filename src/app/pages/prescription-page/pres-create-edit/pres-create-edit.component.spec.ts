import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresCreateEditComponent } from './pres-create-edit.component';

describe('PresCreateComponent', () => {
  let component: PresCreateEditComponent;
  let fixture: ComponentFixture<PresCreateEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresCreateEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresCreateEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
