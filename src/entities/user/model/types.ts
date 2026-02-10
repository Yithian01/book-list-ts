// src/entities/user/model/types.ts
import type { OwnedBook } from '@/entities/book';

export type Gender = 'male' | 'female';

export interface User {
  uuid: string;
  name: string;
  balance: number;
  age: number;
  gender: Gender;
}

export interface UserState {
  user: User;
  myBooks: OwnedBook[]; 
  initUser: () => Promise<void>;
}