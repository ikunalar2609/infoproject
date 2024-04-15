import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RequirmentService, Requirment } from '../requirment.service';

@Component({
  selector: 'app-requirment-form',
  templateUrl: './requirment-form.component.html',
  styleUrls: ['./requirment-form.component.css']
})
export class RequirmentFormComponent {

  requirment: Requirment = {} as Requirment;
  requirmentForm: FormGroup;

  constructor(private RequirmentService: RequirmentService, private fb: FormBuilder, private router: Router) {
    this.requirmentForm = this.fb.group({
      title: ['', Validators.required],
      type: ['', [Validators.required]],
      experience: ['', [Validators.required,Validators.pattern(/^[0-9]*$/)]],
      remarks: [''],
    });
  }

  onSubmit() {
    if (this.requirmentForm.valid) {
      this.requirment = this.requirmentForm.value;
      this.RequirmentService.addRequirment(this.requirment);
      this.requirmentForm.reset();
      alert('Form submitted successfully!');
      this.router.navigate(['/']);
    }
    else {
      let errorMessage = 'Please correct the following errors:\n';

      if (this.requirmentForm.get('title')?.hasError('required')) {
        errorMessage += '- Title is required\n';
      }
      if (this.requirmentForm.get('type')?.hasError('required')) {
        errorMessage += '- Type is required\n';
      }
      if (this.requirmentForm.get('experience')?.hasError('required')) {
        errorMessage += '- Experience is required\n';
      }
      if (this.requirmentForm.get('experience')?.hasError('pattern')) {
        errorMessage += '- Experience must be a Number\n';
      }
      alert(errorMessage);
    }
  }
}
