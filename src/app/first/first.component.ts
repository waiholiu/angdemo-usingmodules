import { Component, OnInit } from '@angular/core';
import { Bird } from '../bird.enum';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  myTypeOfBird: Bird = Bird.Magpie;
  
  constructor() { }

  ngOnInit() {
    
  }

}
