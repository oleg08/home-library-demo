import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {AngularTokenService} from 'angular-token';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  signInUser = {
    login: '',
    password: ''
  };

  @Output() onFormResult = new EventEmitter<any>();
  constructor(private tokenAuthSerivce: AngularTokenService) { }

  ngOnInit() {}

  onSignInSubmit() {

    this.tokenAuthSerivce.signIn(this.signInUser).subscribe(

      res => {
        if (res.status === 200) {
          this.onFormResult.emit({signedIn: true, res});
        }
      },

      err => {
        console.log('err:', err);
        this.onFormResult.emit({signedIn: false, err});
      }
    );

  }

}
