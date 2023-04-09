import { ToastrService } from 'ngx-toastr';
import { Component } from '@angular/core';
import { Iuser } from 'src/app/Models/iuser';
import { UserAuthService } from 'src/app/Services/user/user-auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  user1: Iuser

  form: FormGroup;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  constructor(private fb: FormBuilder, private toastr: ToastrService, private authService: UserAuthService) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      password: ['', [Validators.required, Validators.minLength(7)]]
    })

    this.user1 = {
      email: "",
      password: ""
    }
  }

  login(email: string, pass: string): void {
    this.user1.email = email
    this.user1.password = pass
    const _user = this.authService.signIn(this.user1)
    if (_user?.name) {
      this.toastr.success('Hello, again' + _user?.name, '', {
        positionClass: 'toast-top-left'
      });
    }
  }






  showPassword = false;
  togglePassword() {
    this.showPassword = !this.showPassword

  }
}
