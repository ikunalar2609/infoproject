import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidateFormComponent } from './candidate-form/candidate-form.component';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { RequirmentFormComponent } from './requirment-form/requirment-form.component';
import { RequirmentListComponent } from './requirment-list/requirment-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CandidateFormComponent,
    CandidateListComponent,
    RequirmentFormComponent,
    RequirmentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
