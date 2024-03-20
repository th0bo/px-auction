import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PixelService {
  private pixelsUrl = "api/pixels";

  constructor(private http: HttpClient) { }

  getPixels(): Observable<string[]> {
    return this.http.get<string[]>(this.pixelsUrl).pipe(
      tap((_) => console.log('fetched pixels')),
      catchError(this.handleError<string[]>('getPixels', ["red", "green", "green", "red"]))
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
