import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { UserService } from '../contacts-manager/services/user.service';
import { User } from '../contacts-manager/models/user';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  users$: Observable<User[]>;

  constructor(
    private userService: UserService,
    private breakpointObserver: BreakpointObserver
  ) { }

  ngOnInit() {
    this.users$ = this.userService.users;
    this.userService.loadAll();
  }

}
