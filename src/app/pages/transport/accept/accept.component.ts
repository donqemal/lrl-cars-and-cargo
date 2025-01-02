import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Details, User} from "../../../model";
import {MatIcon} from "@angular/material/icon";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FooterComponent} from "../../../components/footer/footer.component";
import {HttpClient, HttpClientModule, HttpHeaders} from "@angular/common/http";
import {ToastrService} from "ngx-toastr";
import {DataService} from "../../../services/data.service";

@Component({
  selector: 'app-accept',
  standalone: true,
  imports: [
    MatIcon,
    ReactiveFormsModule,
    FooterComponent,
    FormsModule,
    HttpClientModule
  ],
  templateUrl: './accept.component.html',
  styleUrl: './accept.component.scss'
})
export class AcceptComponent implements OnInit {
  details?: Details;
  user: User = {
    fullName: undefined,
    email: undefined,
    phone: undefined,
    message: undefined
  };

  constructor(private http: HttpClient, private toast: ToastrService, private router: Router, private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getDetails().subscribe(details => {
      details ? this.details = details : this.router.navigate(['/']);
    });
  }

  checkFieldsFilled() {
    // only swiss numbers allowed at the moment
    const isPhoneNumberValid = /^(0|(\+41\s?))((7[5-9])|(8[1-9]))\s?\d{3}\s?\d{2}\s?\d{2}$/.test(this.user.phone!);
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.user.email!);
    const areOtherFieldsFilled = Object.keys(this.user)
      .filter(key => key !== 'message')
      .every(key => (this.user as any)[key]);

    return isPhoneNumberValid && isEmailValid && areOtherFieldsFilled;
  }

  sendMail() {
    let url = "https://formspree.io/f/mrgnrdpy";

    const httpOptions = {
      headers: new HttpHeaders({
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      })
    };

    let data = `
      Von=${this.details?.fromAddress}&
      Nach=${this.details?.toAddress}&
      Preis=CHF${this.details?.price}&
      Distanz=${this.details?.distance}&
      Vor- und Nachname=${this.user.fullName}&
      Email=${this.user.email}&
      Telefonnummer=${this.user.phone}&
      Bemerkungen=${this.user.message ?? ''}`;

    this.http.post<any>(url, data, httpOptions).subscribe({
      next: () => {
        this.toast.success('Sie werden automatisch auf die Homepage zurückgeleitet.', 'Ihre Anfrage wurde erfolgreich versendet!', {positionClass: 'toast-top-center'});
        this.user = {
          fullName: undefined,
          email: undefined,
          phone: undefined,
          message: undefined
        };
        setTimeout(() => this.router.navigate(['/']), 4000);
      },
      error: () => {
        this.toast.error('Ihre Anfrage konnte nicht versendet werden! Bitte versuchen Sie es erneut', undefined, {positionClass: 'toast-top-center'});
      }
    })
  }
}
