import {AfterViewInit, ChangeDetectorRef, Component, NgZone, ViewChild} from '@angular/core';
import {FooterComponent} from "../../components/footer/footer.component";
import {FormsModule} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {Details} from "../../model";
import {DataService} from "../../services/data.service";
// @ts-ignore
import TravelMode = google.maps.TravelMode;
import {IntersectionObserverDirective} from "../../directives/intersection-observer.directive";
import {MatIcon} from "@angular/material/icon";

declare var google: any;

@Component({
  selector: 'app-transport',
  templateUrl: './transport.component.html',
  standalone: true,
  imports: [
    FooterComponent,
    FormsModule,
    IntersectionObserverDirective,
    MatIcon,
  ],
  styleUrls: ['./transport.component.scss'],
})

export class TransportComponent implements AfterViewInit {
  @ViewChild('fromAdress') fromAdress: any;
  @ViewChild('toAdress') toAdress: any;
  map: any;
  distance: string = '';
  price: number = 0;
  showFromAdress?: string;
  showToAdress?: string;

  constructor(private toast: ToastrService,
              private router: Router,
              private dataService: DataService,
              private changeDetectorRef: ChangeDetectorRef,
              private ngZone: NgZone
  ) {
  }

  ngAfterViewInit(): void {
    this.getFromPlaceAutocomplete();
    this.getToPlaceAutocomplete();
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 47, lng: 8.3417},
      zoom: 7
    });
  }


  private getFromPlaceAutocomplete() {
    const autocomplete = new google.maps.places.Autocomplete(this.fromAdress.nativeElement,
      {
        componentRestrictions: {country: 'CH'},
        types: ['geocode']
      });
    google.maps.event.addListener(autocomplete, 'place_changed', () => {
      this.checkLocationFields();
    });
  }

  private getToPlaceAutocomplete() {
    const autocomplete = new google.maps.places.Autocomplete(this.toAdress.nativeElement,
      {
        componentRestrictions: {country: 'CH'},
        types: ['geocode']
      });
    google.maps.event.addListener(autocomplete, 'place_changed', () => {
      this.checkLocationFields();
    });
  }

  checkLocationFields() {
    const origin = this.fromAdress.nativeElement.value;
    const destination = this.toAdress.nativeElement.value;
    if (origin && destination) {
      this.calculateDistance(origin, destination);
    }
  }

  calculateDistance(origin: string, destination: string): void {
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(this.map);

    directionsService.route({
      origin: origin,
      destination: destination,
      travelMode: TravelMode.DRIVING
    }, (response: any, status: any) => {
      if (status === 'OK') {
        directionsRenderer.setDirections(response);
        this.showFromAdress = this.fromAdress.nativeElement.value;
        this.showToAdress = this.toAdress.nativeElement.value;
        this.fromAdress.nativeElement.value = '';
        this.toAdress.nativeElement.value = '';
        this.changeDetectorRef.detectChanges();
      } else {
        this.ngZone.run(() => {
          this.toast.error('Einer der Standorte existiert nicht!', undefined, {positionClass: 'toast-top-center'});
          this.fromAdress.nativeElement.value = '';
          this.toAdress.nativeElement.value = '';
        });
      }
    });

    const service = new google.maps.DistanceMatrixService();
    service.getDistanceMatrix(
      {
        origins: [origin],
        destinations: [destination],
        travelMode: TravelMode.DRIVING,
      },
      (response: any, status: any) => {
        if (status === 'OK') {
          this.distance = response.rows[0].elements[0].distance.text;
          const distance = response.rows[0].elements[0].distance.value / 1000;
          this.price = Math.round(distance <= 250 ? distance * 1.7 : distance * 1.5);
        } else {
          this.toast.error('Die Distanz konnte nicht berechnet werden!', undefined, {positionClass: 'toast-top-center'});
        }
      }
    );
  }

  navigatePage() {
    const details: Details = {
      price: this.price,
      distance: this.distance,
      fromAddress: this.showFromAdress!,
      toAddress: this.showToAdress!
    };
    this.dataService.setDetails(details);
    this.router.navigate(['/akzeptieren']);
  }
}
