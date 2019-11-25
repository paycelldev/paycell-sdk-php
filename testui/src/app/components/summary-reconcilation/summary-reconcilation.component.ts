import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SummaryReconciliationResponse } from 'src/app/models/sumarry-reconciliation-response';
import { PaycellSdkClientService } from 'src/app/services/paycell-sdk-client.service';

@Component({
  selector: 'app-summary-reconcilation',
  templateUrl: './summary-reconcilation.component.html',
  styleUrls: ['./summary-reconcilation.component.scss']
})
export class SummaryReconcilationComponent implements OnInit {

  form: FormGroup;
  response: SummaryReconciliationResponse;

  constructor (
    private formBuilder: FormBuilder,
    private paycellSdkClientService: PaycellSdkClientService,
  ) { }

  ngOnInit() {
    this.form = this.createSummaryReconciliationForm();
  }

  createSummaryReconciliationForm(): FormGroup {
    return this.form = this.formBuilder.group({
      reconciliationDate: [null, Validators.required],
      totalPostAuthAmount: [0, Validators.required],
      totalPostAuthCount: [0, Validators.required],
      totalPostAuthReverseAmount: [0, Validators.required],
      totalPostAuthReverseCount: [0, Validators.required],
      totalPreAuthAmount: [0, Validators.required],
      totalPreAuthCount: [0, Validators.required],
      totalPreAuthReverseAmount: [0, Validators.required],
      totalPreAuthReverseCount: [0, Validators.required],
      totalRefundAmount: [0, Validators.required],
      totalRefundCount: [0, Validators.required],
      totalReverseAmount: [0, Validators.required],
      totalReverseCount: [0, Validators.required],
      totalSaleAmount: [0, Validators.required],
      totalSaleCount: [0, Validators.required],
    });
  }

  async checkSummaryReconciliation() {
    if (this.form.valid) {
      this.response = await this.paycellSdkClientService.summaryReconciliation(this.form.value);
    }
  }

}
