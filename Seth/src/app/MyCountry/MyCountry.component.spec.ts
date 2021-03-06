import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCountryComponent } from './MyCountry.component';

describe('MyCountry.Component', () => {
  let component: MyCountryComponent;
  let fixture: ComponentFixture<MyCountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCountryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
