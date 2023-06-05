import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponderCorreoComponent } from './responder-correo.component';

describe('ResponderCorreoComponent', () => {
  let component: ResponderCorreoComponent;
  let fixture: ComponentFixture<ResponderCorreoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponderCorreoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponderCorreoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
