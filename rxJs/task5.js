// debounceTime usage example. 

import { Observable, debounceTime } from 'rxjs';

const observable$ = new Observable(subscriber => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  subscriber.complete();
}
);
observable$.pipe(debounceTime(5000)).subscribe({
  next(value) {
    console.log(value);
  },
  complete() {
    console.log('Observable completed');
  }
});
