import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  constructor() { }

  isRoleTaken(role: string): Observable<boolean> {
    // Your actual logic to check if the role is taken
    return of(role === 'bob'); // Placeholder return
  }
}
