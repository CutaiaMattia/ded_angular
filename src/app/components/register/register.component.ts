import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private data: DataService, private readonly route : Router) {}

  classe: string;

  registraPersonaggio(ngForm: NgForm) {
    const formToPg = ngForm.form.value;

    this.classe = formToPg.classe
    this.data.createPg(
      formToPg.nomePG,
      formToPg.cognomePG,
      formToPg.razza,
      formToPg.classe,
      formToPg.livello,
      formToPg.for,
      formToPg.des,
      formToPg.cos,
      formToPg.int,
      formToPg.sag,
      formToPg.car
    );

    console.log(ngForm)
    console.log(ngForm.form.value)


    localStorage.setItem('pg', JSON.stringify(this.data.pg));
    this.route.navigate([`/${this.classe}`])
  }


}
