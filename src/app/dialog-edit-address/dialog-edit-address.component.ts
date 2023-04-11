import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-edit-address',
  templateUrl: './dialog-edit-address.component.html',
  styleUrls: ['./dialog-edit-address.component.scss']
})
export class DialogEditAddressComponent {
  user!: User;
  userId:string = '';
  loading = false;

  constructor(private firstore: AngularFirestore) {}


  saveChanges(){
    this.loading = true;

    this.firstore
      .collection('users')
      .doc(this.userId)
      .update(this.user.toJSON())
      .then(()=> {
        this.loading = false;
      })
    
    
  }
}
