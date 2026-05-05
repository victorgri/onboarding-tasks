// switchMap usage in RxJS

import { fromEvent, of } from 'rxjs';
import { switchMap, delay } from 'rxjs/operators';

const button = document.getElementById('myButton');

fromEvent(button, 'click').pipe(
    switchMap(() => of('Button clicked!').pipe(delay(1000)))
).subscribe(message => {
    console.log(message);
});
