import { Injectable } from '@angular/core';
import {AngularFirestoreModule,AngularFirestoreCollection,AngularFirestoreDocument, AngularFirestore} from '@angular/fire/firestore';
import {Square} from '../models/Square'
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'

})
export class SquaresService {
  squaresCollection!: AngularFirestoreCollection<Square>;
  squares: Observable<Square[]>
  newColor='';
  square={
    id:'',
    numSquare:0,
    color:''
  }
  constructor(public afs: AngularFirestore) {
    // this.squares=this.afs.collection('squares').valueChanges();
    this.squares=this.afs.collection('squares').snapshotChanges().map(changes=>{
      return changes.map(a=>{
        const data=a.payload.doc.data() as Square;
        data.id=a.payload.doc.id;
        return data;
      })
    })
  }
  getSquares(){
    return this.squares;
  }
  changeColor(square:Square){
    this.newColor="#"+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
    this.square.id=square.id;
    this.square.numSquare=square.numSquare;
    this.square.color=this.newColor;
    console.log(this.square);
    console.log(square);
    this.afs.collection('squares').doc(square.id).set(this.square);
  }
}


