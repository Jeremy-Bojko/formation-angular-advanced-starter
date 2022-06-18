import { Directive, HostBinding, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {
  @Input() appState!: string;
  @HostBinding('class') tdClassName!: string;
  // Ici on vient cibler l'attribut class de l'élément qui possède notre directive

  constructor() { }

  ngOnChanges(): void {
    console.log(this.appState);
    this.tdClassName = `state-${this.appState.toLowerCase()}`
  }

}
