// entities/book/model/types.ts
export type Genre = 
  'Fantasy' |
  'Romance' | 
  'Science' | 
  'IT' | 
  'History';

/**
 * 책장에 있는 책 요소
 */
export interface Book {
  id: string;
  title: string;
  description: string;
  price: number;
  genre: Genre;
}

/**
 * 유저의 인벤토리에 들어간 도서 타입 (인스턴스)
 */
export interface OwnedBook extends Book {
  instanceId: string;    // 개별 도서를 식별하는 고유 UUID
  purchasedAt: number;   // 구매 시각 (정렬 등에 사용)
  lastReadAt?: number;   // 확장성: 마지막으로 읽은 시각
}