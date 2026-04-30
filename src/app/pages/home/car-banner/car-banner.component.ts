import {Component, ViewChild} from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule, NgModel} from "@angular/forms";
import {HttpClient, HttpClientModule, HttpHeaders} from "@angular/common/http";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-car-banner',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  templateUrl: './car-banner.component.html',
  styleUrl: './car-banner.component.scss'
})
export class CarBannerComponent {
  @ViewChild('emailInput') emailInput!: NgModel;

  contactData = {
    name: '',
    email: '',
    phone: '',
    car: '',
    budget: '',
    message: ''
  };

  constructor(private http: HttpClient, private toast: ToastrService) {
  }

  sendMail() {
    if (!this.checkFieldsFilled()) {
      return;
    }
    let url = "https://formspree.io/f/mpqbzryy";

    const httpOptions = {
      headers: new HttpHeaders({
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      })
    };

    let data = `
      Vor- und Nachname=${this.contactData.name}&
      Email=${this.contactData.email}&
      Telefon=${this.contactData.phone}&
      Wunschfahrzeug=${this.contactData.car}&
      Budget=${this.contactData.budget}&
      Nachricht=${this.contactData.message}`;

    this.http.post<any>(url, data, httpOptions).subscribe({
      next: () => {
        this.toast.success('Ihre Anfrage wurde erfolgreich versendet!', undefined, {positionClass: 'toast-top-center'});
        this.contactData = {
          name: '',
          email: '',
          phone: '',
          car: '',
          budget: '',
          message: ''
        };
        this.emailInput.reset();
      },
      error: () => {
        this.toast.error('Ihre Anfrage konnte nicht versendet werden! Bitte versuchen Sie es erneut', undefined, {positionClass: 'toast-top-center'});
      }
    });
  }

  checkFieldsFilled() {
    const isPhoneNumberValid = this.contactData.phone ? /^(0|(\+41\s?))((7[5-9])|(8[1-9]))\s?\d{3}\s?\d{2}\s?\d{2}$/.test(this.contactData.phone) : true;
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.contactData.email);
    const areMainFieldsFilled = this.contactData.name && this.contactData.email && this.contactData.car;

    return isPhoneNumberValid && isEmailValid && areMainFieldsFilled;
  }
}
