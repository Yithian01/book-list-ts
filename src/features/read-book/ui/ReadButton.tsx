export const ReadButton = ({ title }: { title: string }) => {
  const handleRead = () => alert(`${title} 책을 읽습니다. 📖`);

  return <button onClick={handleRead}>읽기</button>;
};