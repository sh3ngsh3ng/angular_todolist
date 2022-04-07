import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  items = ["Clean toilet", "Buy groceries", "Shower"]


  constructor() { }

  ngOnInit(): void {
  }

  finalAddToList(newItem: string) {
    this.items.push(newItem)
  }

}
