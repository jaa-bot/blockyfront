import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviadosContactoComponent } from './enviados-contacto.component';

describe('EnviadosContactoComponent', () => {
  let component: EnviadosContactoComponent;
  let fixture: ComponentFixture<EnviadosContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnviadosContactoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnviadosContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
