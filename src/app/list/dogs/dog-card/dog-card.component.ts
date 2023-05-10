import { Component, Input } from '@angular/core';
import { DogsService } from '../../dogs.service';
import { dogs } from '../../dogs';

@Component({
  selector: 'app-dog-card',
  templateUrl: './dog-card.component.html',
  styleUrls: ['./dog-card.component.scss']
})

export class DogCardComponent {


  constructor(private dogBridge: DogsService) { }

  callDog= this.dogBridge.dogs;

  @Input() objDog?:dogs;

  //@Input() objDog:dogs= [this.callDog[0]];
  //@Input() callDog:dogs;

  ngAfterViewInit(){
    //console.log(this.objDog[0]);

    console.log("here");
    console.log(this.objDog);
  }

}
