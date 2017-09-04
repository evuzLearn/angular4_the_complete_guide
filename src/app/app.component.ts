import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAAv-6Fu4A5XYlYdHFPFmbJ3zPHiTYARrI',
      authDomain: 'udemy-ng-b1342.firebaseapp.com'
    });
  }
}
