import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TripsPanelComponent} from './trips-panel.component';

describe('TripsPanelComponent', () => {
  let component: TripsPanelComponent;
  let fixture: ComponentFixture<TripsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TripsPanelComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TripsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
