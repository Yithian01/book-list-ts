import { useState } from 'react';
import type { Book, UserInfo } from '../model/types';

export const useBookAction = (initialBooks: Book[], initialUser: UserInfo) => {
  const [books, setBooks] = useState<Book[]>(initialBooks);
  const [user, setUser] = useState<UserInfo>(initialUser);

  // 책 구매하기 (가져가기)
  const purchaseBook = (bookId: number) => {
    const targetBook = books.find(b => b.id === bookId);
    
    if (!targetBook) return;
    if (user.balance < targetBook.price) {
      alert("잔액이 부족합니다!");
      return;
    }

    // 금액 차감 및 상태 변경
    setUser(prev => ({ ...prev, balance: prev.balance - targetBook.price }));
    setBooks(prev => prev.map(b => 
      b.id === bookId ? { ...b, status: 'inventory' } : b
    ));
  };

    // 책 팔기 (돈을 돌려받고 마켓으로 이동)
    const sellBook = (bookId: number) => {
    const targetBook = books.find(b => b.id === bookId);
    if (!targetBook) return;

    // 금액의 80%만 돌려받는다고 가정해봅시다 (수수료!)
    const refundAmount = Math.floor(targetBook.price * 0.8);

    setUser(prev => ({ ...prev, balance: prev.balance + refundAmount }));
    setBooks(prev => prev.map(b => 
        b.id === bookId ? { ...b, status: 'market' } : b
    ));
    };

    return { books, user, purchaseBook, sellBook }; // sellBook을 밖으로 내보내줍니다
};