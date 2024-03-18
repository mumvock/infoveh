import { NgModule } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

import { VehiclesRoutingModule } from './vehicles-routing.module';
import { VehiclesComponent } from './vehicles.component';
import { ButtonComponent } from './../../components/button/button.component';
import VehiclesService from './services/vehicles.service';

@NgModule({
    declarations: [
        VehiclesComponent,
    ],
    imports: [
        NgIf,
        NgFor,
        VehiclesRoutingModule,
        ButtonComponent
    ],
    providers: [VehiclesService]
})
export class VehiclesModule { }
