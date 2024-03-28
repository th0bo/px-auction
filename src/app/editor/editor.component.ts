import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.scss'
})
export class EditorComponent {
  @Input({ required: true })
  x!: number;
  @Input({ required: true })
  y!: number;
  @Input({ required: true })
  clientX!: number;
  @Input({ required: true })
  clientY!: number;
  @Input({ required: true })
  currentColor!: string;
  @Input({ required: true })
  lastBid!: number;

  get minNextBid(): number {
    return this.lastBid + Math.max(Math.ceil(this.lastBid * 0.1), 1);
  }

  get maxNextBid(): number {
    return Number(Array.from({ length: (this.minNextBid.toString(10).length + 1) }).map(() => "9").join(""));
  }

  bidForm = new FormGroup({
    color: new FormControl<string>("", {
      nonNullable: true,
    }),
    bid: new FormControl<number>(NaN, {
      nonNullable: true,
      asyncValidators: async (a) => a.value >= this.minNextBid ? null : null
    })
  });

  ngOnInit() {
    this.bidForm.controls.color.setValue(this.currentColor);
    this.bidForm.controls.bid.setValue(this.minNextBid);
  }

  ngOnChanges() {
    this.bidForm.controls.color.setValue(this.currentColor);
    this.bidForm.controls.bid.setValue(this.minNextBid);
  }

  onSubmit() {
    console.warn(this.bidForm.value);
  }
}
