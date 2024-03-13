import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const IV_ROUTES: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(IV_ROUTES)],
  exports: [RouterModule]
})
export class IvRoutingModule { }
