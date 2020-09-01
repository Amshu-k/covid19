import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-country-picker',
  templateUrl: './country-picker.component.html',
  styleUrls: ['./country-picker.component.scss']
})
export class CountryPickerComponent implements OnInit {
  @Input() data
  public countries: []
  selectedCountry: object = {};
  
  constructor() { }

  ngOnInit(): void {
    this.countries = this.data.countries
  }

}
