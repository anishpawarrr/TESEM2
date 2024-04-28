import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
loginbtn() {
  window.location.href = 'login';
}
signupbtn() {
  window.location.href = 'signup';
}
homebtn() {
  window.location.href = 'home';
}
  title = 'Assi2';

}
