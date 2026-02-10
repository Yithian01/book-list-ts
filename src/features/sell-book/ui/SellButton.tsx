import { useUserStore } from '@/entities/user';
import { sellBookApi } from '../api';

export const SellButton = ({ instanceId }: { instanceId: string } ) => {
  const { user, initUser } = useUserStore();

  const handleSell = async () => {
    if (!confirm('정말 판매하시겠습니까?')) return;

    try {
      const response = await sellBookApi({
        memberUuid: user.uuid,
        bookUuid: instanceId,
      });

      if (response.success) {
        alert('성공적으로 판매되었습니다! 💰');
        
        await initUser(); 
      }
    } catch (error: any) {
      const errorMsg = error.response?.data?.message || '판매 중 오류가 발생했습니다.';
      alert(errorMsg);
    }
  };

  return (
    <button 
      onClick={handleSell}
      style={{ backgroundColor: '#ff4d4f', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer' }}
    >
      판매하기
    </button>
  );
};