import {Component, OnDestroy, OnInit} from '@angular/core';
import {filter, map, Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  title = 'untitled63';
  #firstSubscription: Subscription | null = null;

  ngOnInit() {
    // this.#firstSubscription = interval(1000).subscribe((count) => {
    //   console.log(count);
    // });
    const myIntervalObservable = new Observable<number>((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        count += 1;
        if (count > 3) {
          observer.error(new Error('The count is greater than 3'))
        }
        if (count === 5) {
          observer.complete();
        }
      }, 1000)
    });
    // Deprecated
    // this.#firstSubscription = myIntervalObservable.subscribe(
    //   (count) => {
    //     console.log(count)
    //   },
    //   (error) => {
    //     alert(error.message)
    //   },
    //   () => {
    //     alert("Complete")
    //   },
    // );
    //  Operators
    // New
    this.#firstSubscription = myIntervalObservable
      .pipe(
        filter((count) => {
          return count >= 1
        }),
        map((count: number) => {
          return 'Round ' + (count + 1);
        })
      ).subscribe(
        {
          next(count) {
            console.log(count)
          },
          error(error) {
            alert(error.message)
          },
          complete() {
            alert("Complete")
          },
        }
      );
  }

  ngOnDestroy() {
    if (this.#firstSubscription) {
      this.#firstSubscription.unsubscribe();
    }
  }
}
