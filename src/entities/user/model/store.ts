// src/entities/user/model/store.ts
import { create } from 'zustand';
import type { UserState } from '@/entities/user';
import { fetchInitialMember, fetchMyBooks } from '../api';

export const useUserStore = create<UserState>((set) => ({
  user: { uuid: '', name: '', balance: 0, age: 0, gender: 'male' },
  myBooks: [],

  initUser: async () => {
    try {
      const userRes = await fetchInitialMember(); 
      
      if (userRes.success) {
        // 2. 해당 유저의 소유 도서 목록 가져오기
        const booksRes = await fetchMyBooks(userRes.data.uuid); 
        
        // 3. 유저 정보와 책 목록을 동시에 업데이트!
        set({ 
          user: userRes.data,
          myBooks: booksRes.success ? booksRes.data : [] 
        }); 
        
        console.log("통합 데이터 초기화 완료");
      }
    } catch (error) {
      console.error("초기화 에러:", error);
    }
  }
}));