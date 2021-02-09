import { Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-img',
  templateUrl: './dialog-img.component.html',
  styleUrls: ['./dialog-img.component.css']
})
export class DialogImgComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit(): void {
   

  }


}
