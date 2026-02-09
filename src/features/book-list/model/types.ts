// src/feature/book-list/model/types.ts
export interface UserInfo {
  name: string;
  balance: number;
}

export interface Book {
  id: number;
  title: string;
  price: number;
  status: 'market' | 'inventory';
}