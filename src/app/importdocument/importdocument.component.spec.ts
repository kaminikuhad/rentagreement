import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportdocumentComponent } from './importdocument.component';

describe('ImportdocumentComponent', () => {
  let component: ImportdocumentComponent;
  let fixture: ComponentFixture<ImportdocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportdocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportdocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
