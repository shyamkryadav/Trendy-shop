import { Component } from '@angular/core';
import { routes } from '../app.routes';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  showLoginRegisterBox: boolean = false;

  toggleLoginRegisterBox() {
    this.showLoginRegisterBox = !this.showLoginRegisterBox;
  }
}
