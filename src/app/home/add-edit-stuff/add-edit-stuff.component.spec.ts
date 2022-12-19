import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditStuffComponent } from './add-edit-stuff.component';

describe('AddEditStuffComponent', () => {
  let component: AddEditStuffComponent;
  let fixture: ComponentFixture<AddEditStuffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditStuffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditStuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
