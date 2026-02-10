import { useUserStore } from '@/entities/user';

export const SellButton = ({ instanceId }: { instanceId: string }) => {
  const sellBook = useUserStore((state) => state.sellBook);

  const handleSell = () => {
    if (confirm('판매하시겠습니까?')) {
      sellBook(instanceId);
    }
  };

  return <button onClick={handleSell}>판매하기</button>;
};