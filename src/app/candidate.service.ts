import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CandidateService {
  private candidates: Candidate[] = [];
  private candidatesSubject = new BehaviorSubject<Candidate[]>(this.candidates);

  constructor() {}

  addCandidate(candidate: Candidate) {
    this.candidates.push(candidate);
    this.candidatesSubject.next([...this.candidates]);
  }

  getAllCandidates() {
    return this.candidatesSubject.asObservable();
  }
}

export interface Candidate {
  fullName: string;
  email: string;
  contactNumber: string;
  appliedFor: string;
  remarks: string;
}
