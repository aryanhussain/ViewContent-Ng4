import { Component, ContentChild, ContentChildren, QueryList } from '@angular/core';
import { HelloComponent } from './hello.component';

@Component({
	selector: 'app-hello-list',
	template: `
	  <p>Projected content:</p>
    <div>
	    <ng-content select=".class-select1"></ng-content>
	  </div>
	  <div>
	    <ng-content select=".class-select2"></ng-content>
	  </div>
	  <div>
	    <ng-content ></ng-content>
	  </div>
	  <button (click)="onClickAll()">
	    Randomize Hello colors
	   </button>
	   <button (click)="onClickFirst()">
	    Randomize First colors
	   </button>
	   <button (click)="onClickSecond()">
	    Randomize Second colors
	   </button>
	  <button (click)="onClickLast()">
	    Randomize only last Hello color
	 </button>`
})
export class HelloListComponent {
  @ContentChildren(HelloComponent) helloChildren: QueryList<HelloComponent>;
  @ContentChild('first') firstChild: HelloComponent;
  @ContentChild('second') secondChild: HelloComponent;
  @ContentChild('last') lastChild: HelloComponent;

  constructor() {}
  ngAfterContentInit() {
    // Content children now set
    this.onClickAll();
  }

  onClickAll() {
    this.helloChildren.forEach(child => child.randomizeColor());
  }

  onClickLast() {
    this.lastChild.randomizeColor();
  }
  
  onClickFirst() {
    this.firstChild.randomizeColor();
  }
  
  onClickSecond() {
    this.secondChild.randomizeColor();
  }
}
