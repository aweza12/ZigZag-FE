import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourLotsComponent } from './your-lots.component';

describe('YourLotsComponent', () => {
  let component: YourLotsComponent;
  let fixture: ComponentFixture<YourLotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourLotsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YourLotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
