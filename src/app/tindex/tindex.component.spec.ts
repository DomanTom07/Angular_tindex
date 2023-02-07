import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TindexComponent } from './tindex.component';

describe('TindexComponent', () => {
  let component: TindexComponent;
  let fixture: ComponentFixture<TindexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TindexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
