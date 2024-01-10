import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TripViewComponent} from './trip-view.component';

describe('TripViewComponent', () => {
  let component: TripViewComponent;
  let fixture: ComponentFixture<TripViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TripViewComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TripViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
