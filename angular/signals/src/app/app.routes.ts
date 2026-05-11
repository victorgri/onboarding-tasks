import { Routes } from '@angular/router';

import { ListComponent } from './list/list';
import { DetailComponent } from './details/details';

export const routes: Routes = [
  {
    path: '',
    component: ListComponent,
  },
  {
    path: 'item/:id',
    component: DetailComponent,
  },
];