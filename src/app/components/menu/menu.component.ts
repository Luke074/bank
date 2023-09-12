import { Component } from '@angular/core';
import { User } from 'src/app/Interfaces/user';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  private date = new Date();

  formatedDate = `${this.date.getFullYear()}-${String(this.date.getMonth() + 1).padStart(2, '0')}-${String(this.date.getDate()).padStart(2, '0')} ${String(this.date.getHours()).padStart(2, '0')}:${String(this.date.getMinutes()).padStart(2, '0')}:${String(this.date.getSeconds()).padStart(2, '0')}`;
  public user: User = {
    name: 'Lucas',
    surname: 'Mendes',
    email: '',
    password: '',
    image: '../../assets/icons/user-icon.svg',
    age: 0,
    created_at: this.formatedDate
  };

  public links: Array<{ name: string, link: string, img: string }> = [
    {
      name: 'Home',
      link: '/home',
      img: '../../../assets/icons/home-icon.svg'
    },
    {
      name: 'About',
      link: '/about',
      img: '../../../assets/icons/',
    },
    {
      name: 'Contact',
      link: '/contact',
      img: '../../../assets/icons/',
    },
    {
      name: 'Login',
      link: '/login',
      img: '../../../assets/icons/',
    }
  ];

  constructor() {
  }
}
