import {Component, OnDestroy, OnInit} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {HeaderComponent} from "./shared/components/layout/header/header.component";
import {Subscription} from "rxjs";
import {UserService} from "./features/user/services/user.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'angular-concepts';
  userActivated: boolean = false;
  private activatedSub!: Subscription;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.activatedSub = this.userService.activatedEmitter
      .subscribe(
        (didActivated) => {
          this.userActivated = didActivated;
        }
      );
  }

  ngOnDestroy(): void {
    this.activatedSub.unsubscribe();
  }
}
