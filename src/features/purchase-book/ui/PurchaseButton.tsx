import { useUserStore } from '@/entities/user';
import { purchaseBookApi } from '../api';
import type { Book } from '@/entities/book';

export const PurchaseButton = ({ book }: { book: Book }) => {
  const { user, initUser } = useUserStore();

  const handlePurchase = async () => {
    if (!user.uuid) return alert('유저 정보가 없습니다.');
    if (user.balance < book.price) return alert('잔액이 부족합니다!');

    try {
      const response = await purchaseBookApi({
        memberUuid: user.uuid,
        bookUuid: book.id,
      });

      if (response.success) {
        alert(`${book.title} 구매 완료!`);
        
        await initUser(); 
      }
    } catch (error: any) {
      const message = error.response?.data?.message || '구매 처리 중 오류가 발생했습니다.';
      alert(message);
    }
  };

  return <button onClick={handlePurchase}>구매하기 ({book.price}원)</button>;
};