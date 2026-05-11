import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { ItemService } from '../item';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './list.html',
})
export class ListComponent {

  items = signal<
    { id: number; name: string; details: string }[]
  >([]);

  constructor(private itemService: ItemService) {

    this.items.set(
      this.itemService.getItems()
    );

  }
}