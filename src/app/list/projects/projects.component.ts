import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {


  constructor(private router: Router) { }

  onCardClick(alpha: any) {

    if (alpha == 1) {
      this.router.navigate(['/', 'doggies']);
    }

    if (alpha == 2) {
      this.router.navigate(['/', 'quotes']);
    }

    if (alpha == 3) {
      this.router.navigate(['/', 'bicycle']);
    }

    if (alpha == 4) {
      this.router.navigate(['/', 'wta']);
    }


  }

  //jump to #work

  third() {

    // document.querySelector("#work").scrollIntoView({ behavior: 'smooth' });
  }


  goToWork() {
    //window.scrollTo(0, document.body.getElementsByTagName("work"));
    document.getElementById("work")?.scrollIntoView();
  }

  changeName(){
    this.router.navigate(['/projects'], { fragment: 'work' });
  }


  goToRez(){
this.router.navigate([]).then(result => {  window.open('https://onedrive.live.com/view.aspx?resid=4045F23634346FAE!26498&ithint=file%2cdocx&authkey=!AGHQFZoWGW1R_P0', '_blank'); });
  }
}
