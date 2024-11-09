import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackPrincComponent } from './back-princ.component';

describe('BackPrincComponent', () => {
  let component: BackPrincComponent;
  let fixture: ComponentFixture<BackPrincComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackPrincComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackPrincComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
