import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRemissionComponent } from './add-remission.component';

describe('AddRemissionComponent', () => {
  let component: AddRemissionComponent;
  let fixture: ComponentFixture<AddRemissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRemissionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRemissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
