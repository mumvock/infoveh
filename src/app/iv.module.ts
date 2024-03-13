import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { IvRoutingModule } from './iv-routing.module';

import { IvComponent } from './iv.component';

@NgModule({
    declarations: [
        IvComponent
    ],
    imports: [
        BrowserModule,
        IvRoutingModule,
    ],
    providers: [],
    bootstrap: [IvComponent]
})
export class IvModule { }
