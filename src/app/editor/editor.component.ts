import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.scss'
})
export class EditorComponent {
  @Input({ required: true })
  x!: number;
  @Input({ required: true })
  y!: number;
  @Input({ required: true })
  color!: string;
}
