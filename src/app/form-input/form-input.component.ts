import { AfterViewInit, Component, forwardRef, Injector,  OnInit, } from '@angular/core';
import { ControlValueAccessor, NgControl,  NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormInputComponent),
      multi: true,
    },
  ]
})
export class FormInputComponent implements AfterViewInit, ControlValueAccessor {

  result = '';

   onChange = (value) => {};

  constructor(private injector: Injector) { }
ngAfterViewInit() {
  console.log('In');
  const model = this.injector.get(NgControl);
  console.log('test', model);
  const control = model.control;
  console.log(model.control);

  model.valueChanges.subscribe(value => console.log(value));
}

  writeValue(value: string): void {
    if (value) {
      this.result = value;
    }
  }


  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {}

  test(text: string) {
    this.onChange(text);
  }

  
 
}