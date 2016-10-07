import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Star } from './star';

@Component({
    selector: 'stars',
    template: `
    <div class="stars">
      <star
        *ngFor="let star of stars"
        [active]="star <= ratinga"
        (rate)="onRate($event)"
        [position]="star"
        [disabled]="disabled"
      >
      </star>
    </div>
  `,
})
export class Stars implements OnInit {
    @Input() starCount: number;
    @Input() rating: number;
    @Input() disabled: boolean;
    @Output() rate = new EventEmitter();
    stars: number[] = [1, 2, 3, 4, 5];
    ratinga = this.rating;

    constructor() {
        const count = this.starCount < 0 ? 5 : this.starCount;

    }

    ngOnInit() {
        this.ratinga = this.rating;
    }

    onRate(star) {
        if (!this.disabled) {
            this.rate.emit(star);
            this.ratinga = star;
        }
    }
}