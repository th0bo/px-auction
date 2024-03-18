import { Component, Input, NO_ERRORS_SCHEMA } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-pixel',
  standalone: true,
  imports: [NgIf],
  schemas: [NO_ERRORS_SCHEMA],
  templateUrl: './pixel.component.html',
  styleUrl: './pixel.component.scss'
})
export class PixelComponent {
  @Input({ required: true }) color!: string;
  handleClick() {
    console.log(this.color);
    this.color = "black";
  }
}
