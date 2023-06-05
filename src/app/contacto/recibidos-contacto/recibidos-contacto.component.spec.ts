import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecibidosContactoComponent } from './recibidos-contacto.component';

describe('RecibidosContactoComponent', () => {
  let component: RecibidosContactoComponent;
  let fixture: ComponentFixture<RecibidosContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecibidosContactoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecibidosContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
