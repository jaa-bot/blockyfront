import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedactarContactoComponent } from './redactar-contacto.component';

describe('RedactarContactoComponent', () => {
  let component: RedactarContactoComponent;
  let fixture: ComponentFixture<RedactarContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedactarContactoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedactarContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
