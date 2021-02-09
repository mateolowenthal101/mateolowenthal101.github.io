import { Component, OnInit, Input } from '@angular/core';

import {MatDialog} from '@angular/material/dialog';
import {DialogImgComponent} from '../dialog-img/dialog-img.component';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  @Input() img;
 
  openDialog(event){

    let imageDialog = event.target.src;
    console.log(imageDialog);

    this.dialog.open(DialogImgComponent, {
      data: {
        imgSrc: imageDialog
      }
    });
  }

}
