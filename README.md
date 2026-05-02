# 🚀 COLORVERSE
[ 카카오, 메타버스 비전 ‘카카오 유니버스’ 컬러버스 데모 프로젝트 ]

기존 데모 프로젝트의 레거시 시스템을 Next.js와 TypeScript 기반의 현대적이고 확장 가능한 아키텍처로 재구성한 프로젝트 입니다.

---

## 🛠 Tech Stack

프로젝트에서 사용 중인 주요 기술을 명시합니다.

- **Framework:** Next.js (App Router / Pages Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Vercel

---

## ✨ Key Features

기존 프로젝트 대비 어떤 점이 개선되었는지 또는 주요 기능이 무엇인지 요약합니다.

- **⚡ Next.js와 TypeScript를 통한 성능 및 안정성 향상**
  - `Next.js` App Router를 기반으로 한 최적화된 렌더링으로 빠른 페이지 로딩 및 UX 개선
  - `TypeScript`를 활용한 엄격한 타입 안정성을 바탕으로 런타임 에러 방지 및 유지보수성 대폭 향상

 - **🎨 디자인 시스템 기반의 UI 구현 및 반응형 레이아웃**
  - Figma 디자인의 세밀한 속성(Hug, Fill 등)을 `Tailwind CSS`를 활용해 반응형 웹으로 완벽 구현
  - `Shadcn/UI`를 활용해 재사용성이 높고 일관된 컴포넌트 기반 아키텍처(Component-driven Architecture) 적용

- **🧩 재사용 가능한 공통 컴포넌트(Common Component) 및 UI 시스템**
  - 카드, 버튼 등 자주 사용되는 UI 요소를 공통 컴포넌트로 모듈화하여 재사용성 및 확장성 극대화

---

## 📁 Project Structure

데모 버전에서 실제 서비스로 확장하는 과정까지 고려하여 FSD 구조로 진행했습니다.

```text
src/
├── app/              # 전역 스타일, 레이아웃, Next.js 라우트 및 프로바이더
├── shared/           # 전역적으로 공유되는 유틸리티, 훅, 타입, 공통 UI
├── entities/         # 비즈니스 엔티티
├── features/         # 유저와 상호작용하는 독립적인 기능
└── widgets/          # 엔티티와 기능을 조합하여 화면을 구성하는 컴포넌트

