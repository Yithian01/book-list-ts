// src/feature/book-list/components/BookTable.tsx
import type { Book } from '../model/types';
import { BookCard } from './BookCard';

interface Props {
  books: Book[];
  actionLabel: string;
  onAction: (id: number) => void;
}

export const BookTable = ({ books, actionLabel, onAction }: Props) => {
  return (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', 
      gap: '15px',
      marginTop: '10px' 
    }}>
      {books.map((book) => (
        <BookCard 
          key={book.id} 
          book={book} 
          actionLabel={actionLabel} 
          onAction={onAction} 
        />
      ))}
    </div>
  );
};