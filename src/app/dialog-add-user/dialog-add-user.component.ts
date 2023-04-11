import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent {

  user = new User();
  birthDate!: Date;
  loading: boolean = false;

  constructor(private firstore: AngularFirestore) {}

  saveUser(){
    this.loading = true;
    this.user.birthDate = this.birthDate.getTime();
    console.log(this.user);

    this.firstore
      .collection('users')
      .add(this.user.toJSON())
      .then((result: any) => {
        this.loading = false;
      });
    
  }

}
