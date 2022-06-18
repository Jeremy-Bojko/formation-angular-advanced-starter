import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn',
  // templateUrl: './btn.component.html',
  template: `<a [routerLink]="route" >{{ label }}</a>`,
  styleUrls: ['./btn.component.scss']
})
export class BtnComponent implements OnInit {
  @Input() public label!: string;
  @Input() public route!: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
