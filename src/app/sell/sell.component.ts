import {Component} from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {KeyValuePipe, NgForOf, NgIf} from "@angular/common";
import {HttpClient, HttpClientModule, HttpHeaders} from "@angular/common/http";
import {ToastrService} from "ngx-toastr";
import {MatIcon} from "@angular/material/icon";
import {FooterComponent} from "../footer/footer.component";

export type Car = {
  marke: string;
  modell: string;
  erstzulassung: string;
  kilometerstand: number;
  zustand: string;
  kraftstoffart: string;
  getriebe: string;
  email: string;
  bemerkungen: string;
}

@Component({
  selector: 'app-sell',
  standalone: true,
  imports: [
    KeyValuePipe,
    NgForOf,
    NgIf,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatIcon,
    FooterComponent
  ],
  templateUrl: './sell.component.html',
  styleUrl: './sell.component.scss'
})
export class SellComponent {
  constructor(private http: HttpClient, private fb: FormBuilder, private toast: ToastrService) {
  }

  carForm = this.fb.group({
    marke: ['', Validators.required],
    modell: ['', Validators.required],
    erstzulassung: ['', Validators.required],
    kilometerstand: [null, Validators.required],
    zustand: ['', Validators.required],
    kraftstoffart: ['', Validators.required],
    getriebe: ['', Validators.required],
    email: ['', Validators.required, Validators.email],
    bemerkungen: [''],
  });


  sendMail(
    marke: string,
    modell: string,
    jahrgang: string,
    kilometerstand: string,
    zustand: string,
    kraftstoffart: string,
    getriebe: string,
    email: string,
    preisvorstellung: string,
    bemerkungen: string,
  ) {
    let url = "https://formspree.io/f/mleqagyd";

    const httpOptions = {
      headers: new HttpHeaders({
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      })
    };

    let data = `
      Marke=${marke}&
      Modell=${modell}&
      Jahrgang=${jahrgang}&
      Kilometerstand=${kilometerstand}&
      Zustand=${zustand}&
      Kraftstoffart=${kraftstoffart}&
      Getriebe=${getriebe}&
      Email=${email}&
      Preisvorstellung=${preisvorstellung}&
      Bemerkungen=${bemerkungen}`;

    this.http.post<any>(url, data, httpOptions).subscribe({
      next: () => {
        this.toast.success('Ihre Anfrage wurde erfolgreich versendet!', undefined, {positionClass: 'toast-top-center'});
        this.carForm.reset();
      },
      error: () => {
        this.toast.error('Ihre Anfrage konnte nicht versendet werden! Bitte versuchen Sie es erneut', undefined, {positionClass: 'toast-top-center'});
      }
    })
  }
}
