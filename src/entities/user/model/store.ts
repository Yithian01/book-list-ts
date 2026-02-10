// src/entities/user/model/store.ts
import { create } from 'zustand';
import type { OwnedBook } from '@/entities/book';
import type { UserState } from '@/entities/user';
import { fetchInitialMember } from '../api';

export const useUserStore = create<UserState>((set) => ({
  user: { uuid: '', name: '', balance: 0, age: 0, gender: 'male' },
  myBooks: [],

  initUser: async () => {
    try {
      const response = await fetchInitialMember(); 
      
      if (response.success) {
        set({ user: response.data }); 
        console.log("유저 정보 초기화 성공:", response.data);
      }
    } catch (error) {
      console.error("유저 정보를 불러오는 중 에러 발생:", error);
    }
  },
  
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