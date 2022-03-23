import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NominationComponent } from './nomination.component';

describe('HelloComponent', () => {
  let component: NominationComponent;
  let fixture: ComponentFixture<NominationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NominationComponent],
      imports: [ReactiveFormsModule, FormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NominationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Test a Form Group ELEMENT COUNT', () => {
    const formElement = fixture.debugElement.nativeElement.querySelector('#fg');
    const inputElements = formElement.querySelectorAll('input');
    expect(inputElements.length).toEqual(2);
  });

  it('TEST THE INITIAL FORM GROUP VALUES', () => {
    const formGroup = component.fg;
    const loginFormValues = {
      step1: '',
      step2: '',
    };
    expect(formGroup.value).toEqual(loginFormValues);
  });
});
