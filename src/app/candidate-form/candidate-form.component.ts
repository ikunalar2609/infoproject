import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Candidate, CandidateService } from '../candidate.service';
import { Requirment, RequirmentService } from '../requirment.service';

@Component({
  selector: 'app-candidate-form',
  templateUrl: './candidate-form.component.html',
  styleUrls: ['./candidate-form.component.css'],
})
export class CandidateFormComponent {
  candidate: Candidate = {} as Candidate;
  candidateForm: FormGroup;
  requirements: Requirment[] = [];

  constructor(private candidateService: CandidateService,
              private fb: FormBuilder,
              private requirementService: RequirmentService,
              private router: Router ) {
    this.candidateForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contactNumber: ['',[ Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      appliedFor: ['', Validators.required],
      remarks: [''],
    });
  }

  ngOnInit() {
    this.requirementService.getAllRequirments().subscribe((requirment) => {
      this.requirements = requirment;
    });
  }

  onSubmit() {
    if (this.candidateForm.valid) {
      this.candidate = this.candidateForm.value;
      this.candidateService.addCandidate(this.candidate);
      this.candidateForm.reset();
      alert('Form submitted successfully!');
      this.router.navigate(['/']);
    }
    else {
      let errorMessage = 'Please correct the following errors:\n';

      if (this.candidateForm.get('fullName')?.hasError('required')) {
        errorMessage += '- Full Name is required\n';
      }
      if (this.candidateForm.get('email')?.hasError('required')) {
        errorMessage += '- Email is required\n';
      }
      if (this.candidateForm.get('email')?.hasError('email')) {
        errorMessage += '- Please enter a valid email address\n';
      }
      if (this.candidateForm.get('contactNumber')?.hasError('required')) {
        errorMessage += '- Contact Number is required\n';
      }
      if (this.candidateForm.get('contactNumber')?.hasError('pattern')) {
        errorMessage += '- Contact Number must be 10 digits Numbers\n';
      }
      if (this.candidateForm.get('appliedFor')?.hasError('required')) {
        errorMessage += '- Applied For is required\n';
      }

      alert(errorMessage);
    }
  }
}
