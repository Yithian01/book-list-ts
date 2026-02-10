import { useUserStore } from '../../../entities/user';

export const UserStatus = () => {
  // 스토어에서 유저 정보를 가져옵니다.
  const { user } = useUserStore();

  // 유저 정보가 없을 경우를 대비한 방어 코드
  if (!user) return null;

  return (
    <header style={{ 
      padding: '20px', 
      backgroundColor: '#f1f3f5', 
      borderRadius: '12px',
      marginBottom: '30px',
      border: '1px solid #dee2e6'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h2 style={{ margin: 0, fontSize: '1.5rem' }}>
            👋 안녕하세요, <span style={{ color: '#228be6' }}>{user.name}</span>님!
          </h2>
          <p style={{ margin: '5px 0 0', color: '#868e96' }}>
            {user.age}세 · {user.gender === 'male' ? '남성' : '여성'}
          </p>
        </div>

        <div style={{ textAlign: 'right' }}>
          <span style={{ fontSize: '0.9rem', color: '#868e96' }}>보유 잔액</span>
          <div style={{ 
            fontSize: '1.8rem', 
            fontWeight: 'bold', 
            color: '#2b8a3e' 
          }}>
            {user.balance.toLocaleString()}원
          </div>
        </div>
      </div>
    </header>
  );
};