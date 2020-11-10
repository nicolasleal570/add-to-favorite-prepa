import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-heart-icon',
  templateUrl: './heart-icon.component.html',
  styleUrls: ['./heart-icon.component.scss'],
})
export class HeartIconComponent implements OnInit {
  @Input() isFullFilled: boolean;

  constructor() {}

  ngOnInit(): void {}
}
