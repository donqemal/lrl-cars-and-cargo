import {Component} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {KeyValuePipe, NgClass, NgForOf, NgIf} from "@angular/common";
import {HttpClient, HttpClientModule, HttpHeaders} from "@angular/common/http";
import {ToastrService} from "ngx-toastr";
import {MatIcon} from "@angular/material/icon";
import {FooterComponent} from "../footer/footer.component";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatInput, MatInputModule} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {Car} from "../model";

@Component({
  selector: 'app-sell',
  standalone: true,
  imports: [
    KeyValuePipe,
    NgForOf,
    NgIf,
    HttpClientModule,
    ReactiveFormsModule,
    MatIcon,
    FooterComponent,
    MatFormField,
    MatInput,
    MatButton,
    MatFormFieldModule,
    MatInputModule,
    NgClass,
    FormsModule
  ],
  templateUrl: './sell.component.html',
  styleUrl: './sell.component.scss',
})
export class SellComponent {
  car: Car = {
    marke: '',
    modell: '',
    jahrgang: null,
    kilometerstand: null,
    zustand: 'Gut',
    kraftstoffart: 'Benzin',
    getriebe: 'Automatik',
    email: '',
    preisvorstellung: null,
    bemerkungen: ''
  };

  carForm = new FormGroup({
    marke: new FormControl('', Validators.required),
    modell: new FormControl('', Validators.required),
    jahrgang: new FormControl(null, Validators.required),
    kilometerstand: new FormControl(null, Validators.required),
    zustand: new FormControl('', Validators.required),
    kraftstoffart: new FormControl('', Validators.required),
    getriebe: new FormControl('', Validators.required),
    preisvorstellung: new FormControl(null, Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    bemerkungen: new FormControl('')
  });

  constructor(private http: HttpClient, private toast: ToastrService) {
  }

  sendMail() {
    let url = "https://formspree.io/f/moqgyjrw";

    const httpOptions = {
      headers: new HttpHeaders({
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      })
    };

    let data = `
      Marke=${this.car.marke}&
      Modell=${this.car.modell}&
      Jahrgang=${this.car.jahrgang}&
      Kilometerstand=${this.car.kilometerstand}&
      Zustand=${this.car.zustand}&
      Kraftstoffart=${this.car.kraftstoffart}&
      Getriebe=${this.car.getriebe}&
      Email=${this.car.email}&
      Preisvorstellung=${this.car.preisvorstellung}&
      Bemerkungen=${this.car.bemerkungen}`;

    this.http.post<any>(url, data, httpOptions).subscribe({
      next: () => {
        this.toast.success('Ihre Anfrage wurde erfolgreich versendet!', undefined, {positionClass: 'toast-top-center'});
        this.car = {
          marke: '',
          modell: '',
          jahrgang: null,
          kilometerstand: null,
          zustand: 'Gut',
          kraftstoffart: 'Benzin',
          getriebe: 'Automatik',
          email: '',
          preisvorstellung: null,
          bemerkungen: ''
        }
      },
      error: () => {
        this.toast.error('Ihre Anfrage konnte nicht versendet werden! Bitte versuchen Sie es erneut', undefined, {positionClass: 'toast-top-center'});
      }
    })
  }

  checkFieldsFilled() {
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.car.email);
    const areOtherFieldsFilled = Object.keys(this.car)
      .filter(key => key !== 'bemerkungen')
      .every(key => (this.car as any)[key]);

    return isEmailValid && areOtherFieldsFilled;
  }
}
