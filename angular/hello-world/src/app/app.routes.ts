import { Routes } from '@angular/router';
import { HelloWorld } from './hello-world/hello-world';
import { HomePage } from './home-page/home-page';

export const routes: Routes = [
  {path: '',  component: HomePage, title: 'Home'},
  { path: 'hello-world', component: HelloWorld, title: 'Hello World' }
];
