import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { ItemService } from '../item';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './lits.html',
})
export class LitsComponent {

  items: { id: number; name: string; details: string; }[] = [];

  constructor(private itemService: ItemService) {
    this.items = this.itemService.getItems();
  }
}