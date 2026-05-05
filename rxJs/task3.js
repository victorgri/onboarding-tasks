// Subject usage in RxJS

import { Subject } from 'rxjs';
  
const subject$ = new Subject();

for (let i = 1; i <= 5; i++) {
  setTimeout(() => {
    subject$.next(i);
  }, i * 1000);
}

subject$.subscribe(value => {
  console.log(value);
});
