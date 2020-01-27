import { NgModule } from '@angular/core';


import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule, MatSidenavModule, MatIconModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatDialogModule, MatExpansionModule, MatOptionModule, MatSelectModule, MatDatepickerModule, MatMenuModule, MatRippleModule, MatDividerModule, MatGridListModule, MatTableModule, MatPaginatorModule, MatCardModule, MatStepperModule} from '@angular/material/';

const MaterialComponents = [
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  MatExpansionModule,
  MatIconModule,
  MatOptionModule,
  MatSelectModule,
  MatDatepickerModule,
  MatMenuModule,
  MatRippleModule,
  MatDividerModule,
  MatGridListModule,
  MatTableModule,
  MatPaginatorModule,
  MatCardModule,
  MatToolbarModule,
  MatStepperModule,
  MatOptionModule
];

@NgModule({
  declarations: [],
  imports: [
    MaterialComponents   
  ],
  exports: [
    MaterialComponents
  ]
})
export class AngularMaterialModule { }
