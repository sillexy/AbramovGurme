import { HeroCursorGlow } from "@/components/HeroCursorGlow";
import { SourceImage } from "@/components/SourceImage";

function StatIcon({ type }: { type: "jar" | "book" | "leaf" }) {
  if (type === "jar") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M17 6h14v6H17zM15 12h18l2 5v23H13V17l2-5Z" />
        <path d="M17 20h14M18 26c5 0 8 2 12 6M30 25c-2 5-5 8-10 9" />
      </svg>
    );
  }

  if (type === "book") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M5 9c7 0 13 2 19 7v26c-6-5-12-7-19-7V9Zm38 0c-7 0-13 2-19 7v26c6-5 12-7 19-7V9Z" />
        <path d="M24 16v26" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M40 8C25 9 13 17 9 32c7 3 15 2 21-3 7-6 9-14 10-21Z" />
      <path d="M10 39c5-9 12-16 23-23" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M24 5c6 5 12 7 18 8v11c0 10-6 16-18 20C12 40 6 34 6 24V13c6-1 12-3 18-8Z" />
      <path d="m16 25 5 5 11-12" />
    </svg>
  );
}

export function HeroReference() {
  return (
    <section className="hero hero--reference" aria-labelledby="hero-title">
      <HeroCursorGlow />
      <div className="shell hero__grid">
        <div className="hero__copy">
          <p className="eyebrow">АБРАМОВ ГУРМЕ</p>
          <h1 id="hero-title">Технологии будущего<br />в готовой еде</h1>
          <p className="hero__line">Мы говорим на языке хорошей еды</p>
          <p className="hero__description">Инновационная платформа полезного питания в стекле: готовые блюда, продуктовые направления и решения для бизнеса.</p>
          <div className="button-row">
            <a className="button button--copper" href="#offers">Выбрать направление</a>
            <a className="button hero__technology-link" href="#technology">Смотреть технологию <span aria-hidden="true">→</span></a>
          </div>
          <div className="hero__stats" aria-label="Ключевые преимущества">
            <div className="hero-stat">
              <StatIcon type="jar" />
              <strong>5</strong>
              <span>направлений<small>для любых задач</small></span>
            </div>
            <div className="hero-stat">
              <StatIcon type="book" />
              <strong>50+</strong>
              <span>рецептов<small>на любой вкус</small></span>
            </div>
            <div className="hero-stat">
              <StatIcon type="leaf" />
              <strong>0%</strong>
              <span>консервантов<small>и искусственных добавок</small></span>
            </div>
          </div>
        </div>
        <div className="hero__visual">
          <SourceImage src="/products/hero-jar-v2.png" alt="Банка с готовым блюдом в стекле" className="hero__image" priority />
          <div className="hero__safety-card">
            <div className="hero__safety-icon"><ShieldIcon /></div>
            <div className="hero__safety-copy">
              <strong>Безопасно. Натурально. В стекле.</strong>
              <div><span>Срок хранения<br />до 1 года</span><span>Сделано в России</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
