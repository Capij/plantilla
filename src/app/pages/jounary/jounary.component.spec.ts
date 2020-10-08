import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JounaryComponent } from './jounary.component';

describe('JounaryComponent', () => {
  let component: JounaryComponent;
  let fixture: ComponentFixture<JounaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JounaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JounaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
