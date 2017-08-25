import { Component, OnInit } from '@angular/core';

import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user1Activated = false;
  user2Activated = false;

  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.userService.userActivated.subscribe((id: number) => {
      switch (id) {
        case 1:
          this.user1Activated = true;
          break;
        case 2:
          this.user2Activated = true;
          break;
        default:
          break;
      }
    });
  }
}
