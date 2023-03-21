import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenPorSucursalesComponent } from './resumen-por-sucursales.component';

describe('ResumenPorSucursalesComponent', () => {
  let component: ResumenPorSucursalesComponent;
  let fixture: ComponentFixture<ResumenPorSucursalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumenPorSucursalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumenPorSucursalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
