import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  user_list: any[] = [];
  constructor(){
    this.user_list = JSON.parse(localStorage.getItem('user_list') || "[]");
    window.alert(JSON.stringify(this.user_list))
  }
}
