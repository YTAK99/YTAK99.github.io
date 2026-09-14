const journeyStack = [
  "Java",
  "Spring Boot",
  "React",
  "PostgreSQL",
  "PostGIS",
  "Docker",
  "AWS EC2",
  "Nginx",
];

const classQStack = [
  "Python",
  "Django",
  "PostgreSQL",
  "Google OAuth",
  "Docker",
  "Nginx",
  "Figma",
];

const stackGroups = [
  {
    number: "01",
    eyebrow: "CORE",
    title: "스스로 구현하는 기반",
    description:
      "자료를 찾아가며 기능을 완성할 수 있고, 코드의 동작 흐름을 직접 설명할 수 있는 기술입니다.",
    skills: ["Java", "Python", "Django", "SQL", "Git"],
  },
  {
    number: "02",
    eyebrow: "PROJECT EXPERIENCE",
    title: "프로젝트로 다룬 기술",
    description:
      "팀 프로젝트에서 실제 기능 구현과 연동에 사용했고, 현재 반복 학습으로 이해의 깊이를 더하고 있습니다.",
    skills: [
      "Spring Boot",
      "React",
      "JavaScript",
      "JPA",
      "PostgreSQL",
      "PostGIS",
      "REST API",
      "WebSocket",
    ],
  },
  {
    number: "03",
    eyebrow: "DELIVERY",
    title: "서비스를 공개하는 과정",
    description:
      "로컬 구현에서 멈추지 않고 도메인과 HTTPS를 적용해 사용자가 접속할 수 있는 환경까지 연결했습니다.",
    skills: [
      "AWS EC2",
      "Docker",
      "Nginx",
      "GitHub Actions",
      "HTTPS",
      "Google Maps Platform",
      "Gemini",
    ],
  },
];

const googleApis = [
  "Maps JavaScript API",
  "Geocoding API",
  "Places API",
  "Places API (New)",
  "Time Zone API",
  "Weather API",
  "Gemini",
];

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

function ProjectPlaceholder({
  index,
  title,
  items,
}: {
  index: string;
  title: string;
  items: string[];
}) {
  return (
    <div className="project-placeholder" aria-label={`${title} 자료 추가 예정`}>
      <div className="placeholder-topline">
        <span>{index}</span>
        <span>MEDIA SLOT</span>
      </div>
      <div className="placeholder-copy">
        <p>{title}</p>
        <ul>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <span className="placeholder-watermark" aria-hidden="true">
        {index}
      </span>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="맨 위로 이동">
          <span className="wordmark-dot" aria-hidden="true" />
          <span>H.Y.T</span>
        </a>

        <nav className="desktop-nav" aria-label="주요 메뉴">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#stack">Stack</a>
          <a href="#background">Background</a>
        </nav>

        <a className="header-contact" href="#contact">
          Contact <ArrowIcon />
        </a>

        <details className="mobile-nav">
          <summary aria-label="메뉴 열기">Menu</summary>
          <nav aria-label="모바일 메뉴">
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#stack">Stack</a>
            <a href="#background">Background</a>
            <a href="#contact">Contact</a>
          </nav>
        </details>
      </header>

      <section className="hero section-shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow">FULL-STACK DEVELOPER · SEOUL</p>
          <h1>
            기획부터 배포까지,
            <br />
            <span>서비스의 전 과정을</span>
            <br />
            연결합니다.
          </h1>
          <p className="hero-description">
            Java와 Python을 기반으로 사용자 화면, API, 데이터베이스,
            배포 환경을 연결해 실제로 동작하는 서비스를 만드는 개발자
            <strong> 한영탁</strong>입니다.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              프로젝트 보기 <span aria-hidden="true">↓</span>
            </a>
            <a
              className="text-link"
              href="https://github.com/YTAK99"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <ArrowIcon />
            </a>
          </div>
        </div>

        <div className="hero-portrait-wrap">
          <div className="portrait-frame">
            <img
              src="/profile.jpg"
              alt="풀스택 개발자 한영탁 프로필 사진"
              className="portrait"
            />
            <div className="portrait-label">
              <span>한영탁</span>
              <span>Han YoungTak</span>
            </div>
          </div>
          <div className="availability-card">
            <span className="status-dot" aria-hidden="true" />
            <p>
              <strong>READY TO BUILD</strong>
              <span>새로운 기회를 찾고 있습니다.</span>
            </p>
          </div>
        </div>

        <div className="hero-index" aria-hidden="true">
          01
        </div>
      </section>

      <section className="intro section-shell" id="about">
        <div className="section-heading">
          <p className="eyebrow">ABOUT ME · 02</p>
          <h2>기능을 만드는 사람에서, 흐름을 연결하는 사람으로.</h2>
        </div>
        <div className="intro-grid">
          <p className="intro-lead">
            아이디어를 화면으로 옮기고, 데이터를 설계하고, 서버에 배포해
            다른 사람이 사용할 수 있게 만드는 과정 전체를 좋아합니다.
          </p>
          <div className="intro-body">
            <p>
              전자공학에서 하드웨어와 네트워크의 동작 원리를 익혔고,
              보안 학습을 통해 시스템을 세밀하게 관찰하는 습관을 길렀습니다.
              이후 웹 개발로 영역을 넓혀 두 번의 팀 프로젝트에서 기획,
              프론트엔드, 백엔드, 인프라를 두루 경험했습니다.
            </p>
            <p>
              아직 익숙하지 않은 기술은 자료를 확인하며 정확하게 적용하고,
              구현한 결과는 빌드와 테스트, 실제 접속을 통해 검증합니다.
              모르는 것을 숨기기보다 끝까지 이해해 내 것으로 만드는 개발자를
              지향합니다.
            </p>
          </div>
        </div>
        <div className="numbers" aria-label="주요 경험 수치">
          <div>
            <strong>02</strong>
            <span>Web Projects</span>
          </div>
          <div>
            <strong>06</strong>
            <span>Months Bootcamp</span>
          </div>
          <div>
            <strong>65%</strong>
            <span>Journey Contribution</span>
          </div>
          <div>
            <strong>70%</strong>
            <span>ClassQ Contribution</span>
          </div>
        </div>
      </section>

      <section className="work section-shell" id="work">
        <div className="section-kicker-row">
          <div className="section-heading">
            <p className="eyebrow">SELECTED WORK · 03</p>
            <h2>서로 다른 문제를, 끝까지 동작하는 결과물로.</h2>
          </div>
          <p className="section-note">기여한 범위와 판단 과정을 중심으로 정리했습니다.</p>
        </div>

        <article className="project project-featured">
          <ProjectPlaceholder
            index="01"
            title="Journey Connect 대표 자료 추가 예정"
            items={["서비스 대표 화면", "크루·루트 기능 시연", "발표 또는 시연 영상"]}
          />
          <div className="project-content">
            <div className="project-meta">
              <span>4인 팀</span>
              <span>2개월</span>
              <span>기여도 약 65%</span>
            </div>
            <p className="project-type">TRAVEL COLLABORATION PLATFORM</p>
            <h3>Journey Connect</h3>
            <p className="project-summary">
              여행 일정과 동행자 모집을 하나의 사용자 흐름으로 연결한 여행
              협업 플랫폼입니다. 기획 초안부터 프론트엔드·백엔드 구현,
              외부 API 연동, AWS 배포까지 서비스 전반에 참여했습니다.
            </p>

            <div className="case-grid">
              <div>
                <span className="case-number">01</span>
                <h4>크루와 루트의 연결</h4>
                <p>
                  동행자를 모집하는 크루 기능과 여행 경로를 어떻게 연결할지
                  고민하고, 모집·관리·채팅과 루트 탐색 흐름을 구현했습니다.
                </p>
              </div>
              <div>
                <span className="case-number">02</span>
                <h4>Google API 통합</h4>
                <p>
                  지도, 장소, 주소 변환, 시간대와 날씨 정보를 연결해 여행지
                  탐색과 일정 작성에 필요한 정보를 한 화면에서 활용하도록
                  구성했습니다.
                </p>
              </div>
              <div>
                <span className="case-number">03</span>
                <h4>운영 환경까지 직접</h4>
                <p>
                  AWS EC2, Docker, Nginx, 도메인, HTTPS와 배포 워크플로를
                  전담해 팀의 결과물을 실제 접속 가능한 서비스로 만들었습니다.
                </p>
              </div>
            </div>

            <div className="api-list" aria-label="연동한 Google API">
              {googleApis.map((api) => (
                <span key={api}>{api}</span>
              ))}
            </div>

            <div className="project-footer">
              <div className="chip-list">
                {journeyStack.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
              <div className="project-links">
                <a
                  href="https://journey-connect.kro.kr/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live site <ArrowIcon />
                </a>
                <a
                  href="https://github.com/YTAK99"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub <ArrowIcon />
                </a>
              </div>
            </div>
            <p className="demo-note">
              채용 검토용 테스트 계정 준비 예정 · 개인 계정 정보는 공개하지 않습니다.
            </p>
          </div>
        </article>

        <article className="project project-secondary">
          <div className="project-content">
            <div className="project-meta">
              <span>4인 팀</span>
              <span>3주</span>
              <span>기여도 약 70%</span>
            </div>
            <p className="project-type">ROLE-BASED Q&amp;A SERVICE</p>
            <h3>ClassQ</h3>
            <p className="project-summary">
              학생과 강사의 역할을 분리해 질문, 답변, 추가 질문과 해결까지의
              흐름을 구조화한 교육용 Q&amp;A 서비스입니다. Figma 초안부터
              Django 구현과 배포까지 주도했습니다.
            </p>
            <div className="project-points">
              <div>
                <strong>ROLE DESIGN</strong>
                <p>
                  학생은 질문과 추가 질문을, 강사는 답변과 관리 기능을 자연스럽게
                  수행하도록 역할별 권한과 화면 흐름을 구분했습니다.
                </p>
              </div>
              <div>
                <strong>FULL CYCLE</strong>
                <p>
                  질문·답변, 검색·태그, 상태 관리와 Google OAuth를 구현하고
                  PostgreSQL, Docker, Nginx 기반 환경까지 연결했습니다.
                </p>
              </div>
            </div>
            <div className="project-footer">
              <div className="chip-list">
                {classQStack.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/YTAK99/classQ"
                  target="_blank"
                  rel="noreferrer"
                >
                  Repository <ArrowIcon />
                </a>
              </div>
            </div>
          </div>
          <ProjectPlaceholder
            index="02"
            title="ClassQ 대표 자료 추가 예정"
            items={["Figma 초기안", "학생 질문 화면", "강사 대시보드 화면"]}
          />
        </article>

        <article className="project project-iot">
          <ProjectPlaceholder
            index="03"
            title="IoT Home 기록 자료 추가 예정"
            items={["완성된 주택 모형", "PDLC 전환 시연", "모바일 앱 제어 영상"]}
          />
          <div className="project-content">
            <div className="project-meta">
              <span>졸업 작품</span>
              <span>공동 기여</span>
              <span>동상 수상</span>
            </div>
            <p className="project-type">HARDWARE × SOFTWARE</p>
            <h3>IoT Home System</h3>
            <p className="project-summary">
              직접 제작한 주택 모형에 Arduino 기반 제어 장치, 맞춤 설계한
              PDLC와 MIT App Inventor 애플리케이션을 결합해 실제로 작동하는
              스마트홈 환경을 구현했습니다.
            </p>
            <blockquote>
              “낯선 문제도 여러 방법을 시도하며 끝까지 동작하는 결과물로 만든 경험”
            </blockquote>
            <div className="award-line">
              <span>BRONZE AWARD</span>
              <p>특허기술박람회 동상</p>
            </div>
          </div>
        </article>
      </section>

      <section className="stack section-shell" id="stack">
        <div className="section-kicker-row">
          <div className="section-heading">
            <p className="eyebrow light">TECH STACK · 04</p>
            <h2>숙련도 숫자보다, 사용한 맥락으로 말합니다.</h2>
          </div>
          <p className="section-note light">
            주력 기술과 프로젝트 경험을 구분해 솔직하게 정리했습니다.
          </p>
        </div>
        <div className="stack-grid">
          {stackGroups.map((group) => (
            <article key={group.number} className="stack-card">
              <div className="stack-card-top">
                <span>{group.number}</span>
                <p>{group.eyebrow}</p>
              </div>
              <h3>{group.title}</h3>
              <p className="stack-description">{group.description}</p>
              <div className="stack-skills">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="process section-shell" aria-labelledby="process-title">
        <div className="process-title-wrap">
          <p className="eyebrow">HOW I WORK · 05</p>
          <h2 id="process-title">AI를 활용하되, 판단과 검증은 직접.</h2>
          <p>
            빠르게 생성하는 것보다 현재 프로젝트의 구조를 이해하고,
            결과를 검증할 수 있는 방식으로 AI를 활용합니다.
          </p>
        </div>
        <ol className="process-list">
          <li>
            <span>01</span>
            <div>
              <h3>맥락부터 확인</h3>
              <p>현재 코드, API 계약, 버전과 제약 조건을 먼저 확인합니다.</p>
            </div>
          </li>
          <li>
            <span>02</span>
            <div>
              <h3>작은 단위로 구현</h3>
              <p>작업을 나누고 변경 범위를 좁혀 원인을 추적할 수 있게 만듭니다.</p>
            </div>
          </li>
          <li>
            <span>03</span>
            <div>
              <h3>동작으로 검증</h3>
              <p>빌드, 테스트, 로그와 실제 화면을 통해 생성 결과를 확인합니다.</p>
            </div>
          </li>
          <li>
            <span>04</span>
            <div>
              <h3>운영 정보는 분리</h3>
              <p>비밀값과 운영 설정을 코드에서 분리하고 공개 범위를 관리합니다.</p>
            </div>
          </li>
        </ol>
      </section>

      <section className="background section-shell" id="background">
        <div className="section-heading">
          <p className="eyebrow">BACKGROUND · 06</p>
          <h2>기술의 경계를 넓혀온 과정.</h2>
        </div>
        <div className="timeline">
          <article className="timeline-item">
            <div className="timeline-date">2026.03.23 — 09.14</div>
            <div className="timeline-copy">
              <p className="timeline-type">TRAINING</p>
              <h3>MBC아카데미 기업연계형 부트캠프 수료</h3>
              <p>
                (기업연계형) 챗GPT활용 및 DevOps 개발자 부트캠프 · 6개월
                과정 · UI/UX엔지니어링 직종
              </p>
            </div>
          </article>
          <article className="timeline-item">
            <div className="timeline-date">FOUNDATION</div>
            <div className="timeline-copy">
              <p className="timeline-type">ELECTRONICS &amp; SECURITY</p>
              <h3>하드웨어에서 시스템 보안까지</h3>
              <p>
                전자공학을 바탕으로 PCB, TCP/IP, 반도체와 계측 장비를 다뤘고,
                역공학·시스템 보안·디지털 포렌식 실습으로 시스템을 분석하는
                관점을 길렀습니다.
              </p>
            </div>
          </article>
          <article className="timeline-item">
            <div className="timeline-date">CONTINUOUS</div>
            <div className="timeline-copy">
              <p className="timeline-type">SECURITY LABS</p>
              <h3>보안 실습 기록 정리 중</h3>
              <p>
                악성코드 정적·동적 분석, Format String 취약점 공격과 방어,
                NSL-KDD 기반 침입 탐지, NTFS 로그 포렌식 기록을 공개 가능한
                형태로 정리할 예정입니다.
              </p>
              <div className="preparing-badge">CASE STUDY · PREPARING</div>
            </div>
          </article>
        </div>
      </section>

      <section className="contact section-shell" id="contact">
        <div className="contact-copy">
          <p className="eyebrow light">CONTACT · 07</p>
          <h2>
            함께 만들 이야기가 있다면,
            <br />
            편하게 연락해주세요.
          </h2>
          <p>
            배우는 속도와 끝까지 구현하는 실행력으로 팀의 서비스에
            기여하겠습니다.
          </p>
        </div>
        <div className="contact-links">
          <a href="mailto:ytzzang99@gmail.com">
            <span>Email</span>
            <strong>ytzzang99@gmail.com</strong>
            <ArrowIcon />
          </a>
          <a
            href="https://github.com/YTAK99"
            target="_blank"
            rel="noreferrer"
          >
            <span>GitHub</span>
            <strong>github.com/YTAK99</strong>
            <ArrowIcon />
          </a>
          <a
            href="https://blog.naver.com/ytak99"
            target="_blank"
            rel="noreferrer"
          >
            <span>Blog</span>
            <strong>blog.naver.com/ytak99</strong>
            <ArrowIcon />
          </a>
          <div className="resume-slot">
            <span>Resume</span>
            <strong>PDF 파일 추가 예정</strong>
            <span aria-hidden="true">＋</span>
          </div>
        </div>
      </section>

      <footer className="site-footer section-shell">
        <p>© 2026 Han YoungTak. Built with intention.</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
