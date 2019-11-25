import { ResponseHeader } from './response-header';

export interface ReverseResponse {
  reverseReferenceNumber: String;
  approvalCode: String;
  reconciliationDate: String;
  responseHeader: ResponseHeader;
  retryStatusCode: String;
  retryStatusDescription: String;
}