import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  user_list: any[] = [];
  signup(email: string,username: string,password: string) {
    this.user_list = JSON.parse(localStorage.getItem('user_list') || "[]");
    this.user_list.push({
      'name': username,
      'email': email,
      'password': password
    });
    localStorage.setItem('user_list', JSON.stringify(this.user_list));
    // localStorage.setItem('user_list', JSON.stringify([]));
    window.alert(JSON.stringify(this.user_list))
  }

}
