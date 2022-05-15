import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router) { }
  ngOnInit() {
    this.authService.appUser$.subscribe(user => {
      if (!user) {
        return;
      } else {
        /*
         * If the user is logged in fetch the return URL from local storage.
         * Navigate to the return URL if available.
         */
        const returnUrl = localStorage.getItem('returnUrl');
        if (!returnUrl) {
          return;
        }
        localStorage.removeItem('returnUrl');
        this.router.navigateByUrl(returnUrl);
      }
    });


    let cc = window as any;
       cc.cookieconsent.initialise({
         palette: {
           popup: {
             background: "#000000"
           },
           button: {
             background: "#ffe000",
             text: "#164969"
           }
         },
         theme: "classic",
         content: {
           message: "This website uses cookies to ensure you get the best expirience on our website.",
           dismiss: "Got it",
           link: "Learn more",
           href: "https://quizhack.in/disclaimer"
         }
       });

  }
}
