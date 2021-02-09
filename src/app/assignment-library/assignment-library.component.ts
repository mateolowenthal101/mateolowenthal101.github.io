import { Component, OnInit } from '@angular/core';
import { AssignmentsService } from '../assignments.service';

@Component({
  selector: 'app-assignment-library',
  templateUrl: './assignment-library.component.html',
  styleUrls: ['./assignment-library.component.css']
})
export class AssignmentLibraryComponent implements OnInit {

  assignments;

  constructor(private assignment_data: AssignmentsService) {

    

   }

   ngOnInit(): void {

    this.Getinfo()
    console.log(this.assignments);
  

  }

  Getinfo() {
    this.assignment_data.getAssignments().subscribe((data: []) => {
      this.assignments = data; console.log(data)
    })

  }
  

}
