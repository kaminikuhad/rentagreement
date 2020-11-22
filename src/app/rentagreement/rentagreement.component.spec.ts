import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentagreementComponent } from './rentagreement.component';

describe('RentagreementComponent', () => {
  let component: RentagreementComponent;
  let fixture: ComponentFixture<RentagreementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentagreementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentagreementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
