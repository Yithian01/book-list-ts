import { BookCard } from './../../../entities/book';
import { PurchaseButton } from './../../../features/purchase-book';
import type { Book } from './../../../entities/book'; 

const MOCK_BOOKS: Book[] = [
  { 
    id: '1', 
    title: 'FSD 완벽 가이드', 
    price: 15000, 
    description: '폴더 구조의 신이 되어보자', 
    genre: 'IT' 
  },
  { 
    id: '2', 
    title: 'React의 정석', 
    price: 25000, 
    description: '기본부터 탄탄하게', 
    genre: 'IT' 
  },
];

export const BookShop = () => {
  return (
    <section style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h2>🏪 도서 상점</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {MOCK_BOOKS.map((book) => (
          <BookCard 
            key={book.id} 
            book={book} 
            // 💡 여기서 Feature(구매 버튼)를 주입합니다!
            actions={<PurchaseButton book={book} />} 
          />
        ))}
      </div>
    </section>
  );
};