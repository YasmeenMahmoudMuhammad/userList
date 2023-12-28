import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUserDialogComponent } from './about-user-dialog.component';

describe('AboutUserDialogComponent', () => {
  let component: AboutUserDialogComponent;
  let fixture: ComponentFixture<AboutUserDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutUserDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutUserDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
