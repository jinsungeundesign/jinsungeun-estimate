# 진성은디자인 - 세상에서 가장 편한 견적

## 1. Supabase 설정 (로그인/저장 기능)

1. https://supabase.com 에서 무료 계정 생성 → "New Project" 생성
2. "SQL Editor"에서 `supabase-setup.sql` 내용을 붙여넣고 실행 (저장용 테이블 생성)
3. "Project Settings" → "API"에서 아래 두 값을 복사해두세요.
   - Project URL
   - anon public key

## 2. 소셜 로그인 연결 (구글 / 카카오 / 네이버)

### 구글
1. Supabase 대시보드 → Authentication → Providers → Google → 활성화
2. Google Cloud Console(console.cloud.google.com)에서 OAuth 클라이언트 생성
   - 승인된 리디렉션 URI에 Supabase가 보여주는 콜백 URL을 그대로 붙여넣기
3. 발급받은 Client ID / Client Secret을 Supabase Google 설정 화면에 입력 → Save

### 카카오
1. Supabase 대시보드 → Authentication → Providers → Kakao → 활성화
2. Kakao Developers(developers.kakao.com)에서 애플리케이션 생성
   - REST API 키 = Client ID, 별도 발급하는 Client Secret 코드 = Client Secret
   - "카카오 로그인 Redirect URI"에 Supabase 콜백 URL 등록
3. Client ID / Secret을 Supabase Kakao 설정 화면에 입력 → Save

### 네이버 (Supabase 기본 제공 목록에는 없어서 "커스텀 OAuth 제공자"로 등록)
1. Naver Developers(developers.naver.com)에서 애플리케이션 등록, Client ID/Secret 발급
2. Supabase 대시보드 → Authentication → Providers → "New Provider" → Manual configuration
3. 식별자를 `custom:naver`로 입력 (코드에서 이 이름으로 호출하고 있어요)
4. 네이버의 Authorization URL / Token URL / UserInfo URL을 입력하고 Client ID/Secret 입력 → Create
   (무료 플랜은 커스텀 제공자를 3개까지 등록할 수 있어요)

셋 다 설정하지 않아도 앱은 정상 작동해요 — 설정 안 한 버튼은 눌러도 그냥 아무 반응이 없을 뿐이에요.
필요한 것만 먼저 연결하셔도 됩니다.

## 3. 로컬 확인 (선택)
프로젝트 루트에 `.env` 파일을 만들고 아래처럼 채우세요.
```
VITE_SUPABASE_URL=여기에 Project URL 붙여넣기
VITE_SUPABASE_ANON_KEY=여기에 anon public key 붙여넣기
```
그다음:
```
npm install
npm run dev
```

## 4. 무료 배포 (Vercel)
1. GitHub에 새 저장소를 만들고 이 폴더 전체를 업로드(push)합니다. (`.env`는 올리지 마세요 — .gitignore에 이미 포함)
2. https://vercel.com 에 GitHub 계정으로 가입
3. "Add New Project" → 방금 만든 저장소 선택
4. "Environment Variables"에 아래 두 개 추가
   - `VITE_SUPABASE_URL` = Project URL
   - `VITE_SUPABASE_ANON_KEY` = anon public key
5. "Deploy" 클릭 → 몇 분 후 `https://프로젝트명.vercel.app` 주소 생성

## 참고
- 로그인 방식: 구글/카카오/네이버 소셜 로그인 + 이메일 매직링크(비밀번호 없음)
- 로그인한 사용자가 "자재리스트 저장하기"를 누르면 현재 선택 상태가 저장되고,
  다음에 다시 로그인하면 자동으로 마지막 저장 내용을 불러와요.
- 사용자당 1개의 저장본만 유지해요(최신 저장이 이전 것을 덮어씀). 여러 개 저장은 추후 확장 가능.
