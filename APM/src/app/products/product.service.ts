import { IProducts } from './productinterface';
import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

// Using Service and Dependency Injection
export class ProductServeice {
    // Setting up a HTTP request
    // Getting data from JSON File
    private productUrl = 'api/products/products.json';
    constructor(private http: HttpClient) { }

    // Setting up a HTTP request
    getProducts(): Observable<IProducts[]> {
        return this.http.get<IProducts[]>(this.productUrl).pipe(
            tap(data => console.log('All', JSON.stringify(data))),
            catchError(this.handleError)
        );
    }
    
    handleError(err: HttpErrorResponse){
        // In a real project, we may send the server to some remote logging infrastructure
        // Instead of logging into the console
        let errorMessage = '';
        if(err.error instanceof ErrorEvent) {
            // A client side or network error occurred. Handle it accordingly
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            // The backend returned an unsuccessful response code
            // The response body may contain clues as to what went wrong
            errorMessage = `Server returned code: ${err.status}, error message: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }
}