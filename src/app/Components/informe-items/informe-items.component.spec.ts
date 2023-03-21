import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeItemsComponent } from './informe-items.component';

describe('InformeItemsComponent', () => {
  let component: InformeItemsComponent;
  let fixture: ComponentFixture<InformeItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformeItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformeItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
