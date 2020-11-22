import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImportdocumentComponent } from './importdocument/importdocument.component';
import { NdaComponent } from './nda/nda.component';
import { RentagreementComponent } from './rentagreement/rentagreement.component';


const routes: Routes = [
  {path:'home',component:NdaComponent}, 
  {path:'rent',component:RentagreementComponent}, 
  {path:'rentagree',component:ImportdocumentComponent}, 
  {path:'',component:NdaComponent}, 
  {path:'**',component:NdaComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
