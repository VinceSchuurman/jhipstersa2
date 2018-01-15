import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ngx-webstorage';

import { Jhipstersa2SharedModule, UserRouteAccessService } from './shared';
import { Jhipstersa2AppRoutingModule} from './app-routing.module';
import { Jhipstersa2HomeModule } from './home/home.module';
import { Jhipstersa2AdminModule } from './admin/admin.module';
import { Jhipstersa2AccountModule } from './account/account.module';
import { Jhipstersa2EntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        Jhipstersa2AppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        Jhipstersa2SharedModule,
        Jhipstersa2HomeModule,
        Jhipstersa2AdminModule,
        Jhipstersa2AccountModule,
        Jhipstersa2EntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class Jhipstersa2AppModule {}
