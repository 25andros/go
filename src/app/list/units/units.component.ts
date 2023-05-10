import { Component } from '@angular/core';
import { DogsService } from '../dogs.service';
import { dogs } from '../dogs';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.scss']
})
export class UnitsComponent {


  constructor(private doggieListing: DogsService) { }


  ngOnInit() {
    this.doggies = this.doggieListing.getDogs();
    }

  doggies: dogs[] = [];


  display(){
  console.log(this.doggies);

  }




}
