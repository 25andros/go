import { Injectable } from '@angular/core';
import { ChainRingService } from './chain-ring.service';
import { CassetteService } from './cassette.service';

import { Drivetrain } from './drivetrain';

@Injectable({
  providedIn: 'root'
})
export class DrivetrainService {

  constructor( private cassettePiece:CassetteService, private chainringPiece:ChainRingService ) { }

  ngOnInit(){




  }

  specs_data:Drivetrain[] = [


  ];



  display(){
  console.log(`Hello there`);
    //console.log(this.chainringPiece);
    //console.log(this.cassettePiece);
  }
}
