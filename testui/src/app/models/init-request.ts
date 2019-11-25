import { Payment } from './payment';

export interface InitRequest {
  hostAccount: String,
  language: String,
  payment: Payment,
  returnUrl: String,
  timeoutDuration: Number,
}