import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { InstallmentPlan } from 'src/app/models/installment-plan';

@Component({
  selector: 'app-add-installment-plan',
  templateUrl: './add-installment-plan.component.html',
  styleUrls: ['./add-installment-plan.component.scss']
})
export class AddInstallmentPlanComponent implements OnInit {

  installmentPlanForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AddInstallmentPlanComponent>,
  ) {
  }

  ngOnInit() {
    this.installmentPlanForm = this.createInstallmentPlanForm();
  }

  createInstallmentPlanForm() {
    return this.formBuilder.group({
      paymentMethodType: ["CREDIT_CARD", Validators.required],
      cardBrand: ["BONUS", this.getValidatorRequiredIfPaymentMethodTypeIsCreditCard()],
      count: [1, Validators.required],
      amount: [100, Validators.required],
    })
  }

  getValidatorRequiredIfPaymentMethodTypeIsCreditCard(): (control: AbstractControl) => ValidationErrors {
    return (control: AbstractControl) => {
      if (this.installmentPlanForm && this.installmentPlanForm.value.paymentMethodType == "CREDIT_CARD" &&
        !control.value) {
        return { required: true };
      }
      return null;
    }
  }

  addInstallmentPlan() {
    if (this.installmentPlanForm.valid) {
      this.dialogRef.close(this.createInstallmentPlan());
    }
  }
  createInstallmentPlan(): InstallmentPlan {
    let installmentPlan: InstallmentPlan = this.installmentPlanForm.value;
    if (installmentPlan.paymentMethodType != "CREDIT_CARD") {
      installmentPlan.cardBrand = undefined;
    }
    return installmentPlan;
  }

  isCreditCard() {
    return this.installmentPlanForm && this.installmentPlanForm.value.paymentMethodType == "CREDIT_CARD"
  }

}
