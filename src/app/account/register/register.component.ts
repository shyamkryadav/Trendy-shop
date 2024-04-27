import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
 
  User,
  UserServiceProxy,
} from '../../../shared/service-proxies/service-proxies';
import { ServiceProxyModule } from '../../../shared/service-proxies/service-proxy.module';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, ServiceProxyModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registerData: User = new User();

  constructor(
    private router: Router,
    private _userService: UserServiceProxy,
    private toastr: ToastrService
  ) {}

  onSubmit() {
    this._userService.register(this.registerData).subscribe((res) => {
      if (res) {
        console.log(res);
        this.toastr.success('Account Register ', 'Sucess');
        this.router.navigate(['/login']);
      }
    });
  }
  goToLogin() {
    this.router.navigate(['/login']);
  }
}
