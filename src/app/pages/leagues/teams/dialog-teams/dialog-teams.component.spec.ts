import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogTeamsComponent } from './dialog-teams.component';

describe('DialogTeamsComponent', () => {
  let component: DialogTeamsComponent;
  let fixture: ComponentFixture<DialogTeamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogTeamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
