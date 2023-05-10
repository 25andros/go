import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { CdkTableModule } from '@angular/cdk/table';
 import {MatSnackBarModule} from '@angular/material/snack-bar'; 
 import {ClipboardModule} from '@angular/cdk/clipboard'; 

const MaterialComponents = [
  CommonModule,
  FormsModule,

  MatButtonModule,
  MatSlideToggleModule,
  MatToolbarModule,
  MatCardModule,
  MatIconModule,
  MatMenuModule,
  MatSidenavModule,
  MatProgressBarModule,
  MatDividerModule,
  MatAutocompleteModule,
  MatFormFieldModule,
  MatInputModule,
  MatExpansionModule,
  MatDatepickerModule,
  MatListModule,
  MatRadioModule,
  MatTabsModule,
  MatSelectModule,
  MatTableModule,
  CdkTableModule,
  MatSnackBarModule,
  ClipboardModule,

];


@NgModule({
  declarations: [],
  imports: [
    MaterialComponents,
  ],
  exports: [
    MaterialComponents,
  ]
})
export class MaterialModule { }
