import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController, IonInput } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public isSubmitted = false;
  public messages: any = {
    email: [
      { type: 'required', message: 'O e-mail deve ser informado.' },
      { type: 'email', message: 'E-mail inválido' },
    ],
    password: [
      { type: 'required', message: 'A senha deve ser informada.' },
      { type: 'minlength', message: 'A senha deve conter no mínimo 6 caracteres.' },
    ],
  };
  @ViewChild('inputEmail') inputEmail: IonInput;

  constructor(
    public modalController: ModalController,
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  async ngOnInit() {
    await this.initializeForm();

    setTimeout(async () => {
      await this.inputEmail.setFocus();
    }, 500);
  }

  async clickClose() {
    return this.modalController.dismiss();
  }

  initializeForm() {
    return new Promise<any>(async (resolve) => {
      this.loginForm = this.formBuilder.group({
        email: ['', Validators.compose([
          Validators.required,
          Validators.email,
        ])],
        password: ['', Validators.compose([
          Validators.minLength(6),
          Validators.required,
        ])],
      });

      resolve();
    });
  }

  async clickLogin() {
    console.log(this.loginForm.getRawValue());
    console.log(this.loginForm.valid);

    this.isSubmitted = true;
    if (this.loginForm.valid) {
      this.router.navigate(['tabs/tab1']);
      await this.clickClose();
    }
  }

  validateError(validation: any, field: string) {
    const hasError = this.loginForm.get(field).hasError(validation.type);
    const dirty = this.loginForm.get(field).dirty;
    const touched = this.loginForm.get(field).touched;

    return hasError && this.isSubmitted && (dirty || touched);
  }
}
