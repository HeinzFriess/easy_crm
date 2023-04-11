import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
//import { User } from 'src/models/user.class';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users:any = [];



  constructor(public dialog: MatDialog, private firstore: AngularFirestore) {}

  openDialog(){
    const dialogRef = this.dialog.open(DialogAddUserComponent);
  }

  ngOnInit(){
    this.firstore
      .collection('users')
      .valueChanges({idField: 'customIdName'})
      .subscribe((changes: any) => {
        this.users = changes;
      })
  }



}
