import { Component, OnInit } from '@angular/core';

import * as assingment from "../../assets/db/assignments.json";

@Component({
  selector: 'app-assignment-library',
  templateUrl: './assignment-library.component.html',
  styleUrls: ['./assignment-library.component.css']
})
export class AssignmentLibraryComponent implements OnInit {

  assignments = assingment.default;

  constructor() {

    

   }

   ngOnInit(): void {


  }

  

}
