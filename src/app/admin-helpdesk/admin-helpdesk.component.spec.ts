import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHelpdeskComponent } from './admin-helpdesk.component';

describe('AdminHelpdeskComponent', () => {
  let component: AdminHelpdeskComponent;
  let fixture: ComponentFixture<AdminHelpdeskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminHelpdeskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHelpdeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
