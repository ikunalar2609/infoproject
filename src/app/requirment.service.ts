import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RequirmentService {

  private requirments: Requirment[] = [];
  private requirmentsSubject = new BehaviorSubject<Requirment[]>(this.requirments);

  constructor() {}

  addRequirment(requirment: Requirment) {
    this.requirments.push(requirment);
    this.requirmentsSubject.next([...this.requirments]);
  }

  getAllRequirments() {
    return this.requirmentsSubject.asObservable();
  }
}

export interface Requirment {
  title: string;
  type: string;
  experience: string;
  remarks: string;
}
