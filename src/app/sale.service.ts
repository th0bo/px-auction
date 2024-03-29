import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, catchError, of } from 'rxjs';
import { Sale } from './sale';

@Injectable({
  providedIn: 'root'
})
export class SaleService {
  private salesUrl = "api/sales";
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) { }

  getSales(): Observable<Sale[]> {
    return this.http.get<Sale[]>(this.salesUrl).pipe(
      tap((_) => console.log('fetched sales')),
      catchError(this.handleError<Sale[]>('getSales', []))
    );
  }

  addSale(sale: Sale): Observable<Sale> {
    console.log(sale);
    return this.http.post<Sale>(this.salesUrl, sale, this.httpOptions).pipe(
      tap((newSale: Sale) => console.log(`added sale for coordinates (${newSale.x}, ${newSale.y})`)),
      catchError(this.handleError<Sale>('addSale'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
