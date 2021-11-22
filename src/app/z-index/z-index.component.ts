import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-z-index',
  templateUrl: './z-index.component.html',
  styleUrls: ['./z-index.component.css']
})
export class ZIndexComponent implements OnInit {

  constructor() { }
  openModal = false;
  ngOnInit(): void {
  }

  public changeZIndex() : void {
    this.openModal = true;
    alert(this.openModal);
  }

}
