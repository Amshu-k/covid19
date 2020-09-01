import { Component, OnInit, Input } from '@angular/core';
import { UrlHandlingStrategy } from '@angular/router';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {
  @Input() selectedCountry: object;

  ngOnInit() {
  }

  getCountryFlag() {
    return `url('https://www.countryflags.io/${this.selectedCountry['CountryCode']}/shiny/64.png')`
  }
}