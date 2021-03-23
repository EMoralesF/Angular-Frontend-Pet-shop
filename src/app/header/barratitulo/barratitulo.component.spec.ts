import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarratituloComponent } from './barratitulo.component';

describe('BarratituloComponent', () => {
  let component: BarratituloComponent;
  let fixture: ComponentFixture<BarratituloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarratituloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarratituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
