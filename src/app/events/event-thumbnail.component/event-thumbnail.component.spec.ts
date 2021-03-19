import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsHomeComponent } from './event-thumbnail.component';

describe('TransactionsHomeComponent', () => {
  let component: TransactionsHomeComponent;
  let fixture: ComponentFixture<TransactionsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionsHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
