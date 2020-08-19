import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  idServer = 10;
  status = 'offline';

  getStatus() {
    return this.status;
  }
}
