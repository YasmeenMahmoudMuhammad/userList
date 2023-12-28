import { Component, OnInit } from '@angular/core';
import { userData } from '../models/user-data/userData.data.model';
import { UserService } from '../services/user.service';
import {AboutUserDialogComponent} from '../about-user-dialog/about-user-dialog.component';
import { MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent  implements OnInit {
  constructor(private service : UserService,
    private dialog: MatDialog,
    ){
  }

  dataSource :userData[] = [];
  displayedColumns=['name' , 'email', 'phone', 'about', 'age', 'gender'];
  toggleButton: boolean = true;

  ngOnInit(): void {
    this.loadData();
  }
  loadData(){
    this.service.getData().subscribe(res=> {
      this.dataSource = res;
    })
  }
  showDialog(row: any){
     this.dialog.open(AboutUserDialogComponent, {
      width: '350px',
      data:{
        data :row
      }
    });
  }

}
