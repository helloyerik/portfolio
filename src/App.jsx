import { Fragment, useEffect, useState } from "react";
import mechtaKzLogo from "./assets/mechta-kz-logo.png";
import ecommerceCover from "./assets/projects/ecommerce-cover.png";
import partnersCover from "./assets/projects/partners-cover.png";
import pricingPreview from "./assets/projects/pricing-preview.jpg";
import corporatePreview from "./assets/projects/corporate-preview.jpg";
import freelancePreview from "./assets/projects/freelance-preview.jpg";
import bmcPreview from "./assets/projects/bmc-preview.jpg";

const THEME_STORAGE_KEY = "portfolio-theme";
const CASE_ORDER = [
  { slug: "/projects/ecommerce-redesign", label: "Редизайн e-commerce" },
  { slug: "/projects/partners", label: "Partners" },
];

function readRoute() {
  if (typeof window === "undefined") {
    return { pathname: "/", hash: "" };
  }

  return {
    pathname: window.location.pathname.replace(/\/+$/, "") || "/",
    hash: window.location.hash || "",
  };
}

const mechtaProjects = [
  {
    slug: "/projects/ecommerce-redesign",
    title: "Редизайн e-commerce",
    meta: ["Главный кейс", "2025 — X"],
    summary: [
      "Редизайн и оптимизация воронки: страница товара, корзина, оформление заказа, постчекаут и мои заказы.",
      "Внутри этого направления отдельным встроенным слоем шли гарантийные услуги.",
    ],
    facts: ["+X% конверсии", "Progressive design"],
    cover: ecommerceCover,
    preview: false,
  },
  {
    slug: "/projects/partners",
    title: "Partners",
    meta: ["Internal product", "MVP за месяц"],
    summary: [
      "Внутренний сервис для обработки предложений поставщиков и партнеров. Проект про систематизацию, скорость работы менеджеров и масштабируемость.",
    ],
    facts: ["В X раз меньше дублей", "Системность"],
    cover: partnersCover,
    preview: false,
  },
  {
    slug: "",
    title: "Ценники",
    meta: ["Preview"],
    summary: [
      "Сервис для ускорения замены ценников и снижения зависимости от legacy-инструментов и лишних ручных операций.",
    ],
    facts: ["Скоро"],
    cover: pricingPreview,
    preview: true,
  },
  {
    slug: "",
    title: "Корпоративный портал",
    meta: ["Preview"],
    summary: ["Внутренний продукт, который будет оформлен в кейс позже."],
    facts: ["Скоро"],
    cover: corporatePreview,
    preview: true,
  },
];

const freelanceProjects = [
  {
    slug: "",
    title: "Фриланс-проекты",
    meta: ["Архив", "2023 — 2025"],
    summary: [
      "Набор клиентских интерфейсов и digital-проектов, на которых я нарабатывал скорость, визуальную насмотренность и самостоятельность в работе.",
    ],
    facts: ["Скоро"],
    cover: freelancePreview,
    preview: true,
  },
];

const bmcProjects = [
  {
    slug: "",
    title: "Агентский опыт",
    meta: ["Архив", "2024"],
    summary: [
      "Период проектной занятости в агентской среде с более быстрым и разноформатным ритмом задач. В новой версии сайта этот блок пока остается кратким.",
    ],
    facts: ["Скоро"],
    cover: bmcPreview,
    preview: true,
  },
];

const backlogSections = [
  {
    title: "Нераспределенный intro-контент",
    paragraphs: [
      "Работал над e-commerce, внутренними сервисами и инфраструктурными продуктами с фокусом на конверсию, системность и качество реализации.",
      "Особенно силен в задачах на стыке UX, бизнеса, ограничений архитектуры и командной delivery-среды. Сейчас главный акцент в портфолио — опыт в Mechta.kz.",
    ],
  },
  {
    title: "Фриланс",
    paragraphs: [
      "До основного продуктового опыта в крупной компании я несколько лет работал на фрилансе. Это был период, в котором я нарабатывал скорость, визуальную насмотренность, навык самостоятельного ведения проектов и привычку быстро доводить идеи до финального результата.",
      "В новой версии портфолио этот слой нужен не как главный акцент, а как архивная часть траектории. Он показывает, откуда вырос текущий подход, но не конкурирует с более сильными и зрелыми кейсами из Mechta.kz.",
    ],
    list: ["Период: июль 2023 — июль 2025", "Формат: проектная занятость · онлайн"],
  },
  {
    title: "BMC Group",
    paragraphs: [
      "Период работы в агентской среде, где задачи шли в более быстром и разноформатном ритме. Этот опыт важен как часть карьерного пути, но в текущей версии сайта он показывается кратко и без углубления во внутреннюю структуру отдельных кейсов.",
    ],
    list: ["Период: февраль 2024 — август 2024", "Формат: проектная занятость · гибрид"],
  },
  {
    title: "E-commerce: сырые материалы",
    list: [
      "страница товара",
      "корзина",
      "оформление заказа",
      "post-checkout",
      "мои заказы",
      "гарантийные услуги как встроенный мини-проект",
      "скриншоты и дополнительные материалы будут добавлены позже",
    ],
  },
];

const ecommerceSections = [
  {
    title: "Что получилось",
    list: [
      "увеличили конверсию в покупку на `X%`",
      "повысили переход из корзины в чекаут на `X%`",
      "ускорили прохождение сценария на `X%`",
      "снизили обращения в поддержку в `X раз`",
      "сократили количество ошибок и тупиковых кейсов на этапе разработки",
      "заложили фундамент для масштабирования воронки",
    ],
  },
  {
    title: "Что я делал",
    list: [
      "прошел по всей воронке от первого визита до отслеживания заказа",
      "участвовал в выявлении проблемных точек продукта",
      "анализировал конкурентов и референсы",
      "проектировал новые сценарии и экраны",
      "собирал кликабельные прототипы",
      "синхронизировался с командами и руководителями",
      "переиспользовал и развивал компоненты",
    ],
  },
];

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

function CasePage({
  slug,
  title,
  meta,
  intro,
  sections,
  gallery,
  heroImage,
}) {
  const currentIndex = CASE_ORDER.findIndex((item) => item.slug === slug);
  const prevCase = currentIndex >= 0 ? CASE_ORDER[(currentIndex - 1 + CASE_ORDER.length) % CASE_ORDER.length] : null;
  const nextCase = currentIndex >= 0 ? CASE_ORDER[(currentIndex + 1) % CASE_ORDER.length] : null;

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
          {intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Prose>
      </div>

      {sections.map((section) => (
        <article className="content-block" key={section.title}>
          <h2 className="section-title">{section.title}</h2>
          <Prose>
            {section.paragraphs?.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {section.list ? (
              <div className="line-list">
                {section.list.map((item, index) => (
                  <Fragment key={item}>
                    {index > 0 ? <br /> : null}
                    <span>{item}</span>
                  </Fragment>
                ))}
              </div>
            ) : null}
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

function EcommercePage() {
  return (
    <CasePage
      slug="/projects/ecommerce-redesign"
      title="Редизайн e-commerce"
      meta={["2025 — X", "Продуктовый дизайнер", "B2C e-commerce"]}
      heroImage={ecommerceCover}
      intro={[
        "Этот проект был посвящен редизайну и оптимизации ключевой части e-commerce-воронки. Цель состояла в том, чтобы повысить конверсию на финальных этапах, упростить клиентский путь и собрать разрозненные сценарии покупки в более понятную и связанную систему.",
        "Работа охватывала не одну страницу, а последовательность экранов и состояний: страницу товара, корзину, оформление заказа, детали заказа после покупки и список всех заказов.",
        "Особенность проекта была в том, что редизайн воронки начался с конца, с post-checkout, и из-за этого нужно было проектировать не отдельные экраны, а фундамент для будущих изменений.",
      ]}
      sections={[
        { title: "Что получилось", list: ecommerceSections[0].list },
        { title: "Что я делал", list: ecommerceSections[1].list },
        {
          title: "Контекст и проблема",
          paragraphs: [
            "Мы прошлись по всей воронке: от первого визита на сайт до подтверждения и отслеживания заказа. В результате выявили наиболее проблемные точки: главная, страница товара, корзина, оформление заказа, детали заказа и список заказов.",
            "Основная сложность заключалась в том, чтобы заложить фундамент для будущих изменений, связать разрозненные сценарии в единый поток и охватить все процессы, которые завязаны на микросервисы, статусы и состояния.",
            "Многие ранние концепции не могли дойти до продакшна в исходном виде из-за ограничений архитектуры и плотной зависимости бизнес-процессов от других команд.",
          ],
        },
        {
          title: "Ключевые решения",
          paragraphs: ["Наиболее заметные изменения были в корзине и checkout-логике:"],
          list: [
            "закрепили окно checkout, чтобы CTA оставался под рукой",
            "уменьшили визуальный шум за счет сокращения текста и лишних заголовков",
            "ушли от табличного формата корзины",
            "подсветили подарки, скидочные механики и бонусы",
            "добавили аксессуары, гарантии и услуги как релевантный апселл",
            "связали аксессуары с товарами в корзине",
          ],
        },
        {
          title: "Гарантийные услуги",
          paragraphs: [
            "Отдельным встроенным мини-проектом внутри e-commerce-направления стали гарантийные услуги. Они влияли на средний чек, апселл и логику сопутствующих товаров.",
          ],
          list: [
            "переосмыслили формат показа гарантий",
            "проработали карточки тарифов и более детализированную подачу",
            "упростили структуру описания услуг, чтобы уменьшить хардкод",
            "разобрали corner cases, включая услуги на несколько одинаковых товаров",
          ],
        },
      ]}
      gallery={[
        "Скриншот страницы товара",
        "Скриншот корзины",
        "Скриншот checkout",
        "Скриншот post-checkout / мои заказы",
      ]}
    />
  );
}

function PartnersPage() {
  return (
    <CasePage
      slug="/projects/partners"
      title="Partners"
      meta={["Internal product", "Продуктовый дизайнер", "MVP за месяц"]}
      heroImage={partnersCover}
      intro={[
        "`Partners` — сервис для обработки предложений от поставщиков и партнеров для последующей перепродажи в магазине и на сайте. До этого компания тестировала решение на базе `1С`, но отказалась от него из-за высокого риска ошибок, сложности масштабирования и слабой управляемости процесса.",
        "Задача состояла в том, чтобы собрать отдельный сервис, который работает параллельно с основным каталогом интернет-магазина и помогает сотрудникам быстрее и точнее обрабатывать входящие предложения.",
        "Для меня это был кейс про системность, внутренние интерфейсы и выстраивание понятного процесса в сложной корпоративной среде.",
      ]}
      sections={[
        {
          title: "Что получилось",
          list: [
            "упростили процесс обработки входящих предложений",
            "сократили количество дублей в основном каталоге в `X раз`",
            "ускорили time-to-market за счет reuse компонентов",
            "запустили MVP за месяц",
            "снизили количество ручных ошибок в процессе обработки",
          ],
        },
        {
          title: "Что я делал",
          list: [
            "участвовал в дискавери с командой",
            "проводил анализ конкурентов",
            "искал референсы внутренних интерфейсов",
            "структурировал пользовательский процесс",
            "собирал кликабельные прототипы",
            "презентовал концепт команде и категорийным менеджерам",
            "писал документацию и сопровождал реализацию",
          ],
        },
        {
          title: "Контекст и проблема",
          paragraphs: [
            "До запуска сервиса предложения от партнеров обрабатывались в плохо масштабируемой среде. Из-за отсутствия регламента и слабой структуры процесса в каталоге появлялись дубли, опечатки и десятки вариаций одного и того же товара.",
          ],
          list: [
            "входящие предложения создавали дубли в `1С`",
            "было сложно искать и сравнивать предложения",
            "не было понятной логики приоритизации",
            "онбординг сотрудников в `1С` был сложным",
            "процесс было трудно масштабировать",
          ],
        },
        {
          title: "Исследование и подход",
          paragraphs: [
            "После получения задачи мы побрейнштормили с менеджером, аналитиком, backend и frontend-разработчиками контекст, ограничения и ожидания. Вместе с аналитиком проводили опрос категорийных менеджеров, чтобы понять реальные боли и точки роста.",
            "В ходе ресерча стало ясно, что процесс похож на работу с входящими сообщениями: из большого потока нужно быстро выделить потенциально интересные предложения, сохранить их, оценить и перевести в следующий этап.",
          ],
        },
        {
          title: "Внедренные решения",
          list: [
            "добавили калькулятор маржинальности",
            "дали возможность сохранять предложения в избранные",
            "добавили поиск по названию, цене, партнеру и категории",
            "выстроили более понятную структуру движения предложения по процессу",
            "использовали существующие компоненты дизайн-системы, чтобы ускорить запуск",
          ],
        },
      ]}
      gallery={[
        "Скриншот списка предложений",
        "Скриншот состояния отбора / избранного",
        "Скриншот рабочего сценария",
      ]}
    />
  );
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
