import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {KeyValuePipe, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-sell',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    KeyValuePipe,
    NgForOf,
    NgIf
  ],
  templateUrl: './sell.component.html',
  styleUrl: './sell.component.scss'
})
export class SellComponent implements OnInit {
  carForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.carForm = this.formBuilder.group({
      Bemerkungen: [''],
      Email: ['', [Validators.required, Validators.email]],
      Getriebe: ['', Validators.required],
      Kraftstoff: ['', Validators.required],
      Fahrzeugzustand: ['', Validators.required],
      Kilometerstand: ['', Validators.required],
      Erstzulassung: ['', Validators.required],
      Modell: ['', Validators.required],
      Marke: ['', Validators.required],
    });
  }

  submit(carForm: FormGroup) {
    const missingFields: string[] = [];

    for (const key in carForm.controls) {
      const control = carForm.controls[key];

      if (control.errors?.['required'] && control.value === '') {
        control.setErrors({required: {message: `${key} ist ein Pflichtfeld`}});
        missingFields.push(key);
      }
    }

    if (missingFields.length === 0) {
      let subject = "Autokauf Anfrage";
      let body = JSON.stringify(carForm.value);
      body = body.replace(/[{}"]/g, '');
      body = body.replace(/,/g, '%0D%0A');
      window.open(`mailto:lrl@cars-cargo.ch)?subject=${subject}&body=${body}`);
      this.carForm.reset();
    }
  }
}
