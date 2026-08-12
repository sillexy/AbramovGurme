export type Direction = {
  id: "flagship" | "a1" | "a2" | "a3" | "a4";
  anchor: string;
  label: string;
  title: string;
  price?: string;
  summary: string;
};

export type NavigationItem = {
  href: string | null;
  label: string;
};

export type ContactPerson = {
  role: string;
  name: string;
  phone: string;
  phoneHref: string;
};

export const navigation: readonly NavigationItem[] = [
  { href: "#about", label: "О продукте" },
  { href: "#offers", label: "Направления" },
  { href: "#technology", label: "Технология" },
  { href: "#business", label: "Для бизнеса" },
  { href: null, label: "Дилеры" },
] as const;

export const contacts: readonly ContactPerson[] = [
  {
    role: "Генеральный директор",
    name: "Артур Аслаев",
    phone: "+7 (999) 999-99-99",
    phoneHref: "tel:+79999999999",
  },
  {
    role: "Исполнитель",
    name: "Ирина Фалева",
    phone: "+7 (999) 999-99-99",
    phoneHref: "tel:+79999999999",
  },
] as const;

/* Compatibility object for the existing footer markup. */
export const contact = {
  name: contacts[0].name,
  phone: contacts[0].phone,
  phoneHref: contacts[0].phoneHref,
  email: contacts[1].phone,
  emailHref: contacts[1].phoneHref,
} as const;

export const directions: Direction[] = [
  {
    id: "flagship",
    anchor: "#flagship",
    label: "Абрамов Гурме",
    title: "Высокое гастрономическое искусство",
    summary: "Сложные ресторанные рецептуры и редкие деликатесные сочетания.",
  },
  {
    id: "a1",
    anchor: "#a1",
    label: "Ланчи",
    title: "Корпоративные ланчи новой формации",
    price: "350-400 рублей за набор",
    summary: "Полноценные обеды для рабочего дня в понятном формате.",
  },
  {
    id: "a2",
    anchor: "#a2",
    label: "Фитнес",
    title: "Здоровый баланс и интеллектуальный фитнес-рацион",
    price: "250-500 рублей за блюдо",
    summary: "Выверенный рацион для активного образа жизни.",
  },
  {
    id: "a3",
    anchor: "#a3",
    label: "Для баров",
    title: "Кухня без затрат и повара",
    price: "250-500 рублей за блюдо",
    summary: "Гастрономическое решение для фуд-точки без кухни.",
  },
  {
    id: "a4",
    anchor: "#a4",
    label: "Десерты",
    title: "Авторские десерты в стекле: искусство текстуры",
    price: "200-500 рублей за блюдо",
    summary: "Воздушные и многослойные десертные формы.",
  },
];

export const benefits = [
  ["Исключение обжарки", "Полный отказ от жарки на масле устраняет канцерогены и трансжиры, делая продукт эталоном чистого ежедневного ЗОЖ-рациона."],
  ["Чистая аутентичность", "Технология длительного бережного томления в собственном соку и вакуумная герметизация обеспечивают свежесть без консервантов."],
  ["Сбережение нутриентов", "Ювелирно выверенный щадящий температурный режим сохраняет до 90% природных витаминов, макро- и микроэлементов."],
  ["Химическая нейтральность", "Стекло нейтрально, поэтому, в отличие от традиционной упаковки, полностью исключен контакт горячей пищи с пластиком, что предотвращает выделение микропластика и фталатов."],
] as const;
