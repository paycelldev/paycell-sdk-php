import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitComponent } from './components/init/init.component';
import { QueryComponent } from './components/query/query.component';
import { SummaryReconcilationComponent } from './components/summary-reconcilation/summary-reconcilation.component';
import { QueryEntryComponent } from './components/query-entry/query-entry.component';

const routes: Routes = [
  { path: "", component: InitComponent },
  { path: "query", component: QueryEntryComponent },
  { path: "query/:paymentReferenceNumber", component: QueryComponent },
  { path: "summaryReconciliation", component: SummaryReconcilationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
