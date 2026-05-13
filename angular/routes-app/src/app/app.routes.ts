import { Routes } from '@angular/router';
import { FirstComponent } from './components/first-component/first-component';
import { SecondComponent } from './components/second-component/second-component';
import { Homepage } from './components/homepage/homepage';

export const routes: Routes = [
    {
        path: '',
        component: Homepage
    },
    {
        path: 'first',
        component: FirstComponent
    },
    {
        path: 'second',
        component: SecondComponent
    },
    {
        path: 'lazy',
        loadComponent: () => import('./components/lazy-load-component/lazy-load-component').then(m => m.LazyLoadComponent)
    }
];
