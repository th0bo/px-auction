import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { PixelService } from '../pixel.service';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [NgFor],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss',
})
export class BoardComponent {
  pixels: string[][] = [[]];

  constructor(private pixelService: PixelService) { }

  ngOnInit(): void {
    this.fetchPixels();
  }

  fetchPixels(): void {
    this.pixelService.getPixels()
      .subscribe(pixels => this.pixels = pixels);
  }

  get matrixOrder() {
    return Math.round(Math.sqrt(this.pixels.length));
  }

  handleClick(x: number, y: number): void {
    this.pixels[y][x] = 'black';
  }
}
