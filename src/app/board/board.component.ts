import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { MATRIX } from '../mock-matrix';
import { PixelService } from '../pixel.service';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [NgFor],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss',
})
export class BoardComponent {
  pixels: string[] = [];

  constructor(private pixelService: PixelService) { }

  ngOnInit(): void {
    this.fetchPixels();
  }

  fetchPixels(): void {
    this.pixelService.getPixels()
      .subscribe(pixels => this.pixels = pixels);
  }

  get matrixOrder() {
    return Math.sqrt(this.pixels.length);
  }

  handleClick(i: number): void {
    this.pixels[i] = 'black';
  }
}
