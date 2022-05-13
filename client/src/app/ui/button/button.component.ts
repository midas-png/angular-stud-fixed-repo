import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input()
  text!: string;

  @Input()
  isPrimary: boolean = false;

  @Input()
  isSmall: boolean = false;

  @Input()
  isFontDark: boolean = false;

  constructor() {}
}
