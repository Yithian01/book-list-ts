# 📚 Book List App (FSD Architecture)

Vite와 React, TypeScript를 기반으로 제작된 도서 관리 애플리케이션입니다. 
**Feature-Sliced Design (FSD)** 아키텍처를 채택하여 각 모듈의 독립성과 확장성을 높였습니다.

---

## 🏗 프로젝트 구조 (Architecture)

본 프로젝트는 FSD 계층 구조를 따릅니다:

- **app**: 애플리케이션의 설정, 전역 프로바이더 및 메인 엔트리 포인트 (`main.tsx`)
- **pages**: 애플리케이션의 페이지 구성 (예: `HomePage`)
- **widgets**: 여러 기능(Features)과 데이터(Entities)를 결합한 독립적인 화면 블록 (예: `Inventory`, `BookShop`)
- **features**: 사용자의 인터랙션을 처리하는 실질적인 비즈니스 로직 (예: `purchase-book`, `sell-book`, `read-book`)
- **entities**: 비즈니스 도메인 엔티티 및 상태 관리 (예: `book`, `user`)
- **shared**: 프로젝트 전반에서 재사용되는 공용 UI 컴포넌트 및 유틸리티

---

## 📂 상세 디렉토리 맵

```text
src/
├── app/               # 애플리케이션 초기 설정 및 App.tsx
├── pages/             # 페이지 레이아웃 (Home 등)
├── widgets/           # 복합적인 기능을 가진 컴포넌트
│   ├── book-shop/     # 도서 상점 위젯
│   ├── inventory/     # 내 서재 위젯
│   └── user-status/   # 유저 정보(잔액 등) 표시 위젯
├── features/          # 사용자 액션 기반 비즈니스 로직
│   ├── purchase-book/ # 도서 구매 기능
│   ├── read-book/     # 도서 읽기 기능
│   └── sell-book/     # 도서 판매 기능
├── entities/          # 도메인 데이터 및 상태(Store)
│   ├── book/          # 도서 데이터 타입 및 UI
│   └── user/          # 유저 상태 관리 (Zustand 등)
└── shared/            # 공용 컴포넌트
```

---

## 🛠 주요 기능 (Key Features)

- **도서 목록 조회**: `BookShop` 위젯을 통해 구매 가능한 도서 목록을 확인합니다.
- **도서 구매 및 판매**: `features` 로직을 통해 유저의 잔액(Balance)을 반영하여 도서를 사고팔 수 있습니다.
- **인벤토리 관리**: 내가 소유한 도서 목록을 `Inventory`에서 확인하고 관리합니다.
- **상태 관리**: `entities/user` 내의 스토어를 통해 전역적으로 유저 데이터와 도서 데이터를 동기화합니다.

---

## 🚀 시작하기

### 설치
```bash
npm install
```

### 실행
```bash
npm run dev
```

---

## 📝 경로 설정 (Path Alias)

본 프로젝트는 `@/` 별칭을 사용하여 모듈을 임포트합니다. 
경로 수정이 필요할 경우 `tsconfig.app.json` 및 `vite.config.ts`를 참조하세요.

```typescript
import { BookCard } from '@/entities/book';
import { useUserStore } from '@/entities/user';
```
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])