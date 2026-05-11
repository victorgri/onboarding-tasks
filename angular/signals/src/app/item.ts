import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  items = [
    {
      id: 1,
      name: 'Item 1',
      details: 'Details for Item 1'
    },
    {
      id: 2,
      name: 'Item 2',
      details: 'Details for Item 2'
    },
    {
      id: 3,
      name: 'Item 3',
      details: 'Details for Item 3'
    }
  ];

  getItems() {
    return this.items;
  }

  getItemById(id: number) {
    return this.items.find(
      item => item.id === id
    );
  }
}