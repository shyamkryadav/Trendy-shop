import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  AuthServiceProxy,
  LoginModel,
} from '../../../shared/service-proxies/service-proxies';
import { ServiceProxyModule } from '../../../shared/service-proxies/service-proxy.module';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ServiceProxyModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  logindata: LoginModel = new LoginModel();
  constructor(private _authProxy: AuthServiceProxy) {}

  onSubmit() {
    this._authProxy.login(this.logindata).subscribe((res) => {
      console.log(res);
    });
  }
}



// email: 'sdfas';
// password: 'adfas';
// username: 'dsaf';