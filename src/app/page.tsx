import { ContactDialog } from "@/components/ContactDialog";
import { HeroCursorGlow } from "@/components/HeroCursorGlow";
import { Reveal } from "@/components/Reveal";
import { SiteHeader } from "@/components/SiteHeader";
import { SourceImage } from "@/components/SourceImage";
import { TechnologyDisclosure } from "@/components/TechnologyDisclosure";
import { benefits, contact, directions, navigation } from "@/content/site-content";

const offerContent = {
  flagship: ["Шедевры рецептуры|Сложные авторские рецептуры от шефов бренда, редкие гастрономические сочетания и деликатесные соусы.", "Селекция фермеров|Использование сертифицированных ингредиентов высокого качества от проверенных фермерских хозяйств и известных поставщиков.", "Ресторан дома|Подача в стекле превращает прием пищи дома или в офисе в элемент ресторанной культуры."],
  a1: ["Альтернатива стритфуду и промышленным столовым", "Сбалансированное питание непосредственно на рабочем месте", "Забота о самочувствии сотрудников и культуре питания", "Оптимизация производственных объемов"],
  a2: ["Расчет калорийности и баланс БЖУ", "Рацион для спортсменов и людей с активным образом жизни", "Без скрытого сахара и консервантов", "Акцент на легкоусвояемый белок, клетчатку и медленные углеводы"],
  a3: ["Меню за 1 минуту|Быстрый разогрев и подача непосредственно в стекле — без ожидания и полноценной кухни.", "Стабильность качества|Стандартизированные рецептуры снижают вариативность результата и количество ручных операций.", "Повышение маржинальности|Тезисы бренда об обороте, затратах, среднем чеке и скорости обслуживания — без собственных цифр или расчетов."],
} as const;

const imageForOffer = { flagship: "/source/page-09.png", a1: "/source/page-10.png", a2: "/source/page-11.png", a3: "/source/page-12.png" } as const;

const benefitMetrics = [
  ["До", "30%", "меньше вредных соединений"],
  ["", "0%", "консервантов и добавок"],
  ["До", "90%", "природных нутриентов сохраняется"],
  ["", "100%", "безопасный контакт с продуктом"],
] as const;

const businessCards = [
  {
    title: "Переосмысленная традиция",
    text: "Адаптация принципов домашней консервации для промышленного производства.",
    metric: null,
    cta: "Честная технология",
  },
  {
    title: "Без потерь",
    text: "Заявление бренда: стандартные списания 5-20% становятся нулевыми.",
    metric: "5–20% → 0% списаний",
    cta: "Ноль потерь",
  },
  {
    title: "Гибкий ассортимент",
    text: "Заявленные брендом преимущества в планировании, логистике, широте SKU и гибкости ценообразования.",
    metric: "50+ SKU",
    cta: "Широкая линейка",
  },
] as const;

export default function Home() {
  return (
    <div id="top">
      <a className="skip-link" href="#main-content">К основному содержимому</a>
      <SiteHeader />
      <main id="main-content">
        <section className="hero" aria-labelledby="hero-title">
          <HeroCursorGlow />
          <div className="shell hero__grid">
            <div className="hero__copy">
              <p className="eyebrow">АБРАМОВ ГУРМЕ</p>
              <h1 id="hero-title">Технологии будущего<br />в готовой еде</h1>
              <p className="hero__line">Мы говорим на языке хорошей еды</p>
              <p className="hero__description">Инновационная платформа полезного питания в стекле: готовые блюда, продуктовые направления и решения для бизнеса.</p>
              <div className="button-row"><a className="button button--copper" href="#offers">Выбрать направление</a><ContactDialog className="button button--light" /></div>
            </div>
            <div className="hero__visual"><SourceImage src="/products/hero-jar-v2.png" alt="Банка с готовым блюдом в стекле" className="hero__image" priority /></div>
          </div>
        </section>

        <section id="about" className="section about" aria-labelledby="about-title">
          <Reveal className="shell split-grid">
            <div className="section-copy">
              <p className="eyebrow">Философия бренда</p><h2 id="about-title">Честность, которую видно сразу</h2>
              <article className="outlined-copy"><h3>Приготовлено прямо в банке</h3><p>Мы взяли лучшие продукты и приготовили их прямо в банке - это вкусно и полезно!</p></article>
              <article className="outlined-copy"><h3>Абсолютная открытость</h3><p>Стекло позволяет оценить структуру, свежесть и эстетику блюда еще до того как вы открыли блюдо. Гарантия доверия.</p></article>
              <p className="serif-note">Премиальная экоупаковка</p>
            </div>
            <SourceImage src="/source/page-02-user.png" alt="Готовое блюдо в прозрачной стеклянной банке" className="editorial-image source-image--right" />
          </Reveal>
        </section>

        <section id="benefits" className="section benefits" aria-labelledby="benefits-title">
          <Reveal className="shell">
            <div className="benefits__heading"><p className="eyebrow">Гастрономическая архитектура</p><h2 id="benefits-title">Чистота вкуса и технологическая польза</h2><p>Мы применяем современные технологии, чтобы сохранить вкус, структуру и максимальную пользу каждого ингредиента.</p></div>
            <div className="benefit-grid">{benefits.map(([title, text], index) => { const [prefix, value, detail] = benefitMetrics[index]; return <article className="benefit-card" key={title}><div className="benefit-card__heading"><BenefitIcon index={index} /><h3>{title}</h3></div><p>{text}</p><div className="benefit-card__metric"><span>{prefix}</span><strong>{value}</strong><small>{detail}</small></div></article>; })}</div>
            <p className="benefits__note">Чистые рецептуры, современные технологии и стекло —<br />для безупречного вкуса и пользы каждый день.</p>
          </Reveal>
        </section>

        <section id="ecosystem" className="section ecosystem" aria-labelledby="ecosystem-title">
          <Reveal className="shell"><p className="eyebrow">Матрица бренда</p><h2 id="ecosystem-title">Пять векторов развития коллекции</h2>
            <div className="flagship-band"><span>Абрамов Гурме</span><p>Флагманское направление: сложные ресторанные рецептуры и редкие деликатесные сочетания.</p></div>
            <div className="ecosystem-grid">{directions.slice(1).map((direction) => <article key={direction.id}><span>{direction.label}</span><p>{direction.summary}</p></article>)}</div>
          </Reveal>
        </section>

        <section id="offers" className="section offers" aria-label="Подробные направления">
          <div className="shell offers__inner">
            {directions.map((direction, index) => {
              if (direction.id === "a4") return <DessertOffer direction={direction} key={direction.id} />;
              const items = offerContent[direction.id];
              return <Reveal className={`offer ${index % 2 ? "offer--reverse" : ""}`} key={direction.id}><div className="offer__copy" id={direction.id}><p className="eyebrow">Направление {String(index + 1).padStart(2, "0")}</p><h2>{direction.label}</h2><h3>{direction.title}</h3><div className="offer__details">{items.map((item) => { const [heading, text] = item.split("|"); return <p key={heading}>{text ? <><strong>{heading}.</strong> {text}</> : heading}</p>; })}</div>{direction.id === "a1" ? <p className="offer__format">Суп + горячее блюдо + салат<br /><span>Продается как один SKU.</span></p> : null}{direction.id === "a3" ? <p className="offer__format">A3 превращает любую фуд-точку без кухни в полноценный гастрономический сервис.</p> : null}{direction.price ? <p className="price">{direction.price}</p> : null}</div><SourceImage src={imageForOffer[direction.id as keyof typeof imageForOffer]} alt="Документальная фотография продукции Абрамов Гурме" className={`offer__image source-image--right ${
direction.id === "flagship" ||
direction.id === "a1" ||
direction.id === "a2" ||
direction.id === "a3"
  ? "offer__image--jar"
  : ""
}`} /></Reveal>;
            })}
          </div>
        </section>

        <MenuCycle />

        <section id="technology" className="section technology" aria-labelledby="technology-title"><Reveal className="shell"><p className="eyebrow">Технология приготовления</p><h2 id="technology-title">Технология приготовления</h2><p className="technology__intro">Длительный срок годности блюд достигается за счет стерилизации в аппаратах высокого давления. Температура и время обработки подбираются для каждого вида продукта.</p><div className="technology-steps">{[["01", "Нагрев и выдержка", "Температура и давление постепенно повышаются до заданных значений. Продукт выдерживается в режиме, предусмотренном для конкретного типа блюда."], ["02", "Стерилизация", "Высокая температура и давление разрушают белковые структуры микроорганизмов, включая термостойкие споры бактерий."], ["03", "Охлаждение", "Температура и давление плавно снижаются, чтобы предотвратить деформацию продуктов и стеклянной тары."]].map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div><TechnologyDisclosure><ul><li>Нагрев продукта выше 89°C, обычно до 115-135°C.</li><li>Уничтожение микроорганизмов зависит от температуры и длительности воздействия.</li><li>Индивидуальные режимы определяются с учетом pH, консистенции, объема тары и потенциальной термостойкости микроорганизмов.</li><li>Герметичность упаковки обязательна; нарушение отражается на состоянии клапана/крышки.</li></ul></TechnologyDisclosure></Reveal></section>

        <section id="safety" className="section safety" aria-labelledby="safety-title"><HeroCursorGlow className="safety-cursor-glow" containerSelector="#safety" /><Reveal className="shell split-grid"><div><p className="eyebrow">Срок хранения, безопасность и упаковка</p><h2 id="safety-title">Срок хранения до 1 года: 0% списаний</h2><div className="safety-copy"><p>Промышленный процесс обеспечивает предсказуемый результат и длительный срок хранения. После обработки и герметизации продукт может храниться при комнатной температуре.</p><p>Стекло прозрачно и химически нейтрально. При нарушении герметичности клапан/крышка изменяет состояние и вздувается.</p><p>Технология подтверждена документально: протоколы испытаний, свидетельства соответствия и санитарно-эпидемиологические заключения.</p></div></div><div className="safety-number"><strong>365</strong><span>дней</span><p>Срок хранения позволяет поддерживать более полную выкладку, планировать сезонность, оптимизировать оборот и расширять ассортимент.</p></div></Reveal></section>

        <section id="business" className="section business" aria-labelledby="business-title"><Reveal className="shell"><p className="eyebrow">B2B-партнерство и дистрибуция</p><h2 id="business-title">Партнёрство без риска</h2><div className="business-grid">{businessCards.map(({ title, text, metric, cta }, index) => <article className="business-card" key={title}><BusinessIcon index={index} /><h3>{title}</h3><span className="business-card__divider" aria-hidden="true" /><p>{text}</p>{metric ? <strong className="business-card__metric">{metric}</strong> : null}<span className="business-card__cta"><BusinessTagIcon index={index} />{cta}</span></article>)}</div></Reveal></section>

        <section id="micromarket" className="section micromarket" aria-labelledby="micromarket-title"><Reveal className="shell split-grid"><div className="section-copy"><p className="eyebrow">Коммерческая архитектура</p><h2 id="micromarket-title">Высокоэффективная розничная модель на 1 кв. метре</h2><div className="micromarket-list"><article><h3>Минимум площади — максимум маржи</h3><p>Заявленная брендом модель умного автоматизированного самообслуживания занимает до <strong>1,2 м²</strong>.</p></article><article><h3>Отсутствие инфраструктурных барьеров</h3><p>Не требуется вытяжка, подключение воды, сложные инженерные согласования или капитальное строительство. <strong>Нужна только электрическая розетка.</strong></p></article><article><h3>Запуск сети за 24 часа</h3><p>Исходное заявление бренда о монтаже, подключении к цифровой экосистеме, быстром выходе на окупаемость и минимальном пороге стартовых инвестиций.</p></article><p className="micromarket-load">До 420 порций на один холодильник микромаркета</p></div></div><SourceImage src="/source/page-14.jpg" alt="Автономный микромаркет Абрамов Гурме" className="editorial-image source-image--right" /></Reveal></section>

      </main>
      <footer className="site-footer"><div className="shell site-footer__grid"><div className="footer-contact"><p><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M20 21a8 8 0 0 0-16 0M12 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" /></svg>{contact.name}</p><a href={contact.phoneHref}><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M5 4h3l2 5-2 1.5a14 14 0 0 0 5.5 5.5L15 14l5 2v3c0 1.1-.9 2-2 2C10.3 21 3 13.7 3 6c0-1.1.9-2 2-2Z" /></svg>{contact.phone}</a><a href={contact.emailHref}><svg aria-hidden="true" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></svg>{contact.email}</a></div><p className="copyright">© {new Date().getFullYear()} Абрамов Гурме</p></div></footer>
    </div>
  );
}

function BenefitIcon({ index }: { index: number }) {
  const paths = [
    <><path d="M12 3v11.5a4.5 4.5 0 1 0 4 0V3a4 4 0 0 0-8 0v11.5a4.5 4.5 0 1 0 4 0" /><path d="M12 8v10" /><path d="M19 6h2M19 10h2M19 14h2" /></>,
    <><path d="M12 3s6 7 6 12a6 6 0 0 1-12 0c0-5 6-12 6-12Z" /><path d="M9.5 17c.5 1.4 1.4 2.2 2.8 2.5" /></>,
    <><circle cx="7" cy="17" r="2.5" /><circle cx="17" cy="7" r="2.5" /><circle cx="19" cy="18" r="2.5" /><path d="m9 15.5 6-7M9.5 17h7M18 9l1 6.5" /></>,
    <><path d="M9 4h6M10 4v3l-2 2v11h8V9l-2-2V4" /><path d="M8 10h8M11 14h2" /></>,
  ];
  return <span className="benefit-card__icon" aria-hidden="true"><svg viewBox="0 0 24 24">{paths[index]}</svg></span>;
}

function BusinessIcon({ index }: { index: number }) {
  const art = [
    <><path d="M17 21h30l-2 25H19l-2-25Z" /><path d="M15 21h34M18 15h28v6H18zM25 29v10h14" /><path d="M49 43c5-1 8-5 9-10-5 .5-8 3-9 10ZM49 43c-2-5-5-8-9-10 0 5 3 9 9 10ZM49 43v9" /></>,
    <><path d="M16 48V18l14 14 9-9 11 11" /><path d="M16 48h36M23 48V31h8v17M35 48V38h8v10M47 48V34h5v14" /></>,
    <><path d="M14 42h36v9H14zM18 24h14v14H18zM32 30h14v14H32zM24 17h14v13H24z" /><path d="M14 47h36M25 24v5M39 30v5M31 17v5" /></>,
  ];

  return <span className="business-card__icon" aria-hidden="true"><svg viewBox="0 0 64 64">{art[index]}</svg></span>;
}

function BusinessTagIcon({ index }: { index: number }) {
  const art = [
    <><path d="M18 4C11 4 5 8 5 16c6 0 11-4 13-12ZM5 16c3-2 6-5 9-9" /></>,
    <><path d="M5 18V6h10v12H5ZM15 11h4v7h-4M8 15h4M19 5v3M19 12v3" /></>,
    <><path d="m12 4 7 4v8l-7 4-7-4V8l7-4ZM5 8l7 4 7-4M12 12v8" /></>,
  ];

  return <svg viewBox="0 0 24 24" aria-hidden="true">{art[index]}</svg>;
}

function DessertOffer({ direction }: { direction: (typeof directions)[number] }) {
  return <Reveal className="offer offer--dessert"><div className="offer__copy" id="a4"><p className="eyebrow">Направление 05</p><h2>{direction.label}</h2><h3>{direction.title}</h3><p className="dessert-intro">Воздушное суфле, ягодно-фруктовый мусс-пудинг, «Наполеон», «Медовик», брауни, тирамису, панна-котта и прозрачное ягодное желе.</p><p>Стекло сохраняет геометрию, воздушную текстуру, свежесть и аромат без химических стабилизаторов.</p><p className="price">{direction.price}</p></div><SourceImage src="/products/dessert-jar.png" alt="Слоёный десерт в стеклянной банке" className="dessert-art" /></Reveal>;
}

function MenuCycle() {
  const dayparts = [
    ["Завтрак", "7:00 – 10:00", "Каши длительного томления на альтернативном молоке, суфле и легкие творожные запеканки.", "Легкий старт дня"],
    ["Обед", "12:00 – 15:00", "Первые блюда, густые бульоны и сытные мясные блюда со сложными крупами.", "Суп + горячее"],
    ["Ужин", "18:00 – 21:00", "Диетическая птица, белая рыба с легкими авторскими соусами и овощи.", "Легкий вечерний рацион"],
    ["Ночной бар", "21:00 – 01:00", "Легкие салаты, закуски и десерты.", "Для позднего спроса"],
  ] as const;

  return <section id="menu" className="section menu" aria-labelledby="menu-title"><Reveal className="shell"><p className="eyebrow">Гастрономический цикл</p><h2 id="menu-title">Сбалансированное меню для любого времени суток</h2><div className="dayparts">{dayparts.map(([title, time, text, tag], index) => <article key={title}><div className="daypart-icon"><MealIcon index={index} /></div><h3>{title}</h3><time>{time}</time><p>{text}</p><DaypartTag index={index} label={tag} /></article>)}</div><div className="three-jars"><div className="three-jars__copy"><div className="three-jars__number" aria-hidden="true">3</div><span>Цикличная ротация меню на 7 дней</span><strong>Три баночки на день</strong><p>Суп, горячее блюдо и салат.</p></div><JarTrio /></div></Reveal></section>;
}

function MealIcon({ index }: { index: number }) {
  const art = [<><path d="M5 14h14l-1 4H6l-1-4Z" /><path d="M8 20h8M9 10c-2-2 1-3 0-5M13 10c-2-2 1-3 0-5M17 10c-2-2 1-3 0-5" /></>, <><path d="M4 14h16M6 14c.5 4 3 6 6 6s5.5-2 6-6" /><path d="M5 11c2-3 4-3 7 0 2-3 5-3 7 0" /><path d="M8 8c-1-1 1-2 0-4M14 8c-1-1 1-2 0-4" /></>, <><path d="M8 4v16M5.5 4v6c0 2 5 2 5 0V4M16 4v16M16 4c3 2 3 8 0 9" /></>, <><path d="M8 4v16M5.5 4v6c0 2 5 2 5 0V4M16 6a6 6 0 1 0 3 11.2A6 6 0 0 1 16 6Z" /><path d="m19 5 .7 1.5L21 7l-1.3.5L19 9l-.7-1.5L17 7l1.3-.5L19 5Z" /></>];
  return <svg viewBox="0 0 24 24" aria-hidden="true">{art[index]}</svg>;
}

function DaypartTag({ index, label }: { index: number; label: string }) {
  const art = [<path d="M18 4C11 4 5 8 5 16c6 0 11-4 13-12ZM5 16c3-2 6-5 9-9" />, <><path d="M5 11h14l-1 7H6l-1-7Z" /><path d="M8 11V8h8v3M9 18v2M15 18v2" /></>, <><path d="M18 4C11 4 5 8 5 16c6 0 11-4 13-12ZM5 16c3-2 6-5 9-9" /><path d="M17 17h3" /></>, <><path d="M14 4a7 7 0 1 0 5.8 10.9A7 7 0 0 1 14 4Z" /><path d="m19 4 .5 1.2L21 5.7l-1.5.5L19 7.5l-.5-1.3-1.5-.5 1.5-.5L19 4Z" /></>];
  return <span className="daypart-tag"><svg viewBox="0 0 24 24" aria-hidden="true">{art[index]}</svg>{label}</span>;
}

function JarTrio() {
  return <svg className="three-jars__art" viewBox="0 0 360 190" aria-hidden="true"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M22 156h316" opacity=".25" /><g transform="translate(32 20)"><rect x="4" y="13" width="72" height="102" rx="10" /><path d="M0 13h80M4 4h72v9M18 42h44v42H18zM26 66h28M28 56c-2-2 1-3 0-6M40 56c-2-2 1-3 0-6M52 56c-2-2 1-3 0-6" /><text x="40" y="137" textAnchor="middle">СУП</text></g><g transform="translate(140 13)"><rect x="4" y="13" width="72" height="109" rx="10" /><path d="M0 13h80M4 4h72v9M18 44h44v42H18zM24 72h32M26 63c4-10 12-10 20 0M50 63c4-10 8-10 10 0" /><text x="40" y="145" textAnchor="middle">ГОРЯЧЕЕ</text></g><g transform="translate(248 20)"><rect x="4" y="13" width="72" height="102" rx="10" /><path d="M0 13h80M4 4h72v9M18 42h44v42H18zM24 67h32M30 61c6-11 14-11 20 0M33 58c-3-4 1-6 4-4M48 58c3-4-1-6-4-4" /><text x="40" y="137" textAnchor="middle">САЛАТ</text></g></g></svg>;
}