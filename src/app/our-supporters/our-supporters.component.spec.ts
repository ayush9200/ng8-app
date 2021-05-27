import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurSupportersComponent } from './our-supporters.component';

describe('OurSupportersComponent', () => {
  let component: OurSupportersComponent;
  let fixture: ComponentFixture<OurSupportersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurSupportersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurSupportersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
