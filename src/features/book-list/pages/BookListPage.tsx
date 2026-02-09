import { useBookAction } from '../hooks/useBookAction';
import { BookCard } from '../components/BookCard'; // 기존 컴포넌트 활용
import type { Book } from '../model/types';

const INITIAL_BOOKS: Book[] = [
  { id: 1, title: "클린 코드", price: 15000, status: 'market' },
  { id: 2, title: "리액트 마스터", price: 20000, status: 'market' },
  { id: 3, title: "TS 가이드", price: 12000, status: 'market' },
];

export const BookListPage = () => {
  const { books, user, purchaseBook, sellBook } = useBookAction(INITIAL_BOOKS, { name: "사용자A", balance: 50000 });

  const marketBooks = books.filter(b => b.status === 'market');
  const inventoryBooks = books.filter(b => b.status === 'inventory');

  return (
    <div style={{ padding: '20px' }}>
      {/* 상단: 내 정보 */}
      <section style={{ backgroundColor: '#f0f0f0', padding: '15px', borderRadius: '8px' }}>
        <h2>👤 {user.name} 님의 정보</h2>
        <p>보유 금액: <strong>{user.balance.toLocaleString()}원</strong></p>
      </section>

      {/* 중앙: 리스트 섹션 */}
      <div style={{ display: 'flex', gap: '40px', marginTop: '30px' }}>
        
        {/* 왼쪽: 책장 리스트 */}
        <div style={{ flex: 1 }}>
          <h3>📚 책장 리스트 (Market)</h3>
          {marketBooks.map(book => (
            <div key={book.id} style={{ border: '1px solid #ccc', margin: '10px 0', padding: '10px' }}>
              <span>{book.title} ({book.price}원)</span>
              <button onClick={() => purchaseBook(book.id)} style={{ marginLeft: '10px' }}>가져가기</button>
            </div>
          ))}
        </div>

        {/* 오른쪽: 내 인벤토리 */}
        <div style={{ flex: 1, backgroundColor: '#e8f5e9', padding: '10px', borderRadius: '8px' }}>
          <h3>🎒 내 인벤토리</h3>
          {inventoryBooks.length === 0 && <p>가방이 비어있습니다.</p>}
          {inventoryBooks.map(book => (
            <div key={book.id} style={{ border: '1px solid #4caf50', margin: '10px 0', padding: '10px' }}>
              <span>{book.title}</span>
              <div style={{ marginTop: '5px' }}>
                <button onClick={() => alert(`${book.title}을(를) 사용했습니다!`)}>사용하기</button>
                {/* ✅ 수정된 부분: 
                  alert 대신 sellBook(book.id)를 호출합니다. 
                */}
                <button 
                  onClick={() => sellBook(book.id)} 
                  style={{ marginLeft: '5px', color: '#d32f2f', cursor: 'pointer' }}
                >
                  팔기
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};