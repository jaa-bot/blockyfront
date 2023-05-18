import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesNotasComponent } from './detalles-notas.component';

describe('DetallesNotasComponent', () => {
  let component: DetallesNotasComponent;
  let fixture: ComponentFixture<DetallesNotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesNotasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallesNotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
