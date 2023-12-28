import { Component, Inject, Input, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-about-user-dialog',
  templateUrl: './about-user-dialog.component.html',
  styleUrls: ['./about-user-dialog.component.scss']
})
export class AboutUserDialogComponent implements OnInit{
constructor( 
  @Inject(MAT_DIALOG_DATA) public data : any){
}
ngOnInit(): void {
  console.log(this.data.data)
  this.data.data ; 
}
}
