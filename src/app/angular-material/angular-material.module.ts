import { NgModule } from '@angular/core';


import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule, MatSidenavModule, MatIconModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatDialogModule, MatExpansionModule, MatOptionModule, MatSelectModule, MatDatepickerModule, MatMenuModule, MatRippleModule, MatDividerModule, MatGridListModule, MatTableModule, MatPaginatorModule, MatCardModule, MatStepperModule} from '@angular/material/';
import { ShellComponent } from './shell/shell.component';
import { CommonModule } from '@angular/common';

const MaterialModules = [
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
  MatOptionModule,
  CommonModule
];

const components =[ShellComponent];

@NgModule({
  declarations: [...components],
  imports: [
    ...MaterialModules   
  ],
  exports: [
    ...MaterialModules,
    ...components
  ]
})
export class AngularMaterialModule { }
