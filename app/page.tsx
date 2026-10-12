import { ScrollReveal } from "./scroll-reveal";

const journeyStack = [
  "Java",
  "Spring Boot",
  "React",
  "PostgreSQL",
  "PostGIS",
  "Docker",
  "AWS EC2",
  "Oracle Cloud",
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

const iotStack = [
  "Arduino",
  "C++",
  "Bluetooth",
  "I2C",
  "MIT App Inventor",
  "AutoCAD",
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
    <div className="project-placeholder" aria-label={title} data-reveal>
      <div className="placeholder-topline">
        <span>{index}</span>
        <span>PROJECT PREVIEW</span>
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

function ProjectMedia({
  index,
  label,
  logoSrc,
  logoAlt,
  isDocument = false,
  imageHref,
  imageLinkLabel,
  diagramSrc,
  diagramAlt,
  previewSrc,
  previewAlt,
}: {
  index: string;
  label: string;
  logoSrc: string;
  logoAlt: string;
  isDocument?: boolean;
  imageHref?: string;
  imageLinkLabel?: string;
  diagramSrc?: string;
  diagramAlt?: string;
  previewSrc?: string;
  previewAlt?: string;
}) {
  return (
    <figure
      className={`project-media ${diagramSrc ? "project-media-with-diagram" : ""}`}
      data-reveal
    >
      <div className="project-media-topline">
        <span>{index}</span>
        <span>{label}</span>
      </div>
      <div
        className={`project-logo-wrap ${isDocument ? "project-document-wrap" : ""}`}
      >
        {imageHref ? (
          <a
            className="project-image-link"
            href={imageHref}
            target="_blank"
            rel="noreferrer"
            aria-label={`${logoAlt} 크게 보기`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className={`project-logo ${isDocument ? "project-document" : ""}`}
              src={logoSrc}
              alt={logoAlt}
            />
            <span>{imageLinkLabel ?? "이미지 크게 보기"} <ArrowIcon /></span>
          </a>
        ) : (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            className="project-logo"
            src={logoSrc}
            alt={logoAlt}
          />
        )}
      </div>
      {diagramSrc && diagramAlt ? (
        <div className="project-flow">
          <a
            className="project-diagram-link"
            href={diagramSrc}
            target="_blank"
            rel="noreferrer"
            aria-label={`${diagramAlt} 크게 보기`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="project-diagram" src={diagramSrc} alt={diagramAlt} />
          </a>
          {previewSrc && previewAlt ? (
            <a
              className="project-preview-link"
              href={previewSrc}
              target="_blank"
              rel="noreferrer"
              aria-label={`${previewAlt} 크게 보기`}
            >
              실제 화면 보기 <ArrowIcon />
            </a>
          ) : null}
        </div>
      ) : null}
    </figure>
  );
}

export default function Home() {
  return (
    <main>
      <ScrollReveal />
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

        <div className="hero-capabilities" aria-label="개발 범위">
          <span>01 · FRONTEND</span>
          <span>02 · BACKEND</span>
          <span>03 · INFRA</span>
        </div>

        <div className="hero-index" aria-hidden="true">
          01
        </div>
      </section>

      <section className="intro section-shell" id="about">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">ABOUT ME · 02</p>
          <h2>기능 구현을 넘어, 서비스 전체의 흐름을 연결합니다.</h2>
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
              새로운 기술은 구조와 제약 조건을 먼저 확인한 뒤 적용합니다.
              구현한 결과는 빌드와 테스트, 실제 접속을 통해 검증하며 끝까지
              동작하는 결과물로 완성합니다.
            </p>
          </div>
        </div>
      </section>

      <section className="work section-shell" id="work">
        <div className="section-kicker-row" data-reveal>
          <div className="section-heading">
            <p className="eyebrow">SELECTED WORK · 03</p>
            <h2>서로 다른 문제를, 실제로 동작하는 결과물로 해결했습니다.</h2>
          </div>
          <p className="section-note">기여한 범위와 판단 과정을 중심으로 정리했습니다.</p>
        </div>

        <article className="project project-featured">
          <ProjectMedia
            index="01"
            label="SERVICE FLOW"
            logoSrc="/projects/journey-connect-logo.svg"
            logoAlt="Journey Connect 로고"
            diagramSrc="/projects/journey-connect-mechanism.png"
            diagramAlt="Journey Connect 서비스 흐름"
            previewSrc="/projects/journey-connect-feed.png"
            previewAlt="Journey Connect 실제 서비스 화면"
          />
          <div className="project-content" data-reveal data-reveal-delay="02">
            <div className="project-meta">
              <span>4인 팀</span>
              <span>2개월</span>
              <span>기획 · Full-stack · Infra</span>
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
                <h4>사용자 흐름을 연결한 알고리즘</h4>
                <p>
                  크루 모집과 여행 루트를 분리된 기능으로 두지 않고, 사용자가
                  동행자를 찾고 일정을 함께 만드는 흐름이 이어지도록 알고리즘과
                  기능 구조를 설계했습니다.
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
                  AWS EC2와 Oracle Cloud에 서비스를 이중 배포하고 Docker,
                  Nginx, 도메인, HTTPS와 배포 워크플로를 전담했습니다. Oracle
                  환경은 포트폴리오 시연을 위해 상시 운영하고 있습니다.
                </p>
              </div>
            </div>

            <div className="api-list" aria-label="연동한 Google API">
              {googleApis.map((api) => (
                <span key={api}>{api}</span>
              ))}
            </div>

            <aside className="demo-account" aria-label="Journey Connect 시연 계정">
              <div>
                <strong>DEMO ACCOUNT</strong>
                <span>시연용 계정</span>
              </div>
              <dl>
                <div>
                  <dt>ID</dt>
                  <dd>demo@jc.com</dd>
                </div>
                <div>
                  <dt>PW</dt>
                  <dd>demo2026!</dd>
                </div>
              </dl>
            </aside>

            <div className="project-footer">
              <div className="chip-list">
                {journeyStack.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
              <div className="project-links">
                <a
                  href="https://journey-connect2.kro.kr/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live site <ArrowIcon />
                </a>
                <a
                  href="https://github.com/YTAK99/Journey-Connect"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub <ArrowIcon />
                </a>
              </div>
            </div>
          </div>
        </article>

        <article className="project project-secondary">
          <div className="project-content" data-reveal>
            <div className="project-meta">
              <span>4인 팀</span>
              <span>3주</span>
              <span>UI 설계 · Django · 배포</span>
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
                <strong>DJANGO DELIVERY</strong>
                <p>
                  환경변수와 CORS를 운영 환경에 맞게 조정하고 Google 로그인을
                  연동했습니다. Django, PostgreSQL, Docker, Nginx 구성을 직접
                  배포해 실제 접속 가능한 서비스로 완성했습니다.
                </p>
              </div>
            </div>
            <aside className="demo-account" aria-label="ClassQ 시연 계정">
              <div>
                <strong>DEMO ACCOUNT</strong>
                <span>시연용 계정</span>
              </div>
              <dl>
                <div>
                  <dt>ID</dt>
                  <dd>demo</dd>
                </div>
                <div>
                  <dt>PW</dt>
                  <dd>demo2026!</dd>
                </div>
              </dl>
            </aside>
            <div className="project-footer">
              <div className="chip-list">
                {classQStack.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
              <div className="project-links">
                <a
                  href="https://classq.pythonanywhere.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live site <ArrowIcon />
                </a>
                <a
                  href="https://github.com/YTAK99/classQ"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub <ArrowIcon />
                </a>
              </div>
            </div>
          </div>
          <ProjectMedia
            index="02"
            label="STATE FLOW"
            logoSrc="/projects/classq-logo.png"
            logoAlt="ClassQ 로고"
            diagramSrc="/projects/classq-state-sequence.png"
            diagramAlt="ClassQ 질문 상세 페이지 상태 변경 시퀀스 다이어그램"
            previewSrc="/projects/classq-screen.png"
            previewAlt="ClassQ 실제 서비스 화면"
          />
        </article>

        <article className="project project-iot">
          <ProjectMedia
            index="03"
            label="PROJECT REPORT"
            logoSrc="/projects/iot-home-report.png"
            logoAlt="아두이노 기반 스마트 IoT 홈 프로젝트 보고서"
            isDocument
            imageHref="/projects/iot-home-report.png"
            imageLinkLabel="프로젝트 보고서 크게 보기"
          />
          <div className="project-content" data-reveal data-reveal-delay="02">
            <div className="project-meta">
              <span>졸업 작품</span>
              <span>공동 기여</span>
              <span>동상 수상</span>
            </div>
            <p className="project-type">HARDWARE × SOFTWARE</p>
            <h3>IoT Home System</h3>
            <p className="project-summary">
              Arduino 기반 제어 장치와 MIT App Inventor 애플리케이션을
              Bluetooth로 연동한 스마트홈 시제품입니다. 조명 제어, 현관문·커튼
              구동, PDLC 상태 전환과 가스 감지 알림 기능을 실제 주택 모형에서
              구현하고 검증했습니다.
            </p>
            <div className="project-points">
              <div>
                <strong>DEVICE CONTROL</strong>
                <p>
                  애플리케이션과 Arduino를 Bluetooth로 연결해 조명, 현관문,
                  커튼과 PDLC를 제어하는 사용자 흐름을 구성했습니다.
                </p>
              </div>
              <div>
                <strong>PHYSICAL PROTOTYPE</strong>
                <p>
                  AutoCAD로 주택 내부 구조를 설계하고 센서, 모터, 배선을 통합해
                  가스 감지 시 부저가 작동하는 실제 시제품을 완성했습니다.
                </p>
              </div>
            </div>
            <div className="award-line">
              <span>BRONZE AWARD</span>
              <p>특허기술박람회 동상</p>
            </div>
            <div className="project-footer project-footer-iot">
              <div className="chip-list">
                {iotStack.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </article>
      </section>

      <section className="stack section-shell" id="stack">
        <div className="section-kicker-row" data-reveal>
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
            <article
              key={group.number}
              className="stack-card"
              data-reveal
              data-reveal-delay={group.number}
            >
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
        <div className="process-title-wrap" data-reveal>
          <p className="eyebrow">HOW I WORK · 05</p>
          <h2 id="process-title">AI를 활용하되, 판단과 검증은 직접.</h2>
          <p>
            빠르게 생성하는 것보다 현재 프로젝트의 구조를 이해하고,
            결과를 검증할 수 있는 방식으로 AI를 활용합니다.
          </p>
        </div>
        <ol className="process-list">
          <li data-reveal>
            <span>01</span>
            <div>
              <h3>맥락부터 확인</h3>
              <p>현재 코드, API 계약, 버전과 제약 조건을 먼저 확인합니다.</p>
            </div>
          </li>
          <li data-reveal data-reveal-delay="02">
            <span>02</span>
            <div>
              <h3>작은 단위로 구현</h3>
              <p>작업을 나누고 변경 범위를 좁혀 원인을 추적할 수 있게 만듭니다.</p>
            </div>
          </li>
          <li data-reveal data-reveal-delay="03">
            <span>03</span>
            <div>
              <h3>동작으로 검증</h3>
              <p>빌드, 테스트, 로그와 실제 화면을 통해 생성 결과를 확인합니다.</p>
            </div>
          </li>
          <li data-reveal data-reveal-delay="04">
            <span>04</span>
            <div>
              <h3>운영 정보는 분리</h3>
              <p>비밀값과 운영 설정을 코드에서 분리하고 공개 범위를 관리합니다.</p>
            </div>
          </li>
        </ol>
      </section>

      <section className="background section-shell" id="background">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">BACKGROUND · 06</p>
          <h2>기술의 경계를 넓혀온 과정.</h2>
        </div>
        <div className="timeline">
          <article className="timeline-item" data-reveal>
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
          <article className="timeline-item" data-reveal>
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
          <article className="timeline-item" data-reveal>
            <div className="timeline-date">CONTINUOUS</div>
            <div className="timeline-copy">
              <p className="timeline-type">SECURITY LABS</p>
              <h3>보안 학습 기록</h3>
              <p>
                악성코드 정적·동적 분석, Format String 취약점 공격과 방어,
                NSL-KDD 기반 침입 탐지, NTFS 로그 포렌식 기록을 공개 가능한
                형태로 정리할 예정입니다.
              </p>
              <div className="preparing-badge">CASE STUDY · IN PROGRESS</div>
            </div>
          </article>
        </div>
      </section>

      <section className="contact section-shell" id="contact">
        <div className="contact-copy" data-reveal>
          <p className="eyebrow light">CONTACT · 07</p>
          <h2>
            좋은 서비스를 함께 만들 팀을,
            <br />
            기다리고 있습니다.
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
        </div>
      </section>

      <footer className="site-footer section-shell">
        <p>© 2026 Han YoungTak. Built with intention.</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
