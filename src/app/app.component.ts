import { LoaderService } from './shared/components/loader.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app-tcm';

  constructor(private s: LoaderService) {}

  ola() {
    this.s.show();
    setTimeout(() => this.s.hide(), 2000);
  }
}
