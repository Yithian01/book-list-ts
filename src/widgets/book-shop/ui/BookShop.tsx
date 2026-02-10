import { useEffect } from 'react';
import { BookCard, useBookStore } from '@/entities/book';
import { PurchaseButton } from '@/features/purchase-book';

export const BookShop = () => {
  const { books, isLoading, initBooks } = useBookStore();

  useEffect(() => {
    initBooks();
  }, [initBooks]);

  if (isLoading) return <div>📚 도서 목록을 불러오는 중...</div>;

  return (
    <section style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h2>🏪 도서 상점</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {books.length > 0 ? (
          books.map((book) => (
            <BookCard 
              key={book.id} 
              book={book} 
              actions={<PurchaseButton book={book} />} 
            />
          ))
        ) : (
          <p>현재 판매 중인 도서가 없습니다.</p>
        )}
      </div>
    </section>
  );
};