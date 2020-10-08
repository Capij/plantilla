import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';
import { UserModel } from '../../models/user.model';
import * as CryptoJS from 'crypto-js';


@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(private afs:AngularFirestore ) { }

  addUser(user:any,permission :number){
    if(user){
      const data:UserModel={
        name: user.name,
        last_name: user.last_name,
        email: user.email,
        deleted: false,
        password: user.password,
        pass: false,
        uid: user.uid,
        permission: [permission],
        timestap: Date.now() 
      }
      this.afs.collection('users').add(data);
    }
  }

  getUser(id): Observable<UserModel[]>{

    return this.afs.collection('users', res => res.where('uid', '==',id)).snapshotChanges()
    .pipe(
      map((doc)=>{
        return doc.map((ele) =>{
          return {
            id: ele.payload.doc.id,
            ...ele.payload.doc.data()
          }
        }) as UserModel[];
      })
      )

  }
  
  
}