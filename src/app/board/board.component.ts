import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { PixelService } from '../pixel.service';
import { EditorComponent } from '../editor/editor.component';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [NgFor, NgIf, EditorComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss',
})
export class BoardComponent {
  pixels: string[][] = [[]];
  selectedPixel: { x: number, y: number, clientX: number, clientY: number } | null = null;

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

  handleClick(x: number, y: number, event: MouseEvent): void {
    if (this.selectedPixel?.x === x && this.selectedPixel?.y === y) {
      this.selectedPixel = null;
    } else {
      this.selectedPixel = { x, y, clientX: event.clientX, clientY: event.clientY };
    }
  }
}
