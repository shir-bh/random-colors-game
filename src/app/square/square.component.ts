import { Component, OnInit } from '@angular/core';
import {SquaresService} from '../services/squares.service';
import {Square} from '../models/Square'

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {
  squares!: Square[];
 
  constructor(private squareService: SquaresService) { }

  ngOnInit(): void {
    this.squareService.getSquares().subscribe(squares=>
    {
      // console.log(squares);
      this.squares=squares;
    })
  }
  changeColor(square){
    this.squareService.changeColor(square);
  }


}
