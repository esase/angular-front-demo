import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { NbAuthService } from '@nebular/auth';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'angular-front';
}
