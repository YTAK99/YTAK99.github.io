# 한영탁 | Han YoungTak — Portfolio

한영탁의 풀스택 개발자 포트폴리오입니다. 이 폴더는 다른 컴퓨터로 옮겨도 수정할 수 있으며, GitHub Pages에 자동으로 배포할 수 있도록 준비되어 있습니다.

## 가장 먼저 알아둘 점

- `app/`은 포트폴리오 원본 소스입니다.
- `github-pages/`는 GitHub Pages가 실제로 공개하는 정적 결과물입니다.
- `.github/workflows/deploy-pages.yml`이 GitHub에서 빌드와 배포를 자동으로 수행합니다.
- `node_modules/`, `dist/`, `.vinext/`는 다시 생성할 수 있으므로 백업하지 않아도 됩니다.
- 프로필 사진과 이메일이 사이트에 공개됩니다.

## 포맷 전에 백업하기

프로젝트와 함께 생성된 `han-youngtak-portfolio-backup.zip` 파일을 외장 저장장치나 클라우드에 복사하세요. ZIP에는 소스, 이미지, 정적 사이트, 배포 설정이 들어 있으며 용량이 큰 설치 파일은 제외되어 있습니다.

현재 폴더 자체를 복사해도 됩니다. 다만 Windows 탐색기에서 숨김 파일 표시를 켜면 `.github`, `.openai`, `.gitignore` 같은 설정 파일도 함께 복사되는지 확인하기 쉽습니다.

## 다른 컴퓨터에서 준비하기

### 1. 필요한 프로그램

- Git
- Node.js 22 이상
- GitHub 계정

GitHub Desktop을 사용하면 명령어 없이도 저장소를 올릴 수 있습니다. 사이트의 문구만 수정할 때는 VS Code 사용을 권장합니다.

### 2. 프로젝트 실행

터미널에서 이 폴더로 이동한 뒤 다음을 실행합니다.

```bash
npm install
npm run dev
```

터미널에 표시되는 로컬 주소를 브라우저에서 열면 됩니다.

## GitHub Pages에 배포하기 — 권장 방법

### 1. GitHub 저장소 만들기

1. GitHub에서 `New repository`를 선택합니다.
2. 저장소 이름을 `portfolio`로 입력합니다.
3. GitHub 무료 계정이라면 `Public`을 선택합니다.
4. README나 `.gitignore`를 추가하지 않고 빈 저장소로 만듭니다.

저장소 주소는 다음 형태가 됩니다.

```text
https://github.com/YTAK99/portfolio
```

### 2-A. GitHub Desktop으로 올리기

1. GitHub Desktop에서 `File > Add local repository`를 선택합니다.
2. 이 `portfolio` 폴더를 선택합니다.
3. `Publish repository`를 누릅니다.
4. 저장소 이름을 `portfolio`로 지정하고 공개 저장소로 게시합니다.

### 2-B. 터미널로 올리기

GitHub에서 빈 저장소를 만든 후 이 폴더에서 실행합니다.

```bash
git remote add origin https://github.com/YTAK99/portfolio.git
git branch -M main
git push -u origin main
```

`remote origin already exists`라는 메시지가 나오면 다음처럼 기존 주소를 교체합니다.

```bash
git remote set-url origin https://github.com/YTAK99/portfolio.git
git push -u origin main
```

### 3. GitHub Pages 켜기

1. GitHub의 `YTAK99/portfolio` 저장소로 이동합니다.
2. `Settings > Pages`를 엽니다.
3. `Build and deployment > Source`에서 `GitHub Actions`를 선택합니다.
4. `Actions` 탭에서 `Deploy portfolio to GitHub Pages` 작업이 완료될 때까지 기다립니다.

완료 후 예상 주소는 다음과 같습니다.

```text
https://ytak99.github.io/portfolio/
```

처음 배포는 몇 분 걸릴 수 있습니다.

## 수정한 뒤 다시 배포하기

사이트 내용은 주로 다음 두 파일에서 수정합니다.

- `app/page.tsx`: 자기소개, 프로젝트, 기술 스택, 링크
- `app/globals.css`: 색상, 글꼴, 여백, 반응형 디자인

수정 후 로컬에서 확인합니다.

```bash
npm run dev
```

GitHub Pages용 파일을 직접 다시 만들려면 다음을 실행합니다.

```bash
npm run export:github-pages
```

GitHub에 올릴 때는 다음을 실행합니다.

```bash
git add .
git commit -m "포트폴리오 내용 수정"
git push
```

`main` 브랜치에 푸시하면 GitHub Actions가 최신 정적 파일을 다시 만들고 자동 배포합니다.

## 저장소 이름을 다르게 쓰는 경우

자동 배포에서는 GitHub가 실제 주소를 계산하므로 별도 수정이 필요 없습니다.

로컬에서 다른 주소를 기준으로 정적 파일을 생성하고 싶다면 환경변수를 지정합니다.

PowerShell:

```powershell
$env:GITHUB_PAGES_URL="https://ytak99.github.io/새로운-저장소이름/"
npm run export:github-pages
```

macOS 또는 Linux:

```bash
GITHUB_PAGES_URL="https://ytak99.github.io/새로운-저장소이름/" npm run export:github-pages
```

## 프로젝트 이미지와 자료 추가하기

추가할 자료는 `public/` 폴더에 넣습니다.

예시:

```text
public/projects/journey-main.webp
public/projects/journey-demo.mp4
public/projects/classq-dashboard.webp
public/projects/iot-home.webp
public/resume/han-youngtak-resume.pdf
```

그다음 `app/page.tsx`의 `MEDIA SLOT` 부분을 실제 이미지나 영상 태그로 교체하고 다시 배포합니다.

## Journey Connect 테스트 계정

개인 계정을 공개하지 말고 채용 검토용 계정을 별도로 만드는 것을 권장합니다.

- 가상 이메일과 공개 가능한 예시 데이터 사용
- 관리자 권한 부여 금지
- 다른 사용자 정보가 보이지 않도록 확인
- 데이터 삭제와 위험한 기능 제한
- 비밀번호는 저장소나 포트폴리오 코드에 작성하지 않기

테스트 계정 정보는 포트폴리오 본문에 직접 노출하기보다 지원서나 채용 담당자에게 개별 전달하는 편이 안전합니다.

## 검사 명령어

```bash
npm test
npm run test:github-pages
```

두 명령이 통과하면 원본 사이트와 GitHub Pages 정적 결과물의 기본 구성이 정상입니다.

## 문제 해결

### GitHub Actions가 실행되지 않는 경우

- 저장소의 기본 브랜치가 `main`인지 확인합니다.
- `Settings > Pages > Source`가 `GitHub Actions`인지 확인합니다.
- `Actions` 탭에서 실패한 작업의 로그를 확인합니다.

### 사진이나 스타일이 나타나지 않는 경우

`github-pages/index.html`을 직접 수정하지 말고 `app/`의 원본을 수정한 뒤 `npm run export:github-pages`를 실행하세요. 자동 배포를 사용하면 GitHub Actions가 이 작업을 대신 수행합니다.

### 저장소를 비공개로 만들고 싶은 경우

GitHub 무료 계정에서는 일반적으로 공개 저장소가 가장 간단합니다. 비공개 저장소에서 Pages를 사용할 수 있는지는 계정 요금제와 조직 정책에 따라 달라질 수 있습니다.
