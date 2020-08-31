import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
const URL = 'https://api.covid19api.com/summary' 

@Injectable()
export class AppService {
    constructor(private http: HttpClient) { }    
    
    fetchedData() {
        return this.http.get(URL)
    }

    fetchDailyData() {
        return this.http.get(`${URL}/daily`)
    }
}