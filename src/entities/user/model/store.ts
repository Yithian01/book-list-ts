// src/entities/user/model/store.ts
import { create } from 'zustand';
import type { OwnedBook } from '@/entities/book';
import type { UserState } from '@/entities/user';

export const useUserStore = create<UserState>((set) => ({
  user: { name: '홍길동', balance: 1000000, age: 25, gender: 'male' },
  myBooks: [],
  
  updateBalance: (amount) => set((state) => ({
    user: { ...state.user, balance: state.user.balance + amount }
  })),
  
  buyBook: (book) => set((state) => {
    const newBook: OwnedBook = {
      ...book,
      instanceId: crypto.randomUUID(),
      purchasedAt: Date.now(),
    };
    return {
      user: { ...state.user, balance: state.user.balance - book.price },
      myBooks: [...state.myBooks, newBook]
    };
  }),

  sellBook: (instanceId) => set((state) => {
    const bookToSell = state.myBooks.find(b => b.instanceId === instanceId);
    if (!bookToSell) return state; // 변경 사항 없음(현재 상태 그대로 유지)

    return {
      user: { ...state.user, balance: state.user.balance + bookToSell.price },
      myBooks: state.myBooks.filter(b => b.instanceId !== instanceId)
    };
  }),
}));