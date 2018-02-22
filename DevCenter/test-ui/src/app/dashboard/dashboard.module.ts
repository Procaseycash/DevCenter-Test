import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import {SidebarComponent} from './layout/sidebar/sidebar.component';
import { ArtBoardComponent } from './art-board/art-board.component';
import { BundlingComponent } from './bundling/bundling.component';
import { DashboardComponent } from './dashboard.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import { ChatBoxComponent } from './art-board/chat-box/chat-box.component';
import { BidLinksComponent } from './art-board/bid-links/bid-links.component';


@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgbModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ArtBoardComponent,
    BundlingComponent,
    DashboardComponent,
    ChatBoxComponent,
    BidLinksComponent,
  ]
})
export class DashboardModule { }
