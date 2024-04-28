import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  logout() {
    this.login_bool = false;
    this.user_index = -1;
  }
  user_list: any = [];
  user_index: number = -1;
  login_bool: boolean = false;
  login(username: string,password: string) {
    window.alert('Username: ' + username + ' Password: ' + password);
    this.user_list = JSON.parse(localStorage.getItem('user_list') || '[]');
    for (let i = 0; i < this.user_list.length; i++) {
      if (this.user_list[i].name == username && this.user_list[i].password == password) {
        this.login_bool = true;
        this.user_index = i;
        break;
      }
    }
    if(this.login_bool){
      let tempname:String = this.user_list[this.user_index]. name;
      window.alert(tempname + ' Login Success');
    }
  }
}
