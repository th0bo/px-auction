import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { PixelComponent } from '../pixel/pixel.component';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [NgFor, PixelComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent {
  pixels: string[] = ["red", "blue", "yellow", "green", "#444444", "green", "red", "red", "blue"];

  get matrixOrder() {
    return Math.sqrt(this.pixels.length);
  }
}
