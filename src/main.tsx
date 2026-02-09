// src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App' // 확장자 .tsx는 생략 가능합니다.

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)