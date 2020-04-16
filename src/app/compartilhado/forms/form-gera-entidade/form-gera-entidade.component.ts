import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-gera-entidade',
  templateUrl: './form-gera-entidade.component.html',
  styleUrls: ['./form-gera-entidade.component.scss']
})
export class FormGeraEntidadeComponent implements OnInit {

  
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
