import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagDominionComponent } from './diag-dominion.component';

describe('DiagDominionComponent', () => {
  let component: DiagDominionComponent;
  let fixture: ComponentFixture<DiagDominionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagDominionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagDominionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
