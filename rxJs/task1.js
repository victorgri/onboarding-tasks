// Pipe, from, map, filter usage 
import {filter, from, map} from 'rxjs';

const array = [1, 2, 3];

from(array).pipe(
  map(value => value * 2),
  filter(value => value > 3)
            
).subscribe(value => {console.log('result', value)});