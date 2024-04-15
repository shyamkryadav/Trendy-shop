import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  onSubmit() {
    // Add authentication logic here
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    // Example: Check username and password against stored credentials or call an authentication service
  }
}
