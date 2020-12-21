import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empty',
  template: `
    <div class="ng2">Empty</div>
  `
})
export class EmptyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
