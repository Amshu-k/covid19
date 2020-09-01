import { Component, OnInit } from '@angular/core';
import { AppService } from './app.component.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'covid19';
  public data: object = undefined;
  public isLoader: boolean = true;
  constructor(private service: AppService) { }

  ngOnInit() {
    this.fetchedData();
  }

  private fetchedData() {
    this.service.fetchedData().subscribe(res => {
      const data = {
        confirmed: res['Global']['TotalConfirmed'],
        recovered: res['Global']['TotalRecovered'],
        deaths: res['Global']['TotalDeaths'],
        lastUpdate: res['Date'],
        countries: res['Countries'],
      }
      this.data = data
    }, error => {
      console.log(error)
      //alert handler
    }, () => {
      this.isLoader = false;
    })
  }

  

}
