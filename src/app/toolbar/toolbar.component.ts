import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthDialogComponent} from '../auth-dialog/auth-dialog.component';
import {AngularTokenService} from 'angular-token';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @ViewChild('authDialog') authDialog: AuthDialogComponent;

  constructor(public tokenAuthService: AngularTokenService) { }

  ngOnInit() {}
  signOut () {
    this.tokenAuthService.signOut().subscribe(
      res => {
        console.log(res);
      },
      err => {}
    );
  }

  presentAuthDialog(mode?: 'login'| 'register'){
    this.authDialog.openDialog(mode);
  }

}
