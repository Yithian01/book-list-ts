// src/entities/user/api/index.ts
import axios from 'axios';

export const fetchInitialMember = async () => {
  const { data } = await axios.get('/api/member/get');
  return data;
};