import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { dogs } from '../../dogs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { interval } from 'rxjs';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})

export class ItemsComponent {

  constructor(
    private _snackBar: MatSnackBar,
    private router: Router,
  ) { }

  @Input() nomen: dogs[] = [];

  @Input() i: number = 0;

  extras: number = 0;

  //name:string="yellow";

  display() {
    // console.log(this.nomen[i].name);

    console.log(this.extras);
  }

  toShare: boolean = false;
  link: string = this.router.url;


  shareThem(): any {
    this.toShare = !this.toShare;

  }

  display2(alpha: any) {
    this.nomen[alpha].likes += 1;

    // this.extras+=1;
    //console.log(this.extras);
    console.log(this.nomen[alpha].likes);

  }


  opened: boolean = false;

  doTime() {

    this.opened = true,
      setTimeout(() => {
        this.opened = false;
        this.toShare = false;
      },
        2.5 * 1000);

  }
  //snackbar

  openSnackBar() {
    this._snackBar.open("Link copied successfully", "do", {
      panelClass: 'custom-css-class'
    });
  }
}
