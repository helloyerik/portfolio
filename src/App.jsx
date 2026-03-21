import { useEffect, useState } from "react";
import mechtaKzLogo from "./assets/mechta-kz-logo.png";
import {
  backlogSections,
  bmcProjects,
  caseOrder,
  freelanceProjects,
  mechtaProjects,
  publicCases,
  workflowCases,
} from "./content/cases";

const THEME_STORAGE_KEY = "portfolio-theme";

function readRoute() {
  if (typeof window === "undefined") {
    return { pathname: "/", hash: "" };
  }

  return {
    pathname: window.location.pathname.replace(/\/+$/, "") || "/",
    hash: window.location.hash || "",
  };
}

function navigate(event, href) {
  if (!href) return;
  const isHash = href.startsWith("#") || href.startsWith("/#");
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");
  if (isExternal) return;

  event.preventDefault();

  if (isHash) {
    const hash = href.startsWith("/#") ? href.slice(1) : href;
    const target = `/${hash}`;
    if (`${window.location.pathname}${window.location.hash}` !== target) {
      window.history.pushState({}, "", target);
    }
    window.dispatchEvent(new PopStateEvent("popstate"));
    return;
  }

  if (window.location.pathname !== href || window.location.hash) {
    window.history.pushState({}, "", href);
  }
  window.dispatchEvent(new PopStateEvent("popstate"));
}

function Link({ href, children, className = "" }) {
  return (
    <a href={href} className={className} onClick={(event) => navigate(event, href)}>
      {children}
    </a>
  );
}

function ThemeToggle({ theme, onChange }) {
  const nextTheme = theme === "dark" ? "light" : "dark";
  const label = theme === "dark" ? "Dark" : "Light";

  return (
    <button className="theme-toggle" type="button" onClick={() => onChange(nextTheme)}>
      {label}
    </button>
  );
}

function TopNav({ theme, onThemeChange }) {
  return (
    <header className="topbar">
      <div className="shell topbar__inner">
        <Link className="brand" href="/">
          Yerik Kuanbayev
        </Link>
        <div className="topbar__actions">
          <nav className="topnav">
            <a href="https://t.me/helloyerik" target="_blank" rel="noreferrer">
              Telegram
            </a>
            <span>Email</span>
          </nav>
          <ThemeToggle theme={theme} onChange={onThemeChange} />
        </div>
      </div>
    </header>
  );
}

function Prose({ children, compact = false }) {
  return <div className={`prose${compact ? " prose--compact" : ""}`}>{children}</div>;
}

function RichList({ items, ordered = false }) {
  const ListTag = ordered ? "ol" : "ul";

  return (
    <ListTag>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ListTag>
  );
}

function CompanyDivider({ id, mark, markType = "text", name, period, role, blurb }) {
  const isMechtaLogo = markType === "mechta";

  return (
    <div className="company-divider" id={id}>
      <div
        className={`company-divider__mark${isMechtaLogo ? " company-divider__mark--image" : ""}`}
        aria-hidden="true"
      >
        {isMechtaLogo ? (
          <img className="company-divider__logo-image" src={mechtaKzLogo} alt="" />
        ) : (
          mark
        )}
      </div>
      <div className="company-divider__body">
        <h2 className="company-divider__title">{name}</h2>
        <div className="company-divider__meta">
          <span>{period}</span>
          <span aria-hidden="true">·</span>
          <span>{role}</span>
        </div>
        {blurb ? <p className="company-divider__blurb">{blurb}</p> : null}
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  const nonTagFacts = project.facts.filter((fact) => fact !== "Скоро");
  const showSoonTag = project.facts.includes("Скоро");

  const content = (
    <article className="project-card">
      {project.cover ? (
        <div className="project-card__cover">
          {showSoonTag ? <span className="project-card__overlay-tag">Скоро</span> : null}
          <img className="project-card__image" src={project.cover} alt="" />
        </div>
      ) : null}
      <div className="project-card__body">
        <div className="project-card__meta">
          {project.meta.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <h3 className="project-card__title">{project.title}</h3>
        {nonTagFacts.length ? (
          <div className="fact-row">
            {nonTagFacts.map((fact) => (
              <span key={fact}>{fact}</span>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );

  if (!project.preview) {
    return (
      <Link className="project-card-link" href={project.slug}>
        {content}
      </Link>
    );
  }

  return content;
}

function HomePage() {
  return (
    <main className="shell home-page">
      <h1 className="display-title" id="about">
        3+ года помогаю бизнесу и пользователям эффективнее выполнять их задачи
      </h1>

      <CompanyDivider
        id="mechta"
        markType="mechta"
        name="Mechta.kz"
        period="Июль 2025 — сейчас"
        role="Продуктовый дизайнер"
      />
      {mechtaProjects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}

      <section className="section section--projects" id="projects">
        <CompanyDivider
          mark="F"
          name="Фриланс"
          period="Июль 2023 — июль 2025"
          role="Проектная занятость · онлайн"
        />
        {freelanceProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </section>

      <section className="section section--projects">
        <CompanyDivider
          mark="B"
          name="BMC Group"
          period="Февраль 2024 — август 2024"
          role="Проектная занятость · гибрид"
        />
        {bmcProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </section>

      <section className="section" id="experience">
        <div className="section-header">
          <h2 className="section-title">Кратко обо мне</h2>
        </div>
        <div className="narrow">
          <Prose>
            <p>
              Я продуктовый дизайнер, который работает не только на уровне отдельных экранов, но и на
              уровне сценариев, зависимостей и структуры продукта.
            </p>
            <p>
              Мой основной интерес — сложные продукты, где нужно одновременно учитывать пользовательский
              опыт, бизнес-цели, ограничения архитектуры и темп командной реализации.
            </p>
            <ul>
              <li>e-commerce и конверсионные сценарии</li>
              <li>внутренние сервисы и операционные интерфейсы</li>
              <li>design systems и reusable patterns</li>
              <li>прототипирование, презентации и delivery-сопровождение</li>
            </ul>
          </Prose>
        </div>
      </section>

      <section className="section section--cta">
        <div className="cta-card">
          <p className="eyebrow">Контакт</p>
          <h2 className="section-title">Давай обсудим проект</h2>
          <Prose compact>
            <p>
              Если тебе нужен дизайнер, который умеет работать не только с интерфейсами, но и с
              логикой продукта, пользовательскими сценариями и командной реализацией, напиши мне.
            </p>
          </Prose>
          <div className="link-row">
            <a href="https://t.me/helloyerik" target="_blank" rel="noreferrer">
              Telegram
            </a>
            <span>Email</span>
            <span>LinkedIn</span>
          </div>
        </div>
      </section>
    </main>
  );
}

function BacklogPage() {
  return (
    <main className="page shell">
      <section className="page-header">
        <div className="content-block">
          <div className="eyebrow">Рабочая страница</div>
          <h1 className="display-title">Backlog</h1>
          <Prose>
            <p>
              Сюда складывается нераспределенный, сырой и промежуточный контент, который пока не
              вошел в основную структуру сайта. Эта страница нужна как рабочий буфер, чтобы не
              терять материалы между итерациями.
            </p>
          </Prose>
        </div>
      </section>

      <section className="page-grid">
        {backlogSections.map((section) => (
          <article className="content-block" key={section.title}>
            <h2 className="section-title">{section.title}</h2>
            <Prose>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.list ? (
                <ul>
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </Prose>
          </article>
        ))}
      </section>
    </main>
  );
}

function CasePage({ caseData }) {
  const { gallery, heroImage, results, sections, slug, summary, tasks, title } = caseData;
  const currentIndex = caseOrder.findIndex((item) => item.slug === slug);
  const prevCase =
    currentIndex >= 0 ? caseOrder[(currentIndex - 1 + caseOrder.length) % caseOrder.length] : null;
  const nextCase = currentIndex >= 0 ? caseOrder[(currentIndex + 1) % caseOrder.length] : null;

  return (
    <main className="page case-page shell">
      {heroImage ? (
        <div className="case-hero">
          <img className="case-hero__image" src={heroImage} alt="" />
        </div>
      ) : (
        <div className="image-placeholder">Обложка кейса / hero visual</div>
      )}

      <div className="content-block">
        <h1 className="display-title">{title}</h1>
        <Prose>
          {summary.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Prose>
      </div>

      <article className="content-block">
        <h2 className="section-title">Результаты</h2>
        <Prose>
          <RichList items={results} />
        </Prose>
      </article>

      <article className="content-block">
        <h2 className="section-title">Задачи</h2>
        <Prose>
          <RichList items={tasks} />
        </Prose>
      </article>

      {sections.map((section) => (
        <article className="content-block" key={section.title}>
          <h2 className="section-title">{section.title}</h2>
          <Prose>
            {section.paragraphs?.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {section.list ? <RichList items={section.list} ordered={section.ordered} /> : null}
          </Prose>
        </article>
      ))}

      <section className="gallery">
        {gallery.map((item) => (
          <div className="gallery__item" key={item}>
            {item}
          </div>
        ))}
      </section>

      <nav className="project-nav">
        {prevCase ? <Link href={prevCase.slug}>Предыдущий кейс: {prevCase.label}</Link> : <span />}
        {nextCase ? <Link href={nextCase.slug}>Следующий кейс: {nextCase.label}</Link> : <span />}
      </nav>
    </main>
  );
}

function WorkflowPage({ workflowCase }) {
  const { publicHref, sections, title } = workflowCase;

  return (
    <main className="page case-page shell">
      <div className="content-block">
        <h1 className="display-title">{title} / Workflow</h1>
        <Prose>
          <p>
            Это внутренний слой кейса, в котором собраны контекст, промежуточные шаги, компромиссы,
            договоренности с командой и логика выбора решений.
          </p>
        </Prose>
      </div>

      {sections.map((section) => (
        <article className="content-block" key={section.title}>
          <h2 className="section-title">{section.title}</h2>
          <Prose>
            {section.paragraphs?.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {section.list ? <RichList items={section.list} ordered={section.ordered} /> : null}
          </Prose>
        </article>
      ))}

      <nav className="project-nav">
        <Link href={publicHref}>Публичный кейс</Link>
        <Link href="/#mechta">Назад к проектам</Link>
      </nav>
    </main>
  );
}

function EcommercePage() {
  return <CasePage caseData={publicCases.ecommerce} />;
}

function PartnersPage() {
  return <CasePage caseData={publicCases.partners} />;
}

function CorporatePortalPage() {
  return <CasePage caseData={publicCases.corporate} />;
}

function EcommerceWorkflowPage() {
  return <WorkflowPage workflowCase={workflowCases.ecommerce} />;
}

function PartnersWorkflowPage() {
  return <WorkflowPage workflowCase={workflowCases.partners} />;
}

function CorporatePortalWorkflowPage() {
  return <WorkflowPage workflowCase={workflowCases.corporate} />;
}

export default function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark";
    return window.localStorage.getItem(THEME_STORAGE_KEY) || "dark";
  });
  const [route, setRoute] = useState(readRoute);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  useEffect(() => {
    const syncRoute = () => setRoute(readRoute());
    window.addEventListener("popstate", syncRoute);
    return () => window.removeEventListener("popstate", syncRoute);
  }, []);

  useEffect(() => {
    if (route.pathname === "/" && route.hash) {
      requestAnimationFrame(() => {
        document.querySelector(route.hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      return;
    }

    window.scrollTo(0, 0);
  }, [route.pathname, route.hash]);

  const pathname = route.pathname;

  if (pathname === "/projects/ecommerce-redesign") {
    return (
      <>
        <TopNav theme={theme} onThemeChange={setTheme} />
        <EcommercePage />
      </>
    );
  }

  if (pathname === "/projects/partners") {
    return (
      <>
        <TopNav theme={theme} onThemeChange={setTheme} />
        <PartnersPage />
      </>
    );
  }

  if (pathname === "/projects/ecommerce-redesign/workflow") {
    return (
      <>
        <TopNav theme={theme} onThemeChange={setTheme} />
        <EcommerceWorkflowPage />
      </>
    );
  }

  if (pathname === "/projects/partners/workflow") {
    return (
      <>
        <TopNav theme={theme} onThemeChange={setTheme} />
        <PartnersWorkflowPage />
      </>
    );
  }

  if (pathname === "/projects/corporate-portal") {
    return (
      <>
        <TopNav theme={theme} onThemeChange={setTheme} />
        <CorporatePortalPage />
      </>
    );
  }

  if (pathname === "/projects/corporate-portal/workflow") {
    return (
      <>
        <TopNav theme={theme} onThemeChange={setTheme} />
        <CorporatePortalWorkflowPage />
      </>
    );
  }

  if (pathname === "/backlog") {
    return (
      <>
        <TopNav theme={theme} onThemeChange={setTheme} />
        <BacklogPage />
      </>
    );
  }

  return (
    <>
      <TopNav theme={theme} onThemeChange={setTheme} />
      <HomePage />
    </>
  );
}
