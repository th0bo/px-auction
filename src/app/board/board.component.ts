import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { MATRIX } from '../mock-matrix';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [NgFor],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss',
})
export class BoardComponent {
  pixels: string[] = MATRIX;

  get matrixOrder() {
    return Math.sqrt(this.pixels.length);
  }
  handleClick(i: number): void {
    this.pixels[i] = 'black';
  }
}
