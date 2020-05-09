import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, shareReplay, take } from 'rxjs/operators';
import { User } from '../contacts-manager/models/user';
import { UserService } from '../contacts-manager/services/user.service';
import { MatSidenav } from '@angular/material/sidenav';

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
@ViewChild(MatSidenav) drawer: MatSidenav;
  constructor(
    private userService: UserService,
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer) {
    iconRegistry.addSvgIconSet(sanitizer.bypassSecurityTrustResourceUrl('assets/avatars.svg'));
  }

  ngOnInit() {
    this.users$ = this.userService.users;
    this.userService.loadAll();

    this.router.events.subscribe( async () => {
      const isHeadset = await this.isHandset$.pipe(take(1)).toPromise();
      if (isHeadset) this.drawer.close();
    });

  }
}
