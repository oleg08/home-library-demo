import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import { AuthService } from '../services/auth.service';
import {AngularTokenService} from 'angular-token';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  signUpUser = {
    login: '',
    password: '',
    passwordConfirmation: ''
  };

  @Output() onFormResult = new EventEmitter<any>();

  constructor(private authService: AuthService) { }

  ngOnInit() {}


  onSignUpSubmit() {

    this.authService.registerUser(this.signUpUser).subscribe(

      (res) => {

        if (res.status === 200) {
          this.onFormResult.emit({signedUp: true, res});
        }

      },

      (err) => {
        console.log(err.json());
        this.onFormResult.emit({signedUp: false, err});
      }
    );

  }
}
