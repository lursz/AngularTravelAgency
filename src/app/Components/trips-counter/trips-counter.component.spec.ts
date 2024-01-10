import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TripsCounterComponent} from './trips-counter.component';

describe('TripsCounterComponent', () => {
  let component: TripsCounterComponent;
  let fixture: ComponentFixture<TripsCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TripsCounterComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TripsCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
