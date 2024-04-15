import { Component } from '@angular/core';
import { Requirment, RequirmentService } from '../requirment.service';
@Component({
  selector: 'app-requirment-list',
  templateUrl: './requirment-list.component.html',
  styleUrls: ['./requirment-list.component.css']
})
export class RequirmentListComponent {
  requirment: Requirment[] = [];

  constructor(private RequirmentService: RequirmentService) {
    this.RequirmentService.getAllRequirments().subscribe((requirment) => {
      this.requirment = requirment;
    });
  }
}
