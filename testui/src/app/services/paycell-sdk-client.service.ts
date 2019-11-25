import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InitRequest } from '../models/init-request';
import { InitResponse } from '../models/init-response';
import { QueryStatuRequest } from '../models/query-statu-request';
import { QueryStatuResponse } from '../models/query-statu-response';
import { ReverseRequest } from '../models/reverse-request';
import { ReverseResponse } from '../models/reverse-response';
import { RefundRequest } from '../models/refund-request';
import { RefundResponse } from '../models/refund-response';
import { SummaryReconciliationRequest } from '../models/summary-reconciliation-request';
import { SummaryReconciliationResponse } from '../models/sumarry-reconciliation-response';

@Injectable({
  providedIn: 'root'
})
export class PaycellSdkClientService {

  public static initEndpoint: string = "http://localhost:8000/services/init.php";
  public static reverseEndpoint: string = "http://localhost:8000/services/reverse.php"
  public static refundEndpoint: string = "http://localhost:8000/services/refund.php"
  public static summaryReconcilaitonEndpoint: string = "http://localhost:8000/services/summaryReconciliation.php"
  public static queryStatuEndpoint: string = "http://localhost:8000/services/queryStatu.php";
  public static trackingUrlTemplate: string = "https://websdktest.turkcell.com.tr/home/[trackingId]";

  constructor(
    private httpClient: HttpClient
  ) { }

  async init(request: InitRequest): Promise<InitResponse> {
    return await this.httpClient.post(PaycellSdkClientService.initEndpoint, request).toPromise<any>();
  }

  async queryStatu(request: QueryStatuRequest): Promise<QueryStatuResponse> {
    return await this.httpClient.post(PaycellSdkClientService.queryStatuEndpoint, request).toPromise<any>();
  }

  async reverse(request: ReverseRequest): Promise<ReverseResponse> {
    return await this.httpClient.post(PaycellSdkClientService.reverseEndpoint, request).toPromise<any>();
  }
  async refund(request: RefundRequest): Promise<RefundResponse> {
    return await this.httpClient.post(PaycellSdkClientService.refundEndpoint, request).toPromise<any>();
  }
  async summaryReconciliation(request: SummaryReconciliationRequest): Promise<SummaryReconciliationResponse> {
    return await this.httpClient.post(PaycellSdkClientService.summaryReconcilaitonEndpoint, request).toPromise<any>();
  }

  getTrackingUrl(trackingId: string) {
    return PaycellSdkClientService.trackingUrlTemplate.replace("[trackingId]", trackingId);
  }
}
