import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AmbitionComponent } from './ambition.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { RouterModule, Routes } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';

const appRoutes: Routes = [
  {
      path        : 'store',
      component: AmbitionComponent
  },
  // {
  //     path        : 'pages',
  //     loadChildren: './main/pages/pages.module#PagesModule'
  // },
  {
      path      : '**',
      redirectTo: 'store'
  }
];

@NgModule({
  declarations: [AmbitionComponent],
  imports: [
    CommonModule,    
    RouterModule.forRoot(appRoutes),
    AngularMaterialModule,
    RouterModule,
    FlexLayoutModule
  ]
})
export class AmbitionModule { }
