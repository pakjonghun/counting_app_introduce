# 재고 카운팅

바코드 스캔 한 번으로 재고 카운팅 끝. 오프라인에서도 완벽하게 동작하는 재고 관리 앱의 소개 페이지입니다.

## 주요 기능

- **바코드 스캔** — 카메라로 바코드를 인식, 연속 스캔으로 빠르게 재고 등록
- **오프라인 동작** — 인터넷 없이도 완벽하게 동작 (SQLite 로컬 저장)
- **세션 기반 관리** — 독립적인 세션으로 작업을 분리하고 체계적으로 관리
- **변경 이력 추적** — 이벤트 소싱으로 모든 변경 기록, 언제든 Undo 가능
- **Google Sheets 연동** — CSV / Google Sheets로 데이터 내보내기
- **크로스 플랫폼** — iOS, Android, Web, Windows, macOS, Linux 지원
- **다국어 지원** — 한국어 / 영어

## 시작하기

```bash
# 의존성 설치
pnpm install

# 개발 서버 (http://localhost:3000)
pnpm dev

# 프로덕션 빌드
pnpm build
```

## 환경변수

`.env` 파일에 아래 변수를 설정합니다. 배포 시에는 AWS Parameter Store에서 자동으로 가져옵니다.

| 변수 | 설명 |
|------|------|
| `VITE_APP_DOWNLOAD_URL` | 앱 다운로드 링크 (App Store / Play Store) |
| `VITE_GITHUB_URL` | GitHub 레포지토리 URL |
| `VITE_EMAILJS_SERVICE_ID` | EmailJS 서비스 ID |
| `VITE_EMAILJS_TEMPLATE_ID` | EmailJS 템플릿 ID |
| `VITE_EMAILJS_PUBLIC_KEY` | EmailJS 퍼블릭 키 |

## 배포

S3 정적 호스팅으로 배포됩니다. Terraform으로 인프라를 관리합니다.

```bash
# 인프라 프로비저닝
cd infra
terraform init
terraform apply

# 빌드 + 배포 (SSM 파라미터 자동 주입)
./deploy.sh
```

## 기술 스택

React · TypeScript · Vite · Tailwind CSS · Framer Motion · i18next

## 라이선스

All rights reserved.
