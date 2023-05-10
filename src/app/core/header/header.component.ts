import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { startWith } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {

  //light mode v dark mode


  visual_mode: string = "light_mode";
  isNightTheme:boolean = false;


  vmSwitch() {
    this.isNightTheme = !this.isNightTheme;

    if (this.isNightTheme == false) {
      this.visual_mode = "light_mode";
    }

    if (this.isNightTheme == true) {
      this.visual_mode = "dark_mode";
    }
  }


  //export menu button functionality to side-nav in app.component
  @Output() headColour = new EventEmitter();

  actionDo() {
    this.headColour.emit(this.visual_mode);
    //alert("hello");
  }



  data = {
    choice: '',
    isOpened: true,
  }

  constructor(private route: Router) { }

  goNavi() {
    //alert(this.data.choice);
    this.route.navigate(['/', this.data.choice]);
  }

  //autocomplete
  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }
  myControl = new FormControl('');
  options: string[] = ['quotes', 'doggies', 'Three'];
  filteredOptions!: Observable<string[]>;

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }


  //export menu button functionality to side-nav in app.component
  @Output() upSend = new EventEmitter();

  action() {
    this.upSend.emit(this.data.isOpened);
    //alert(this.data.isOpened);
  }

toTop(){
      window.scrollTo(0, 0);
  }

}
