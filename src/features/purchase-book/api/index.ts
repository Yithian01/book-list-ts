import axios from 'axios';
import type { ApiResponse } from '@/shared/api/types';

export interface PurchaseRequest {
  memberUuid: string;
  bookUuid: string;
}

export const purchaseBookApi = async (request: PurchaseRequest) => {
  const { data } = await axios.post<ApiResponse<string>>(
    '/api/owned/book/purchase', 
    request
  );
  return data;
};