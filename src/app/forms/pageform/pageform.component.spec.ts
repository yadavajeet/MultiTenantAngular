import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageformComponent } from './pageform.component';

describe('PageformComponent', () => {
  let component: PageformComponent;
  let fixture: ComponentFixture<PageformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
