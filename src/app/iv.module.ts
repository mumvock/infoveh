import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { IvRoutingModule } from './iv-routing.module';
import { LoaderModule } from './loader/loader.module';

import { IvComponent } from './iv.component';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
    declarations: [
        IvComponent,
    ],
    imports: [
        BrowserModule,
        IvRoutingModule,
        LoaderModule,
        NavComponent,
    ],
    providers: [],
    bootstrap: [IvComponent]
})
export class IvModule { }
