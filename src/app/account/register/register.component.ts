import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
  AuthServiceProxy,
  User,
} from '../../../shared/service-proxies/service-proxies';
import { ServiceProxyModule } from '../../../shared/service-proxies/service-proxy.module';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, ServiceProxyModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registerData: User = new User();

  constructor(private router: Router, private _authProxy: AuthServiceProxy) {}

  onSubmit() {
    console.log(this.registerData);

    // this._authProxy.register(this.registerData).subscribe((res) => {
    // if (res) {
    this.router.navigate(['/login']);
    // }
    // });

    if (this.registerData) {
      this.router.navigate(['/login']);
    }
  }
}
