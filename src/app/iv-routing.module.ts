import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const IV_ROUTES: Routes = [
    {
        path: 'vehicles',
        title: 'Vehicles',
        children: [
            {
                path: 'list',
                title: 'List',
                loadChildren: () =>
                    import('./pages/vehicles/vehicles.module').then(m => m.VehiclesModule)
            },
        ]
    },
];

@NgModule({
  imports: [RouterModule.forRoot(IV_ROUTES)],
  exports: [RouterModule]
})
export class IvRoutingModule { }
