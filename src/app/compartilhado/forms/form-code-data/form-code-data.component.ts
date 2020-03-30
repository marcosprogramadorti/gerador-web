import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-code-data',
  templateUrl: './form-code-data.component.html',
  styleUrls: ['./form-code-data.component.scss']
})
export class FormCodeDataComponent implements OnInit {
  rotulo:string = 'Descrição:';
  constructor() { }

  ngOnInit(): void {
  }

}
