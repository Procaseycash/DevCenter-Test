import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';


import {DashboardComponent} from './dashboard.component';
import {ArtBoardComponent} from './art-board/art-board.component';
import {BundlingComponent} from './bundling/bundling.component';


const DASHBOARD_ROUTES: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      {path: '', component: ArtBoardComponent},
      {path: 'bundling', component: BundlingComponent},
    ]
  },


];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(DASHBOARD_ROUTES)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class DashboardRoutingModule {
}
