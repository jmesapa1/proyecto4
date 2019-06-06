import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisRutasComponent } from './mis-rutas.component';

describe('MisRutasComponent', () => {
  let component: MisRutasComponent;
  let fixture: ComponentFixture<MisRutasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisRutasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisRutasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
