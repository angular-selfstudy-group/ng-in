import { Component } from '@angular/core';
import { MailService } from './mail.service';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  template: `
    <div>
      <app-beauty-form></app-beauty-form>
      {{mail.message}}
    </div>
  `
})
export class AppComponent {
  title = 'Hello World - Yes! We are all individuals!';

  constructor(private mail:MailService) {}
}
