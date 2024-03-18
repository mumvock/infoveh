import { NgModule } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

import { VehiclesRoutingModule } from './vehicles-routing.module';
import { VehiclesComponent } from './vehicles.component';
import { ButtonComponent } from './../../components/button/button.component';

@NgModule({
    declarations: [
        VehiclesComponent,
    ],
    imports: [
        NgIf,
        NgFor,
        VehiclesRoutingModule,
        ButtonComponent
    ]
})
export class VehiclesModule { }
