// src/entities/user/api/index.ts
import axios from 'axios';

export const fetchInitialMember = async () => {
  const { data } = await axios.get('/api/member/get');
  return data;
};

export const fetchMyBooks = async (memberUuid: string) => {
  const { data } = await axios.get(`/api/owned/book/get?memberUuid=${memberUuid}`);
  return data;
};