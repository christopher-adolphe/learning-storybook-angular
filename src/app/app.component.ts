import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'taskbox';

  task = {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
  }
}
