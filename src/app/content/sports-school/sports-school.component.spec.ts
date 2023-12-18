import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsSchoolComponent } from './sports-school.component';

describe('SportsSchoolComponent', () => {
  let component: SportsSchoolComponent;
  let fixture: ComponentFixture<SportsSchoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportsSchoolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SportsSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
