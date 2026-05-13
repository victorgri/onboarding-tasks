import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lazy-load-component',
  imports: [RouterLink],
  templateUrl: './lazy-load-component.html',
  styleUrl: './lazy-load-component.scss',
})
export class LazyLoadComponent {}
