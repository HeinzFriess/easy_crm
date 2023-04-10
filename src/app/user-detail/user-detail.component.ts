import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Firestore } from 'firebase/firestore';
import { Subscription } from 'rxjs';
import { User } from 'src/models/user.class';
import { DialogEditAddressComponent } from '../dialog-edit-address/dialog-edit-address.component';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  userId = '';
  user: User = new User();

  constructor(private route: ActivatedRoute, private firstore: AngularFirestore, public dialog: MatDialog) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params['id']) //log the value of id
      this.userId = params['id']
      this.getUser();
    });
  }

  getUser() {
    this.firstore
      .collection('users')
      .doc(this.userId)
      .valueChanges()
      .subscribe((user: any) => {
        this.user = new User(user);
        console.log('diesr user ',this.user);
      });
    //console.log(this.user);
  }

  editAdressDialog(){
    let dialog = this.dialog.open(DialogEditAddressComponent);
    dialog.componentInstance.user = this.user;
  }

  editDetailDialog(){
    this.dialog.open(DialogEditUserComponent);
  }

}
