import { Injectable } from '@angular/core';
import { MATRIX } from './mock-matrix';
import { Sale } from './sale';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  createDb() {
    const pixels = MATRIX;
    const sales: Sale[] = [];
    return { pixels, sales };
  }

  constructor() { }
}
