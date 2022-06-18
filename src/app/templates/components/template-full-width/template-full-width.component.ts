import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-template-full-width',
  templateUrl: './template-full-width.component.html',
  styleUrls: ['./template-full-width.component.scss']
})
export class TemplateFullWidthComponent implements OnInit{
  // @Input() public title!: { titleParent: string };
  // Exercice change detection objet

  @Input() public title!: string;

  constructor() {
    // this.title = 'Le titre est ici'
  }

  ngOnInit(): void {
      
  }
  
  
}
