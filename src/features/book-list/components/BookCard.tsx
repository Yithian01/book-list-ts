// src/feature/book-list/components/BookCard.tsx
import type { Book } from '../model/types';

interface Props {
  book: Book;
  actionLabel: string; // 버튼에 표시할 글자 (가져가기, 사용하기 등)
  onAction: (id: number) => void; // 버튼 클릭 시 실행할 함수
}

export const BookCard = ({ book, actionLabel, onAction }: Props) => {
  return (
    <div style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '8px', backgroundColor: '#fff' }}>
      {/* coverImage와 author가 types.ts에 없다면 삭제하거나 옵셔널 처리해야 합니다 */}
      <h3>{book.title}</h3>
      <p>가격: <strong>{book.price.toLocaleString()}원</strong></p>
      
      <button 
        onClick={() => onAction(book.id)}
        style={{
          marginTop: '10px',
          width: '100%',
          padding: '8px',
          cursor: 'pointer',
          backgroundColor: book.status === 'market' ? '#646cff' : '#4caf50',
          color: 'white',
          border: 'none',
          borderRadius: '4px'
        }}
      >
        {actionLabel}
      </button>
    </div>
  );
};