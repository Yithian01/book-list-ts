// src/entities/user/model/types.ts
import type { Book, OwnedBook } from '@/entities/book';

export type Gender = 'male' | 'female';

export interface User {
  name: string;
  balance: number;
  age: number;
  gender: Gender;
}

export interface UserState {
  user: User;
  myBooks: OwnedBook[]; 
  updateBalance: (amount: number) => void;
  buyBook: (book: Book) => void; 
  sellBook: (instanceId: string) => void; 
}