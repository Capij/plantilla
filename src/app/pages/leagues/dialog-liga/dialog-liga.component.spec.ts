import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogLigaComponent } from './dialog-liga.component';

describe('DialogLigaComponent', () => {
  let component: DialogLigaComponent;
  let fixture: ComponentFixture<DialogLigaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogLigaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogLigaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
