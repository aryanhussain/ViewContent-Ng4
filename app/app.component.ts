import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	template: `
	  <app-hello-list>
	   <app-hello #first name="Select1" class="class-select1">
      div with .class-select1
    </app-hello>
	   <app-hello #second name="Select2" class="class-select2">
        div with .class-select2
     </app-hello>
	    <app-hello #last name="Last World"></app-hello>
	  </app-hello-list>
	  <p>Calls function on child component classes to randomize color of them.</p>`
})
export class AppComponent {
  constructor() {}
}
