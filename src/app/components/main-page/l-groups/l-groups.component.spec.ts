import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LGroupsComponent } from './l-groups.component';

describe('LGroupsComponent', () => {
  let component: LGroupsComponent;
  let fixture: ComponentFixture<LGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LGroupsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
