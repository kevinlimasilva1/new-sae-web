import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagDominionCreateEditComponent } from './diag-dominion-create-edit.component';

describe('DiagDominionCreateComponent', () => {
  let component: DiagDominionCreateEditComponent;
  let fixture: ComponentFixture<DiagDominionCreateEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagDominionCreateEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagDominionCreateEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
