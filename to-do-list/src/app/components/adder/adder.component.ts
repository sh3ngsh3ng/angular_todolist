import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-adder',
  templateUrl: './adder.component.html',
  styleUrls: ['./adder.component.css']
})
export class AdderComponent implements OnInit {
  @Output() childItemEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  addToList(value: string) {
    this.childItemEvent.emit(value)
  }

}
