import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogJourneyComponent } from './dialog-journey.component';

describe('DialogJourneyComponent', () => {
  let component: DialogJourneyComponent;
  let fixture: ComponentFixture<DialogJourneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogJourneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogJourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
