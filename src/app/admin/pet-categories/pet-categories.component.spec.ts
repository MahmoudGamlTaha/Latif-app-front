import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetCategoriesComponent } from './pet-categories.component';

describe('PetCategoriesComponent', () => {
  let component: PetCategoriesComponent;
  let fixture: ComponentFixture<PetCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
