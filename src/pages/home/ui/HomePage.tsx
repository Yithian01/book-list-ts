import { UserStatus } from '../../../widgets/user-status';
import { BookShop } from '../../../widgets/book-shop';
import { Inventory } from '../../../widgets/inventory';

export default function HomePage() {
  return (
    <main style={{ 
      maxWidth: '1200px', 
      margin: '0 auto', 
      padding: '40px 20px',
      fontFamily: 'sans-serif' 
    }}>
      {/* 1. 상단 유저 정보 섹션 */}
      <UserStatus />

      {/* 2. 메인 콘텐츠 섹션 (좌측 상점, 우측 인벤토리) */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr', 
        gap: '40px',
        alignItems: 'start'
      }}>
        <BookShop />
        <Inventory />
      </div>
    </main>
  );
}