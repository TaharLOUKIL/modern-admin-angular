import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VerticalnavComponent } from './verticalnav.component';

describe('VerticalnavComponent', () => {
  let component: VerticalnavComponent;
  let fixture: ComponentFixture<VerticalnavComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VerticalnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
