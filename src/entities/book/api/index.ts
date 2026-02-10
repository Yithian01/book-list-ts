import axios from 'axios';
import type { ApiResponse } from '@/shared/api/types';
import type { Book } from '../model/types';

export const fetchAllBooks = async () => {
  const { data } = await axios.get<ApiResponse<Book[]>>('/api/book/get');
  return data;
};