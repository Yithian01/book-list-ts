import { create } from 'zustand';
import { fetchAllBooks } from '../api';
import type { Book } from './types';

interface BookStore {
  books: Book[];
  isLoading: boolean;
  initBooks: () => Promise<void>;
}

export const useBookStore = create<BookStore>((set) => ({
  books: [],
  isLoading: false,

  initBooks: async () => {
    set({ isLoading: true });
    try {
      const response = await fetchAllBooks();
      if (response.success) {
        set({ books: response.data });
      }
    } catch (error) {
      console.error("도서 목록 로딩 실패:", error);
    } finally {
      set({ isLoading: false });
    }
  },
}));