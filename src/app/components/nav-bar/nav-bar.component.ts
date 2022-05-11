import { Component, OnInit, ViewChild } from "@angular/core";
import { AppUser } from "src/app/models/appuser";
import { AuthService } from "src/app/services/auth.service";
import { MatSidenav} from '@angular/material/sidenav';


@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.scss"],
})
export class NavBarComponent implements OnInit {
  appUser: AppUser;
  @ViewChild('sidenav') sidenav: MatSidenav;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.appUser$.subscribe((appUser) => (this.appUser = appUser));
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

  toggle() {
    console.log("Toggle called")
    this.sidenav.toggle();
  }
}
