import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  @Output() successfullySignedIn = new EventEmitter();

  onSignIn() {
    this.successfullySignedIn.emit();
  }
}
