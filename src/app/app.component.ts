import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // Sidebar Open v Closed

  sideBar = {
    icon: "chevron_right",
    controlledBySystem: true,
    isChevronOpen: true,
  }

  tobeOpened() {
    if (this.sideBar.controlledBySystem == true) {

      if (window.innerWidth <= 944) {
        this.sideBar.isChevronOpen = false;
        this.chevronEdit(this.sideBar.isChevronOpen);
        return false;
      }

      if (window.innerWidth > 944) {
        this.sideBar.isChevronOpen = true;
        this.chevronEdit(this.sideBar.isChevronOpen);
        return true;
      }



      //telling the sidebar the it's a right point chveron
      else {
        this.sideBar.isChevronOpen = true;
        this.chevronEdit(this.sideBar.isChevronOpen);
        return true;
      }
    }
    else {
      return false;
    }
  }

  userControlled() {
    //the button icon take the form of the user controlled state
    return this.sideBar.isChevronOpen;
  }

  oneWay() {
    //sets the user controlled button to the opposite of the system state
    this.sideBar.controlledBySystem = false;

    this.sideBar.isChevronOpen = !this.sideBar.isChevronOpen;

    this.chevronEdit(this.sideBar.isChevronOpen);

    this.userControlled();

  }

  bunch() {

    //one time switch
    if (this.sideBar.controlledBySystem == true) {
      this.oneWay();
      return;
    }

    if (this.sideBar.controlledBySystem == false) {
      this.sideBar.isChevronOpen = !this.sideBar.isChevronOpen;
    }

    //controller to chevron icons
    this.chevronEdit(this.sideBar.isChevronOpen);

    //reads state and returns value to [opened]
    this.userControlled();
  }

  chevronEdit(alpha: boolean) {

    if (alpha == true) {
      this.sideBar.icon = "chevron_right";
    }

    if (alpha == false) {
      this.sideBar.icon = "chevron_left";
    }
  }


  do() {
    alert(
      window.innerWidth + " " + this.sideBar.controlledBySystem + " "  );
  }

  //  ============================
  // For changing color via input

  cssplayValue = "";

  // Dark Mode v Light Mode

  colourMode: string = "light_mode";

  colour(alpha: string) {
    this.colourMode = alpha;
  }

  // Scroll to bottom or top

  topORbottom = {
    isBottom: false,
    sidebarIcon: "expand_more",
    title: "Go to bottom of page",
  };

  chevronLogic() {
    this.goToPlace();
    this.topORbottom.isBottom = !this.topORbottom.isBottom;
    this.topBottomIconChange();
    this.iconPlacement();
  }

  topBottomIconChange() {
    if (this.topORbottom.isBottom == false) {
      this.topORbottom.sidebarIcon = "expand_more";
    }
    if (this.topORbottom.isBottom == true) {
      this.topORbottom.sidebarIcon = "expand_less";
    }
  }

  goToPlace() {
    if (this.topORbottom.isBottom == false) {
      window.scrollTo(0, document.body.scrollHeight);
    }
    if (this.topORbottom.isBottom == true) {
      window.scrollTo(0, 0);
    }
  }

  iconPlacement() {
    let toggleBottom = document.getElementById("toggleBottom");

    if (this.topORbottom.isBottom == false) {
      toggleBottom!.style.top = "5rem";

      toggleBottom!.title = "Go to bottom of page";
    }

    if (this.topORbottom.isBottom == true) {
      //toggleBottom!.style.bottom = "2.5rem";
      toggleBottom!.style.top = "90%";

      toggleBottom!.title = "Go to the top of page";
    }
  }
}
