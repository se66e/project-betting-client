import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEventsPageComponent } from './list-events-page.component';

describe('ListEventsComponent', () => {
  let component: ListEventsPageComponent;
  let fixture: ComponentFixture<ListEventsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListEventsPageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEventsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
