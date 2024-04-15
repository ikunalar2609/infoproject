import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateFormComponent } from './candidate-form/candidate-form.component';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { RequirmentFormComponent } from './requirment-form/requirment-form.component';
import { RequirmentListComponent } from './requirment-list/requirment-list.component';

const routes: Routes = [
  { path: 'candidate-form', component: CandidateFormComponent },
  { path: 'requirment-form', component: RequirmentFormComponent },
  { path: 'view-candidates', component: CandidateListComponent },
  { path: 'view-requirments', component: RequirmentListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
