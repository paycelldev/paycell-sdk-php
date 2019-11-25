import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { PaycellSdkClientService } from 'src/app/services/paycell-sdk-client.service';
import { QueryStatuResponse } from 'src/app/models/query-statu-response';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReverseResponse } from 'src/app/models/reverse-response';
import { MatSnackBar } from '@angular/material';
import { RefundResponse } from 'src/app/models/refund-response';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.scss']
})
export class QueryComponent implements OnInit {

  queryStatu: QueryStatuResponse = {};
  refundForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private paycellSdkClientService: PaycellSdkClientService,
    private formBuilder: FormBuilder,
    private matSnackBar: MatSnackBar,
  ) {
    this.refundForm = this.formBuilder.group({
      amount: [null, Validators.required],
    })
  }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      let paymentReferenceNumber: string = paramMap.get("paymentReferenceNumber");
      this.query(paymentReferenceNumber);
    })
  }

  async query(paymentReferenceNumber: string) {
    this.queryStatu = await this.paycellSdkClientService.queryStatu({
      originalPaymentReferenceNumber: paymentReferenceNumber
    });
  }

  async reverse() {
    let reverseResponse: ReverseResponse = await this.paycellSdkClientService.reverse({
      originalReferenceNumber: this.queryStatu.paymentReferenceNumber
    });
    if (reverseResponse && reverseResponse.responseHeader
      && reverseResponse.responseHeader.responseCode == "0") {
      this.matSnackBar.open("Reverse is success", "OK");
      this.query(this.queryStatu.paymentReferenceNumber.toString());
    }
  }

  async refund() {
    let refundResponse: RefundResponse = await this.paycellSdkClientService.refund({
      originalReferenceNumber: this.queryStatu.paymentReferenceNumber,
      amount: this.refundForm.value.amount,
    });
    if (refundResponse && refundResponse.responseHeader
      && refundResponse.responseHeader.responseCode == "0") {
      this.matSnackBar.open("Refund is success", "OK");
      this.query(this.queryStatu.paymentReferenceNumber.toString());
    }
  }


}
