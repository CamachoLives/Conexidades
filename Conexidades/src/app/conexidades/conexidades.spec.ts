import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Conexidades } from './conexidades';

describe('Conexidades', () => {
  let component: Conexidades;
  let fixture: ComponentFixture<Conexidades>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Conexidades]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Conexidades);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
