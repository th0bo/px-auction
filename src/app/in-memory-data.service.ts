import { Injectable } from '@angular/core';
import { MATRIX } from './mock-matrix';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  createDb() {
    const pixels = MATRIX;
    return { pixels };
  }

  constructor() { }
}
