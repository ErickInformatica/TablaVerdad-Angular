import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabletruthComponent } from './tabletruth.component';

describe('TabletruthComponent', () => {
  let component: TabletruthComponent;
  let fixture: ComponentFixture<TabletruthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabletruthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabletruthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
