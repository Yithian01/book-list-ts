import axios from 'axios';
import type { ApiResponse } from '@/shared/api/types';

export interface SellRequest {
  memberUuid: string;
  bookUuid: string;
}

export const sellBookApi = async (request: SellRequest) => {
  const { data } = await axios.post<ApiResponse<string>>(
    'http://localhost:8080/api/owned/book/sell', request
  );
  return data;
};