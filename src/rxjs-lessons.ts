import { Observable, debounceTime, distinctUntilChanged, fromEvent, map } from "rxjs";

// const search$ = new Observable<Event>(observer => {
//   const search = document.getElementById('search');

//   if(!search) {
//     observer.error('Element is not found on the page');
//     return;
//   }

//   search.addEventListener('input', (event) => {
//     observer.next(event);
//   })

// });

const search$ = fromEvent(document.getElementById('search')!, 'input');

search$
  .pipe(
    map((event) => (event.target as HTMLInputElement).value),
    debounceTime(700),
    map(value => value.length >= 3 ? value : ''),
    distinctUntilChanged(),
  )
  .subscribe((value) => {
    if (!value) return;

    console.log(value);
  });
