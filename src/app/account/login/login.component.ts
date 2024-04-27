import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import {
//   AuthServiceProxy,
//   User,
// } from '../../../shared/service-proxies/service-proxies';
import { ServiceProxyModule } from '../../../shared/service-proxies/service-proxy.module';
import {
  User,
  UserServiceProxy,
} from '../../../shared/service-proxies/service-proxies';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ServiceProxyModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  logindata: User = new User();
  constructor(
    private toastr: ToastrService,
    private _userService: UserServiceProxy,
    private router: Router
  ) {}

  onSubmit() {
    if (this.logindata) {
      this._userService.login(this.logindata).subscribe((res) => {
        if (res) {
          this.toastr.success('Login ', 'Sucess');
          this.router.navigate(['/product']);
          console.log(res);
        }
      });
    }
  }

  goToRegister(){
          this.router.navigate(['/register']);

  }
}
