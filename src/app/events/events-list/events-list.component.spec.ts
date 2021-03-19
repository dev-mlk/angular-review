import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenListComponent } from './events-list.component';

describe('DashboardHomeComponent', () => {
  let component: EvenListComponent;
  let fixture: ComponentFixture<EvenListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvenListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvenListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
