import { useUserStore } from '@/entities/user';
import type { Book } from '@/entities/book'

export const PurchaseButton = ({ book }: { book: Book }) => {
  const { user, buyBook } = useUserStore();

  const handlePurchase = () => {
    if (user.balance < book.price) {
      return alert('잔액이 부족합니다!');
    }
    buyBook(book);
    alert(`${book.title} 구매 완료!`);
  };

  return <button onClick={handlePurchase}>구매하기 ({book.price}원)</button>;
};