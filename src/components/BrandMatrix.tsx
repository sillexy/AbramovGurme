import { Reveal } from "@/components/Reveal";
import { directions } from "@/content/site-content";
import styles from "./BrandMatrix.module.css";

const matrixImages = {
  flagship: "/images/brand-matrix/flagship.webp",
  a1: "/images/brand-matrix/a1-lunch.webp",
  a2: "/images/brand-matrix/a2-fitness.webp",
  a3: "/images/brand-matrix/a3-bars.webp",
  a4: "/images/brand-matrix/a4-desserts.webp",
} as const;

const matrixAccents = {
  flagship: "ПРЕМИАЛЬНАЯ ГАСТРОНОМИЯ",
  a1: "350–400 ₽ ЗА НАБОР",
  a2: "СБАЛАНСИРОВАННЫЙ СОСТАВ",
  a3: "ГОТОВО К ПОДАЧЕ",
  a4: "ВЫРАЗИТЕЛЬНАЯ ПОДАЧА",
} as const;

export function BrandMatrix() {
  const [flagship, ...children] = directions;

  return (
    <section id="ecosystem" className="section ecosystem" aria-labelledby="ecosystem-title">
      <Reveal className="shell">
        <p className="eyebrow">Матрица бренда</p>
        <h2 id="ecosystem-title" className={styles.title}>Пять векторов развития коллекции</h2>

        <div className={styles.tree}>
          <a className={`${styles.node} ${styles.parent}`} href={flagship.anchor}>
            <span
              className={styles.parentImage}
              style={{ backgroundImage: `url("${matrixImages.flagship}")` }}
              aria-hidden="true"
            />
            <span className={styles.parentCopy}>
              <strong className={styles.parentTitle}>{flagship.label}</strong>
              <span className={styles.parentSummary}>Флагманское направление: {flagship.summary.toLowerCase()}</span>
              <span className={styles.metaRow}>
                <span className={`${styles.accent} ${styles.accentFlagship}`}>
                  <span className={styles.diamond} aria-hidden="true" />
                  {matrixAccents.flagship}
                </span>
                <span className={styles.arrow} aria-hidden="true">→</span>
              </span>
            </span>
          </a>

          <div className={styles.children}>
            {children.map((direction, index) => (
              <a className={styles.card} href={direction.anchor} key={direction.id}>
                <span className={styles.badge}>A{index + 1}</span>
                <span
                  className={styles.image}
                  style={{ backgroundImage: `url("${matrixImages[direction.id]}")` }}
                  aria-hidden="true"
                />
                <span className={styles.copy}>
                  <strong className={styles.cardTitle}>{direction.label}</strong>
                  <span className={styles.summary}>{direction.summary}</span>
                  <span className={styles.metaRow}>
                    <span className={styles.accent}>{matrixAccents[direction.id]}</span>
                    <span className={styles.arrow} aria-hidden="true">→</span>
                  </span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
