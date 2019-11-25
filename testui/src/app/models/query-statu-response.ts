export interface QueryStatuResponse {
  status?: String,
  statusExplanation?: String,
  paymentReferenceNumber?: String,
  msisdn?: String,
  amount?: Number,
  currency?: String,
  installmentCount?: Number,
  paymentMethod?: PaymentMethod,
  paymentSecurity?: String,
  paymentDate?: String,
  reconcilationDate?: String,
  merchantId?: String,
  terminalId?: String,
  orderId?: String,
  acquirerbankCode?: String,
  issuerBankCode?: String,
  approvalCode?: String,
}

export interface PaymentMethod {
  paymentMethodId: String,
  paymentMethodNumber: String,
  paymentMethodType: String,
}