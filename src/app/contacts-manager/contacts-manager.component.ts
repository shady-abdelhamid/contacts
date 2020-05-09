import { Component, OnInit } from '@angular/core';
import { User } from './models/user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-contacts-manager',
  templateUrl: './contacts-manager.component.html',
  styleUrls: ['./contacts-manager.component.scss']
})
export class ContactsManagerComponent implements OnInit {

  public user: User;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.user = this.userService.getUserById(id);
    });

    console.log(this.user);
  }

}
