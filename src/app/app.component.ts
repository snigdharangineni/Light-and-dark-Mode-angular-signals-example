import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { signal } from '@angular/core';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-signals-example';

  theme = signal('light');

  ngOnInit() {
    //this.theme.set('dark');

    this.theme.update(currentValue => currentValue === 'light'? 'dark' : 'light');

    if (typeof document !== 'undefined')
      document.body.className = this.theme();
  }
}
