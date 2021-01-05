import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {environment} from '../environments/environment' 
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { SquareComponent } from './square/square.component';
import { BoardComponent } from './board/board.component';
import {SquaresService} from './services/squares.service'
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    SquareComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase,'random-colors-game'),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [SquaresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
