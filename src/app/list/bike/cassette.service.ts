import { Injectable } from '@angular/core';
import { Cassette } from './cassette';

@Injectable({
  providedIn: 'root'
})
export class CassetteService {

  constructor() { }

  cassettes = [
    {
      name: {
        speed: "11 speed",
        descript: "11-25",
      },
      gears: [25, 23, 21, 19, 17, 16, 15, 14, 13, 12, 11]
    },
    {
      name: {
        speed: "11 speed",
        descript: "11-32",
      },
      gears: [32, 28, 25, 22, 20, 18, 16, 14, 13, 12, 11]
    },


    {
      name: {
        speed: "11 speed",
        descript: "11-46",
      },
      gears: [46, 37, 32, 28, 24, 21, 19, 17, 15, 13, 11]
    },

    {
      name: {
        speed: "10 speed",
        descript: "11-25",
      },
      gears: [25, 23, 21, 19, 17, 15, 14, 13, 12, 11]
    },

    {
      name: {
        speed: "10 speed",
        descript: "12-28",
      },
      gears: [28, 25, 23, 21, 19, 17, 15, 14, 13, 12]
    },

    {
      name: {
        speed: "10 speed",
        descript: "11-46",
      },
      gears: [46, 40, 33, 27, 21, 19, 17, 15, 13, 11]
    },





  ];

  //modifying gears

  appendGearing(gear: number) {

    this.cassettes[0].gears[0] = gear;
  }

  appendSpeed(details: string) {
    this.cassettes[0].name.speed = details;
  }

  appendDescript(details: string) {
    this.cassettes[0].name.descript = details;
  }

  modSpecificGear(place: number, size: number) {
    this.cassettes[0].gears[place] = size;
    //console.log(place +"  "+size);
    //console.log(this.cassettes[0].gears[place]);
  }


  getCassette(): Cassette[] {
    return [

      {
        speed: "11 speed",
        name: "11-25",
        gears: [25, 23, 21, 19, 17, 16, 15, 14, 13, 12, 11]
      },

      {
        speed: "11 speed",
        name: "11-32",
        gears: [32, 28, 25, 22, 20, 18, 16, 14, 13, 12, 11]
      },

      {
        speed: "11 speed",
        name: "11-42",
        gears: [46, 37, 32, 28, 24, 21, 19, 17, 15, 13, 11]
      },
    ];
  }

}
