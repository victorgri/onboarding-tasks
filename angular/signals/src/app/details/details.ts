import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { ItemService } from '../item';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './details.html',
})
export class DetailComponent {

  item = signal<any>(null);

  constructor(
    private route: ActivatedRoute,
    private itemService: ItemService
  ) {

    const id = Number(
      this.route.snapshot.paramMap.get('id')
    );

    this.item.set(
      this.itemService.getItemById(id)
    );

    console.log(this.item());

  }
}