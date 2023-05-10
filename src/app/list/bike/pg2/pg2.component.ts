import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Cassette } from '../cassette';
import { CassetteService } from '../cassette.service';

import { ChainRing } from '../chain-ring';
import { ChainRingService } from '../chain-ring.service';

import { WheelService } from '../wheel.service';
import { Wheel } from '../wheel';

import { MatTableDataSource } from '@angular/material/table';
import { of } from 'rxjs';


export interface spec_Sheet {
  Front: {
    index: number,
    tooth: number,
  },
  Rear: {
    index: number,
    tooth: number,
  },
  ratio: number;
};

export interface info_Sheet {
  front: {
    name: string,
    descript: string,
    gears: number[],
  },
  rear: {
    name: string,
    descript: string,
    gears: number[],
  },
};

@Component({
  selector: 'app-pg2',
  templateUrl: './pg2.component.html',
  styleUrls: ['./pg2.component.scss'],
})

export class Pg2Component {

  constructor(private cassetteBridge: CassetteService, private chainRingBridge: ChainRingService, private wheelBridge: WheelService) { }

  rearListIt: any;
  cassette: Cassette[] = [];
  chainRing: ChainRing[] = [];

  wheel: Wheel[] = [];
  info = {
    wheelTypeSpec: "There are multiple types of wheel diameters; for a more detailed list of your specific wheel go to: https://www.sheldonbrown.com/tire-sizing.html#decimal",
    wheelCalcSpec: "This is the circumference of the current wheel. It is the diameter of the wheel plus twice the tyre thickness multiplied by pi.",
    gearSpec: "This calculation is the distance that you will have travelled with one revolution of the crank. It is the circumference of the wheel multiplied by the ratio of the front chainring to the rear cassette.",
    gears: "This section will show the amount of travel for the individually selected gears.",
  };

  //Reactive Forms

  cadenceSelect = new FormControl(74);

  chainringSelect = new FormControl(1);
  FrontGEAR = new FormControl(0);

  cassetteSelection = new FormControl(2);
  RearGEAR = new FormControl(0);

  wheelSelection = new FormControl(1);
  tyreSelection = new FormControl(47);


  gearingSelection = new FormGroup({

    chainringID: this.chainringSelect,
    idFGear: this.FrontGEAR,

    cassetteID: this.cassetteSelection,
    idRGear: this.RearGEAR,

    wheelSize: this.wheelSelection,
    tyreSize: this.tyreSelection,
  });



  frontGears: { name: string, build: string, descript: string, gears: number[] }[] = [];
  rearGears: { name: { speed: string, descript: string }, gears: number[] }[] = [];



  //accessor functions

  tyrepicked(): number {
    return this.tyreSelection.value || 0;
  }

  wheelpicked(): number {
    return this.gearingSelection.value.wheelSize || 0;
  }

  frontID(): number {
    return this.gearingSelection.value.chainringID || 0;
  }

  frontGear(): number {
    return this.gearingSelection.value.idFGear || 0;
  }

  //rear fx's
  rearID(): number {
    return this.gearingSelection.value.cassetteID || 0;
  }

  rearGear(): number {
    return this.gearingSelection.value.idRGear || 0;
  }

  tyreCircumference() {
    // return value in metres
    return (Math.PI * (this.wheel[this.wheelpicked()].size + (2 * this.tyrepicked())) / 1000);
  }

  spinRatioReturn() {
    //console.log(this.frontGears[this.frontID()].gears[this.frontGear()] / this.rearGears[this.rearID()].gears[this.rearGear()]);
    return this.frontGears[this.frontID()].gears[this.frontGear()] / this.rearGears[this.rearID()].gears[this.rearGear()];
  }

  spinRatio(i: number, j: number) {
    return this.frontGears[this.frontID()].gears[i] / this.rearGears[this.rearID()].gears[j];
  }


  //dual array and loading into an array

  rg(i: number) {
    return this.rearGears[this.rearID()].gears[i];
  }

  fg(i: number) {
    return this.frontGears[this.frontID()].gears[i];
  }





  pullandchug() {
    this.datasource3 = [];

    let x = this.frontGears[this.frontID()].gears.length;
    let y = this.rearGears[this.rearID()].gears.length;

    for (let i = 0; i < x; i++) {
      for (let j = 0; j < y; j++) {

        let dist = this.truncDigits(((this.fg(i) / this.rg(j)) * this.tyreCircumference()), 3);

        let tempObj: spec_Sheet = {
          Front: { index: 0, tooth: 0 }, Rear: { index: 0, tooth: 0 }, ratio: 0
        };

        tempObj.Front.index = i + 1;
        tempObj.Front.tooth = this.fg(i);
        tempObj.Rear.index = j + 1;
        tempObj.Rear.tooth = this.rg(j);
        tempObj.ratio = dist;

        //put tempObj into dataSource0
        this.dataSource0.data.push(tempObj);
        this.datasource3.push(tempObj);
      }
    }
    /*

    console.log("this.dataSource0");
    console.log(this.dataSource0.filteredData);

    this.datasource3  = this.dataSource0.filteredData;
    
    console.log("Clear");
    console.log(this.datasource3);
    */
    //this.dataSource0.filteredData = [];
  }

  grabandchad() {
    this.compris = [];


    let tempObj: info_Sheet = {
      front: {
        name: this.frontGears[this.frontID()].name + " " + this.frontGears[this.frontID()].build,
        descript: this.frontGears[this.frontID()].descript,
        gears: this.frontGears[this.frontID()].gears,
      },
      rear: {
        name: this.rearGears[this.rearID()].name.speed,
        descript: this.rearGears[this.rearID()].name.descript,
        gears: this.rearGears[this.rearID()].gears,
      },
    }

    this.compris.push(tempObj);
  }

  compris: info_Sheet[] = [];
  comprisCols: string[] = ['Chainring', 'Cassette','Wheel'];

  dataSource0 = new MatTableDataSource<spec_Sheet>([]);
  dataSource0$ = of(this.dataSource0 || null);

  datasource3: spec_Sheet[] = [];
  displayedColumns0: string[] = ['gear', 'position', 'ratio','speed'];


  //form stuff

  //data services...
  appendIt(gear: number) {
    this.cassetteBridge.appendGearing(gear);
  }

  changeSpeed(nom: string) {
    this.cassetteBridge.appendSpeed(nom);
  }

  changeDescrip(nom: string) {
    this.cassetteBridge.appendDescript(nom);
  }

  modGears(place: number, size: number) {
    this.cassetteBridge.modSpecificGear(place, size);
  }

  modGears2(place: number, size: number) {
    this.cassetteBridge.modSpecificGear(place, size);
  }

  ///

  truncDigits(inputNumber: number, digits: number) {
    const fact = 10 ** digits;
    return Math.floor(inputNumber * fact) / fact;
  }

  ngOnInit() {
    console.log("init");
    this.cassette = this.cassetteBridge.getCassette();
    this.rearListIt = this.cassetteBridge.getCassette();
    this.rearGears = this.cassetteBridge.cassettes;
    this.frontGears = this.chainRingBridge.chainRings;
    this.wheel = this.wheelBridge.wheel;

    console.log("services loaded");

    this.pullandchug();
    this.grabandchad();
  }

  ngDoCheck() {
    this.pullandchug();
    this.grabandchad();
  }
}
