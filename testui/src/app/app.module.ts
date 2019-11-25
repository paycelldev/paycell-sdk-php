import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InitComponent } from './components/init/init.component';
import { AddInstallmentPlanComponent } from './components/add-installment-plan/add-installment-plan.component';
import { MatDialogModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatButtonModule, MatTableModule, MatSnackBarModule, MatDatepickerModule, MatSidenavModule, MatToolbarModule, MatListModule, MatIconModule, MatNativeDateModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { QueryComponent } from './components/query/query.component';
import { SummaryReconcilationComponent } from './components/summary-reconcilation/summary-reconcilation.component';
import { QueryEntryComponent } from './components/query-entry/query-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    InitComponent,
    AddInstallmentPlanComponent,
    QueryComponent,
    SummaryReconcilationComponent,
    QueryEntryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
  ],
  entryComponents: [
    AddInstallmentPlanComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
