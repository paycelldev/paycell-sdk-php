import { ResponseHeader } from './response-header';

export interface RefundResponse {
  refundReferenceNumber: String;
  approvalCode: String;
  reconciliationDate: String;
  responseHeader: ResponseHeader;
  retryStatusCode: String;
  retryStatusDescription: String;
}