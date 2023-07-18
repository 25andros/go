import { Component } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import * as d3 from 'd3';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-wta',
  templateUrl: './wta.component.html',
  styleUrls: ['./wta.component.scss']
})
export class WtaComponent {

  unsubscribe$ = new Subject<void>();
  panelOpenState = false;

  constructor(private _fb: FormBuilder,   )  {  }

  //Form Builder
  sliderSelection = this._fb.group({
    radius:180,
    leftWheel: 105,
    rightWheel: 125,
    spokeQt: 5,
    scaleConv:1.25,

    spokeDia: 2,
    readRight:25,
    readLeft:23,
    innerCircle:25,
    outerCircle:180,
    canvas:375,

    a:120,
    b:25,
  } );

  radius(){ return this.sliderSelection.value.radius}
  lWheel(){ return this.sliderSelection.value.leftWheel||100}
  rWheel(){ return this.sliderSelection.value.rightWheel||100}
  spokeCount(){ return this.sliderSelection.value.spokeQt||122}

  spokeDia(){ return this.sliderSelection.value.spokeDia||0}
  readLeft(){return this.sliderSelection.value.readLeft||0}
  readRight(){return this.sliderSelection.value.readRight||0}

  innerCircle(){return this.sliderSelection.value.innerCircle}
  outerCircle(){return this.sliderSelection.value.outerCircle||180}
  canvas() {return this.sliderSelection.value.canvas||375}
  getA(){return this.sliderSelection.value.a||0}
  getB(){return this.sliderSelection.value.b||0}

  
  testTab=0;
  widthPrint=this.canvas();
  heightPrint=this.canvas();
  centreX=this.widthPrint/2;
  centreY=this.heightPrint/2;
  circleRadius=50;

  rWheelDraw=180;
  lWheelDraw=100;
  alfa=this.centreX;
  bet=this.centreY;
  offset= 360/this.spokeCount();

  svg:any;
  svgCirc:any;

  // stream of D3 drawings

  baseline$=this.sliderSelection.statusChanges
  .pipe(takeUntil(this.unsubscribe$))
  .subscribe((x)=>{
      //d3.selectAll('circle#rxjsCirc').remove();

      d3.selectAll('circle').remove();
      this.createCirBaselines();

      d3.selectAll('spokeLines').remove();
      this.linesMake();

      d3.selectAll('polygon').remove();
      //this.makepolyGon();


      this.clearForm()
      this.buildForm()
      this.genUserWheel(this.rtWheelL(),'orange')
      this.genUserWheel(this.rtWheelR(),'blue')
  });

  //lifecycle hooks
  ngOnInit(): void {
    this.buildForm()
    this.makeCanvas()
    this.createCirBaselines(); //backdrop circles
    this.linesMake();

   this.genUserWheel(this.rtWheelL(),'orange')
   this.genUserWheel(this.rtWheelR(),'blue')
  }

  ngOnDestroy(){
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  rebuildCanvas(){
      d3.selectAll('drawingPad').remove()
      this.makeCanvas()
  }

  makeCanvas(){
    this.svg= d3
    .select('figure#pad')
    .append('svg')
    .attr('width',this.widthPrint)
    .attr('height',this.heightPrint)
    .attr('id','drawingPad')
    ;
  }

  //creates Min && Max for the polygon ranges
  createCirBaselines():void{
    this.svg
    .append('circle')
    .attr('cx', this.centreX)
    .attr('cy', this.centreY)
    .attr('r',this.outerCircle())
    .attr('fill','none')
    .attr('id','maxCirc')
    .style("stroke", "black")
    .attr('stroke-width',1)
    ;

    this.svg
    .append('circle')
    .attr('cx', this.centreX)
    .attr('cy', this.centreY)
    .attr('r',this.innerCircle())
    .attr('fill','none')
    .attr('id','minCirc')
    .style("stroke", "black")
    .attr('stroke-width',1)
    ;

  }

  //---black --spokes- ---//

  iterDataR=Array({});

  gety(degree:number,length:number):number{
    //rads = degree*Math.PI/180;
    return  Math.sin(degree*Math.PI/180)*length;
  }

  getx(degree:number,length:number){
    return  Math.cos(degree*Math.PI/180)*length;
  }

  //initialises iterDataR with the x,y co-ords for the spokes
  initRay(){
    this.iterDataR= Array(this.spokeCount()).fill({}).map((x,i)=>
x={
  x1:this.alfa,
  y1:this.bet,
  x2:this.getx(360/this.spokeCount()*i,this.outerCircle())+this.alfa,
  y2:this.gety(360/this.spokeCount()*i,this.outerCircle())+this.bet}
 );
}

//black spoke backdrop
  linesMake(){
      this.initRay()

    this.svg
    .selectAll('line')
    .data(this.iterDataR)
    .join('line')
    .attr('x1',function(d:any) {return d.x1})
    .attr('x2',function(d:any) {return d.x2})
    .attr('y1',function(d:any) {return d.y1})
    .attr('y2',function(d:any) {return d.y2})
    .attr('stroke','black')
    .attr('stroke-width',1)
    .attr('spokeLines')
    ;

  }
 // Measurement portion of application

      dynamic = this._fb.group({
        numOfSpokes:this._fb.array([ ]),
        spokesRight:this._fb.array([ ])
      })

      //factory fx's
      rtWheelL(){ return this.dynamic.value.numOfSpokes||0}
      rtWheelR(){ return this.dynamic.value.spokesRight}

    get spokeQt(){ return this.dynamic.get('numOfSpokes') as FormArray }
    get rSpokeQt(){ return this.dynamic.get('spokesRight') as FormArray }

    buildForm(){
      for(let i=0;i<this.spokeCount();i++){
        this.iterateFormSpoke()
      }
    }

    iterateFormSpoke(){
      this.spokeQt.push(this._fb.group({i:this.lWheel()}))
      this.rSpokeQt.push(this._fb.group({i:this.rWheel()}))
    }

    clearForm(){
      this.spokeQt.clear()
      this.rSpokeQt.clear()
    }

    // un-used
    addSpoke(){ this.spokeQt.push(
      this._fb.group({i:this.lWheel})
    )}

    rmSpoke(index:any){
      this.spokeQt.removeAt(index)
}

// ------
  obj2polyPass(alpha:{ x:number; y:number}[]){

    const xCor=alpha.map(x=>x.x);
    const  yCor=alpha.map(x=>x.y);
    return Array(alpha.length).fill({}).map((x,i)=>x=xCor[i]+","+yCor[i]).join(" ");
  }


  genUserWheel(side:any,color:string){
    const ray=Array(this.spokeCount()).fill({})
    .map((x,i)=>side[i].i)
    .map((x,i)=>
         {
           const degr =  this.degToRad(360/this.spokeCount()*i)
           return {x:Math.cos(degr)*x+this.centreX,y:Math.sin(degr)*x+this.centreY}
         })
         //console.log(ray)
         const pts =this.obj2polyPass(ray)

    this.svg
    .append("polygon")
    //.attr("points", "75,75 100,10 125,75 100,125")
    .attr("points", pts)
    .style("fill", "none")
    .style("stroke", color)
    .style("stroke-width", 4)
    .attr('id',color)
    //.attr('id','genWheels#'+color)
    ;
    console.log
  }

  degToRad(degrees:number) {
    return degrees * (Math.PI / 180);
}

  delWheel(color:string){
    d3.select(`polygon#${color}`).remove()
    //d3.selectAll('polygon#genWheels').remove()
  }

  //derived with linear regression
 Tsn_to_tm1(tension:number):number{
   const z= tension
   const x= this.spokeDia()

   // the followed is a modelled equation of spoke diameter to tenison
   const a = (.000934*Math.pow(x,4)+-.00775*Math.pow(x,3)+.02379*Math.pow(x,2)+-.03174*Math.pow(x,1)+.0148)
   const b = (-.2345*Math.pow(x,4)+1.928*Math.pow(x,3)+-5.8596*Math.pow(x,2)+7.728*Math.pow(x,1)+-3.484)
   const c = (11.118*Math.pow(x,4)+-91.6978*Math.pow(x,3)+279.86*Math.pow(x,2)+-356.004*Math.pow(x,1)+156.045)

   let y = a*Math.pow(z||0,2)+b*Math.pow(z||0,1)+c
    y=Number(y.toPrecision(4))
   return y
 }


tm1_to_Tsn(reading:number):number{
   const z= reading
   const x= this.spokeDia()

   const a = (.7992*Math.pow(x,4)+-6.39*Math.pow(x,3)+18.994*Math.pow(x,2)+-24.588*Math.pow(x,1)+12.2791)
   const b = (-52.4527*Math.pow(x,4)+415.366*Math.pow(x,3)+-1227.4839*Math.pow(x,2)+1572.1551*Math.pow(x,1)+-741.1742)
   const c = (671.58908*Math.pow(x,4)+-5183.7605*Math.pow(x,3)+15106.849*Math.pow(x,2)+-19308.309*Math.pow(x,1)+9146.7)


      let y = a*Math.pow(z,2)+b*Math.pow(z,1)+c
    y=Number(y.toPrecision(4))
    console.log(y)
   return y

}

convRead2Tsn(){
    this.tm1_to_Tsn(this.readRight())
    this.tm1_to_Tsn(this.readLeft())
}

str2num(alf:string):number{
    return Number(alf)
}

//conversion table


}

  //---- Polygon orange and blue ---///

  /*
  polyLeft:{ x:number; y:number}[]= [
  ];

  polyRight:{ x:number; y:number}[]= [
  ];

  makepolyGon(){
    this.polyLeft=Array(this.spokeCount()).fill({}).map((x,i)=>
        x={
          x:this.getx(360/this.spokeCount()*i,this.polyL())+this.centreX,
          y:this.gety(360/this.spokeCount()*i,this.polyL())+this.centreY
        }
);
    this.polyRight=Array(this.spokeCount()).fill({}).map((x,i)=>
        x={
          x:this.getx(360/this.spokeCount()*i,this.polyR())+this.centreX,
          y:this.gety(360/this.spokeCount()*i,this.polyR())+this.centreY
        }
);

    this.svg
    .append("polygon")
    .attr("points", this.obj2polyPass(this.polyLeft))
    .style("fill", "none")
    .style("stroke", "orange")
    .style("stroke-width", 4)
    ;

    this.svg
    .append("polygon")
    .attr("points", this.obj2polyPass(this.polyRight))
    .style("fill", "none")
    .style("stroke", "blue")
    .style("stroke-width", 4)
    ;
  }
  */



