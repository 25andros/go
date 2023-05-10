import { Component } from '@angular/core';
import { dogs } from '../dogs';
import { DogsService } from '../dogs.service';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})

export class DogsComponent {

  constructor(private dogBridge: DogsService) { }

  callDog= this.dogBridge.dogs;


  //lifecycle hooks

  ngOnInIt(){
  }

  ngAfterViewInit(){
    console.log(this.callDog);
  }


}
