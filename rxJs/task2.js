// Observable usage example. 

import { Observable } from 'rxjs';

const observable$ = new Observable(subscriber => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  subscriber.complete();
}
);

observable.subscribe({
  next(value) {
    console.log(value);
  },
  complete() {
    console.log('Observable completed');
  }
});
