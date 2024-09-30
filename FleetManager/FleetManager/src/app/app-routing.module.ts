import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { DriverComponent } from './driver/driver.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"drivers",component:DriverComponent},
  {path:"", redirectTo:"drivers",pathMatch:"full"},

  {path:'*',component:ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
