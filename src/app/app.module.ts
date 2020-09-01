import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CountryComponent } from './components/country/country.component';
import { CountryPickerComponent } from './components/country-picker/country-picker.component';
import { CardsComponent } from './components/cards/cards.component';
import { AppService } from "./app.component.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { CountUpModule } from 'ngx-countup';
import { MatSelectModule } from "@angular/material/select";

@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    CountryPickerComponent,
    CardsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatProgressSpinnerModule,
    CountUpModule,
    MatSelectModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
