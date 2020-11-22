import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NdaComponent } from './nda/nda.component';
import { RentagreementComponent } from './rentagreement/rentagreement.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { SenddocumentComponent } from './senddocument/senddocument.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';
import { ImportdocumentComponent } from './importdocument/importdocument.component';
@NgModule({
  declarations: [
    AppComponent,
    NdaComponent,
    RentagreementComponent,
    SenddocumentComponent,
    ImportdocumentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatSidenavModule,
    MatDialogModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
