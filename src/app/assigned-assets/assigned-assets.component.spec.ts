import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedAssetsComponent } from './assigned-assets.component';

describe('AssignedAssetsComponent', () => {
  let component: AssignedAssetsComponent;
  let fixture: ComponentFixture<AssignedAssetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignedAssetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignedAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
