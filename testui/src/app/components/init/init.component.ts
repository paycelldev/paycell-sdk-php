import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { InstallmentPlan } from 'src/app/models/installment-plan';
import { MatDialog, MatTableDataSource } from "@angular/material";
import { AddInstallmentPlanComponent } from '../add-installment-plan/add-installment-plan.component';
import { PaycellSdkClientService } from 'src/app/services/paycell-sdk-client.service';
import { InitRequest } from 'src/app/models/init-request';
import * as moment from 'moment'
import { InitResponse } from 'src/app/models/init-response';

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.scss']
})
export class InitComponent implements OnInit {

  initForm: FormGroup;
  dataSource: MatTableDataSource<any>;
  installmentPlans: InstallmentPlan[] = [];

  displayedColumns: String[] = [
    "paymentMethodType",
    "cardBrand",
    "count",
    "amount",
    "actions",
  ]

  constructor(
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
    private paycellSdkClient: PaycellSdkClientService,
  ) { }

  ngOnInit() {
    this.initForm = this.createInitForm();
    this.configureInstallmentPlans()
  }

  createInitForm(): FormGroup {
    return this.formBuilder.group({
      hostAccount: ["xxxxxx@xxxx.com", Validators.required],
      language: ["tr", Validators.required],
      payment: this.createPaymentForm(),
      returnUrl: ["http://localhost:4200/query/[paymentReferenceNumber]", null],
      postResultUrl: [undefined, null],
    })
  }

  configureInstallmentPlans() {
    this.dataSource = new MatTableDataSource(this.installmentPlans);
  }

  createPaymentForm() {
    return this.formBuilder.group({
      amount: ["100", Validators.required],
      currency: ["99", Validators.required],
      paymentSecurity: ["NON_THREED_SECURE", Validators.required],
      installmentPlan: [this.installmentPlans, this.getInstallmentPlanValidator()],
    });
  }

  getInstallmentPlanValidator() {
    return (control: FormControl) => {
      if (this.installmentPlans.length == 0) {
        return {
          empty: true,
        }
      }
      return null;
    }
  }

  createInstallmentPlan() {
    this.dialog.open(AddInstallmentPlanComponent).afterClosed().subscribe((installmentPlan: InstallmentPlan) => {
      this.installmentPlans.push(installmentPlan)
      this.processInstallmentPlans();
      this.configureInstallmentPlans();
    })
  }

  removeInstallmentPlan(installmentPlan: InstallmentPlan) {
    this.installmentPlans.splice(
      this.installmentPlans.indexOf(installmentPlan), 1);
    this.processInstallmentPlans();
    this.configureInstallmentPlans();
  }

  async sendPayment() {
    let request: InitRequest = this.initForm.value;;
    let paymentWindow: Window = window.open("_blank", "_blank");
    let initResponse: InitResponse = await this.paycellSdkClient.init(request);
    if (initResponse && initResponse.statusCode == "0") {
      let trackingUrl: string = this.paycellSdkClient.getTrackingUrl(initResponse.trackingId.toString());
      paymentWindow.location.href = trackingUrl;
    } else if (initResponse) {
      alert(initResponse.message)
    } else {
      alert("init service response is null!");
    }
  }

  processInstallmentPlans() {
    for (let index: number = 0; index < this.installmentPlans.length; index++) {
      let installmentPlan: InstallmentPlan = this.installmentPlans[index];
      installmentPlan.lineId = "" + (index + 1);
      installmentPlan.amount = "" + installmentPlan.amount;
      installmentPlan.count = "" + installmentPlan.count;
    }
  }

}
