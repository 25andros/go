import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { interval } from 'rxjs';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent {

  constructor() { }


  items: string[] = [
    " 'Wisdom without wealth is almost a proverb.' - Calvin Coolidge",
    " 'There are no accidents in politics.' - Joseph P. Kennedy",
    " 'Make it work, make it right, make it fast.' - Fireship ",
    " 'Commerce is a game of skill, which few men can play well'- Rockerfeller",
    " 'History doesn't repeat itself but it does rhyme.' - Mark Twain ",
    " 'Facts do not cease to exist because they are ignored.' - Aldous Huxley ",
    " 'Ignorance and hoping is not a strategy. Education and action is.' - chez moi",
    " 'Failing to plan is planning to fail. - USMC",
    " 'What you concentrate on is what you win at.' - Dave Ramsey",
    " 'The things you own end up owning you' - Tyler Durden ",
    " 'Have you ever considered writing for Hallmark' - Mike Ross ",
    " 'Every man is the architect to his own destiny.' - Sallus ",
    " 'Education widens the focus, while training narrows it.' - Jacob Lund Fisker",
    " 'As iron sharpens iron, so one man sharpens another.' Proverbs 27:17 ",
    " 'Any man who reads too much and uses his own brain too little falls into lazy habits of thinking.' – Albert Einstein ",
    " 'When you think that someone else is going to cause you to be successful that is the moment you have signed your death warrant.' - Dave Ramsey",
    " 'Lay down with dogs, wake up with fleas.' - Benjamin Franklin",
  ];

  index: number = 0;
  currentItem: string = this.items[this.index];


  curView: string[] = ['a', 'b', 'c'
  ];

  quoteViewReload() {
    this.curView = [
      this.items[this.index],
      this.items[this.index + 1],
      this.items[this.index + 2],
    ];
  }

  goNext() {
    this.index += 1;
    if (this.index >= this.items.length) {
      this.index = 0;
    }
    this.quoteViewReload();
  }

  goPrev() {
    this.index -= 1;

    if (this.index < 0) {
      this.index = this.items.length - 1;
    }
    this.quoteViewReload();
  }

  freqSelection = new FormControl(2);

  timing = new FormGroup({
    freq: this.freqSelection,
  });


  rFreq(): any {
    return this.timing.value.freq;
  }


  // /*

  //Callback logic

  amount: number = 2;
  alive: boolean = false;
  autoChangeV2 = setTimeout(() => this.TIMER(), 2 * 1000);

  TIMER() {
    this.goNext();
    this.amount = this.rFreq();
    //console.log(this.amount);

    if (this.alive) {
      this.autoChangeV2 = setTimeout(() => this.TIMER(), this.amount * 1000);
    }
  }

  ngOnInit() {
    this.alive = true;
    this.quoteViewReload();
  }

  ngOnDestroy() {
    this.alive = false;
    console.log("Quotes page destroyed");
  }

  //*/


   /*

  //rxjs logic

  time: number = 2;
  secondsCounter = interval(this.rFreq() * 1000);

  action = this.secondsCounter.subscribe(() =>
    this.TIMER(),
  );


  TIMER() {
    this.goNext();
    this.time = this.timing.value.freq || 0;

    console.log("Timer");
    console.log(this.time);
    // this.secondsCounter = interval(this.time * 1000);
  }

  goRight() {

    console.log("right");
    this.action.unsubscribe();
    console.log("right");

    this.secondsCounter = interval(this.rFreq() * 1000);

    this.action = this.secondsCounter.subscribe(() =>
      this.TIMER(),
    );


  }

  goLeft() {


  }

  ngOnInit() {
    this.quoteViewReload();

  }

  ngOnDestroy() {

    this.action.unsubscribe();
    console.log("quote page cleaned.");
  }
   */

}


