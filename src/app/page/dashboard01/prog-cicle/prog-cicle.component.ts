import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-prog-cicle',
  templateUrl: './prog-cicle.component.html',
  styleUrls: ['./prog-cicle.component.css']
})
export class ProgCicleComponent implements OnInit {

  // tslint:disable-next-line: ban-types
  Texto: String;


  constructor() {

   }

   @Input() value: any;

  ngOnInit(): void {
    this.Texto = this.value;
  }

}
