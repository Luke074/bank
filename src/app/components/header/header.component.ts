import { Component } from '@angular/core';
import { User } from 'src/app/Interfaces/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  date = new Date();
  formatedDate = `${this.date.getFullYear()}-${String(this.date.getMonth() + 1).padStart(2, '0')}-${String(this.date.getDate()).padStart(2, '0')} ${String(this.date.getHours()).padStart(2, '0')}:${String(this.date.getMinutes()).padStart(2, '0')}:${String(this.date.getSeconds()).padStart(2, '0')}`;
  public user: User = {
    name: '',
    email: '',
    password: '',
    image: '../../assets/icons/user-icon.svg',
    age: 0,
    created_at: this.formatedDate
  };

  constructor() {
  }
}
