import { InstallmentPlan } from './installment-plan';

export interface Payment {
  amount: Number,
  currency: String,
  paymentSecurity: String,
  installmentPlan?: InstallmentPlan,
}