import { Component } from '@angular/core';
import { Candidate, CandidateService } from '../candidate.service';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css'],
})
export class CandidateListComponent {
  candidates: Candidate[] = [];

  constructor(private candidateService: CandidateService) {
    this.candidateService.getAllCandidates().subscribe((candidates) => {
      this.candidates = candidates;
    });
  }
}
