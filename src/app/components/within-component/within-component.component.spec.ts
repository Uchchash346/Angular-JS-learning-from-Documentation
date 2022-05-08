import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithinComponentComponent } from './within-component.component';

describe('WithinComponentComponent', () => {
  let component: WithinComponentComponent;
  let fixture: ComponentFixture<WithinComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithinComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithinComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
