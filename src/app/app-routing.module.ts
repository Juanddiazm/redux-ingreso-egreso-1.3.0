import { NgModule } from "@angular/core";

import { Routes, RouterModule } from "@angular/router";

import { DashboardComponent } from "./dashboard/dashboard.component";

import { dashboardRoutes } from "./dashboard/dashboard.routes";

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    children: dashboardRoutes,
  },
  { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
