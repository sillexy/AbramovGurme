# Safety Copy Spacing Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Выровнять отступы над и под заголовком в секции срока хранения.

**Architecture:** Изменить одно декларативное CSS-правило в существующей секции `.safety`. JSX и адаптивная сетка не затрагиваются.

**Tech Stack:** Next.js 16, React 19, CSS.

## Global Constraints

- Изменить только `src/app/globals.css`.
- Сохранить существующие правила для мобильной вёрстки.

---

### Task 1: Отступ текстового блока

**Files:**
- Modify: `src/app/globals.css:128`
- Test: визуальная проверка `http://localhost:3000/#safety`

**Interfaces:**
- Consumes: существующий контейнер `.safety-copy`.
- Produces: равный отступ между заголовком и текстовым блоком.

- [ ] **Step 1: Зафиксировать ожидаемое поведение**

Нижний интервал у `h2#safety-title` должен быть равен текущему интервалу между `.safety .eyebrow` и этим заголовком.

- [ ] **Step 2: Изменить CSS**

```css
.safety-copy { margin-top: 24px; }
```

- [ ] **Step 3: Проверить страницу**

Открыть `http://localhost:3000/#safety` и сравнить интервалы над и под заголовком при ширине 1294px.
