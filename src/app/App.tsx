import { useEffect } from 'react'; // 추가
import { useUserStore } from '@/entities/user'; // 추가
import HomePage from '../pages/home/ui/HomePage'; 

function App() {
  const initUser = useUserStore((state) => state.initUser);

  useEffect(() => {
    initUser();
  }, []);

  return (
    <div className="app">
      <HomePage />
    </div>
  );
}

export default App;