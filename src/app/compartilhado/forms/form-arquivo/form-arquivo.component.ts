import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatExpansionPanel } from '@angular/material/expansion';


@Component({
  selector: 'app-form-arquivo',
  templateUrl: './form-arquivo.component.html',
  styleUrls: ['./form-arquivo.component.scss'],
  viewProviders: [MatExpansionPanel]
})
export class FormArquivoComponent implements OnInit {

  step = 0;

  constructor() { }

  ngOnInit(): void {
  }



  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  email = new FormControl('', [Validators.required, Validators.email]);
  nome = new FormControl('', [Validators.required, Validators.minLength(3)]);

  getErrorMessage() {
    if (this.nome.hasError('required')) {
      return 'Você deve entrar com o valor';
    }
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }


    return this.email.hasError('email') ? 'Not a valid email' : '';
  }




}
