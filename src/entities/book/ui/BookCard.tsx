import type { ReactNode } from 'react';
import type { Book } from '@/entities/book';

interface BookCardProps {
  book: Book;
  actions?: ReactNode; // '구매', '판매', '읽기' 버튼이 주입될 자리
}

export const BookCard = ({ book, actions }: BookCardProps) => {
  return (
    <div style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px' }}>
      <h3>{book.title}</h3>
      <p style={{ fontSize: '14px', color: '#666' }}>{book.description}</p>
      <div style={{ fontWeight: 'bold' }}>{book.price.toLocaleString()}원</div>
      <small>장르: {book.genre}</small>
      
      {/* 기능(Features) 버튼들이 렌더링될 위치 */}
      {actions && <div style={{ marginTop: '10px', display: 'flex', gap: '5px' }}>{actions}</div>}
    </div>
  );
};