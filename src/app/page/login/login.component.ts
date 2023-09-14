import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public form = FormGroup;

  formLogin = this.fb.group({
    email: ['', [Validators.min(4), Validators.email, Validators.required]],
    password: ['', [Validators.min(4), Validators.required]],
  });

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formLogin.reset();
  }
}
