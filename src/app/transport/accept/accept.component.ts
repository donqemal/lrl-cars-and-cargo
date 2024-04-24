import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Details, User} from "../../model";
import {MatIcon} from "@angular/material/icon";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FooterComponent} from "../../footer/footer.component";
import {HttpClient, HttpClientModule, HttpHeaders} from "@angular/common/http";
import {ToastrService} from "ngx-toastr";

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

  constructor(private route: ActivatedRoute, private http: HttpClient, private toast: ToastrService, private router: Router) {
  }

  ngOnInit() {
    this.details = JSON.parse(this.route.snapshot.queryParams['details']);
  }

  checkFieldsFilled() {
    // TODO: Add validation for phone number
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.user.email!);
    const areOtherFieldsFilled = Object.keys(this.user)
      .filter(key => key !== 'message')
      .every(key => (this.user as any)[key]);

    return isEmailValid && areOtherFieldsFilled;
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
      Von=${this.details?.fromAdress}&
      Nach=${this.details?.toAdress}&
      Preis=CHF${this.details?.price}&
      Distanz=${this.details?.distance}&
      Vor- & Nachname=${this.user.fullName}&
      Email=${this.user.email}&
      Telefonnummer=${this.user.phone}&
      Bemerkungen=${this.user.message ?? ''}`;

    this.http.post<any>(url, data, httpOptions).subscribe({
      next: () => {
        this.toast.success('Ihre Anfrage wurde erfolgreich versendet!', undefined, {positionClass: 'toast-top-center'});
        setTimeout(() => this.router.navigate(['/']), 2200);
      },
      error: () => {
        this.toast.error('Ihre Anfrage konnte nicht versendet werden! Bitte versuchen Sie es erneut', undefined, {positionClass: 'toast-top-center'});
      }
    })
  }
}
