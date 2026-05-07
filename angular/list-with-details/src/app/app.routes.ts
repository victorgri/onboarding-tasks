import { Routes } from '@angular/router';

import { LitsComponent } from './lits/lits';
import { DetailComponent } from './detail/detail';

export const routes: Routes = [
  {
    path: '',
    component: LitsComponent,
  },
  {
    path: 'item/:id',
    component: DetailComponent,
  },
];