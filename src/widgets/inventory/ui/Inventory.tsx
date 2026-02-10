import { useUserStore } from './../../../entities/user';
import { BookCard } from './../../../entities/book';
import { SellButton } from './../../../features/sell-book';
import { ReadButton } from './../../../features/read-book';

export const Inventory = () => {
  const myBooks = useUserStore((state) => state.myBooks);

  return (
    <section style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
      <h2>🎒 내 가방 ({myBooks.length})</h2>
      {myBooks.length === 0 ? (
        <p>아직 구매한 책이 없어요.</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {myBooks.map((book) => (
            <BookCard 
              key={book.id} 
              book={book} 
              actions={
                <div style={{ display: 'flex', gap: '10px' }}>
                  <ReadButton title={book.title} />
                  <SellButton instanceId={book.instanceId} />
                </div>
              } 
            />
          ))}
        </div>
      )}
    </section>
  );
};