import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Cassette } from './../cassette';
import { CassetteService } from './../cassette.service';

import { ChainRing } from './../chain-ring';
import { ChainRingService } from './../chain-ring.service';


@Component({
  selector: 'app-pg1',
  templateUrl: './pg1.component.html',
  styleUrls: ['./pg1.component.scss']
})
export class Pg1Component {

  info = "Select whether you'd like metric or imperial";
  selectedRadio = 2;

  data = {
    front: 53,
    front2: 39,
    rear: 11,
    diameter: 0,
    width: 50,
    ratio: 0,
    distance: 0,
    conversion: 1,
  }

  log(alpha: any) {
    console.log(alpha);
  }

  spinRatio(): number {
    this.data.ratio = this.data.front / this.data.rear;
    return this.data.ratio;
  }

  //tyreLength(tyre: number, diameter:number) {
  tyreCircumference(): number {
    return (this.data.diameter + 2 * this.data.width) * Math.PI;

    //in real life, the tyre diameter  (part that is rubber), is roughly close enough to its actual height
  }

  calc() {

    this.data.distance = Math.round((this.spinRatio() * this.tyreCircumference())) / 1000;
  }

  show() {
    alert(this.data.front + " " + this.data.rear + " is the front & rear " + this.data.diameter + " is the diam.");
  }
  more() {
    alert(this.tyreCircumference() + " is the circumf..");
    //this.log(this.tyreCircumference());

  }

  //using a service for the rear cassette

  constructor(private cassetteBridge: CassetteService, private chainRingBridge: ChainRingService) { }

  cassette: Cassette[] = [];
  chainRing: ChainRing[] = [];

  rearListIt: any;

  ngOnInit() {
    //this.cassette = this.cassetteBridge.getCassette();

    //this.chainRing = this.chainRingBridge.getChainRing();

    this.rearGears = this.cassetteBridge.cassettes;

  }



  //data services...

  rearGears: { name: { speed: string, descript: string }, gears: number[] }[] = [];

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

  //Reactive Forms

  cycleForm = new FormGroup({

    speedForm: new FormControl("", { nonNullable: true }),
    detailsForm: new FormControl(""),
    position: new FormControl(0),
    size: new FormControl(49),
    front: new FormControl(53),
    rear: new FormControl(44),

  });

  formSumbit() {

    this.changeSpeed(this.cycleForm.value.speedForm || "");
    this.changeDescrip(this.cycleForm.value.detailsForm || "");
    this.modGears(this.cycleForm.value.position||0, this.cycleForm.value.size||0);

    //this.log(this.cycleForm.value);
    this.log(this.rearGears[0]);

  }

  //gear selection
  f = 0;
  r = 6;

  //practice with ngFor

  colors = ["red", "green", "blue"];
  frontGearsZ: number[] = [36, 42, 53];
  rearGearsZ = [25, 23, 21, 19, 17, 16, 15, 14, 13, 12, 11];
  rearGearsRay: number[] = [25, 23, 21, 19, 17, 16, 15, 14, 13, 12, 11];


}
