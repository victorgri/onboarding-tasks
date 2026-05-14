import { Component, signal } from '@angular/core';

import { FormComponent } from './components/form/form';

@Component({
  selector: 'app-root',
  imports: [ FormComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('form-with-validation');
}
