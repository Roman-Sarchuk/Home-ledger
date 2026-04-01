import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  BarChart3,
  ShieldCheck,
  Sparkles,
  Wallet,
  TrendingUp,
  PieChart,
  ReceiptText,
  ArrowUpRight,
  ArrowDownRight,
  Clock3,
} from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import { Button } from "@/components/ui/button";

const GITHUB_URL = "https://github.com/Roman-Sarchuk/Home-ledger";
const LINKEDIN_URL = "https://www.linkedin.com/in/roman-sarchuk-267102323/";

const FEATURES = [
  {
    icon: BarChart3,
    color: "sky",
    title: "Аналітика без хаосу",
    desc: "Динаміка витрат та доходів за тиждень і місяць в одному зрозумілому огляді.",
  },
  {
    icon: ShieldCheck,
    color: "emerald",
    title: "Безпека доступу",
    desc: "Захищена авторизація та приватні дані тільки для вашого акаунту.",
  },
  {
    icon: PieChart,
    color: "amber",
    title: "Категорії під ваш стиль",
    desc: "Гнучкі категорії для щоденних витрат, підписок, подорожей чи будь-яких інших цілей.",
  },
  {
    icon: Wallet,
    color: "violet",
    title: "Усі рахунки в одному місці",
    desc: "Картки, готівка та заощадження видно одразу, без перемикань між сервісами.",
  },
];

const colorMap: Record<string, { border: string; bg: string; icon: string; glow: string }> = {
  sky:     { border: "border-sky-500/25",    bg: "bg-sky-500/8",    icon: "text-sky-500",    glow: "shadow-sky-500/20" },
  emerald: { border: "border-emerald-500/25", bg: "bg-emerald-500/8", icon: "text-emerald-500", glow: "shadow-emerald-500/20" },
  violet:  { border: "border-violet-500/25", bg: "bg-violet-500/8", icon: "text-violet-500", glow: "shadow-violet-500/20" },
  amber:   { border: "border-amber-500/25",  bg: "bg-amber-500/8",  icon: "text-amber-500",  glow: "shadow-amber-500/20" },
};

const MOCK_TRANSACTIONS = [
  { label: "Зарплата", amount: "+₴42 000", type: "in", cat: "Дохід" },
  { label: "Супермаркет", amount: "-₴1 340", type: "out", cat: "Їжа" },
  { label: "Netflix", amount: "-₴299", type: "out", cat: "Розваги" },
  { label: "Фріланс", amount: "+₴8 500", type: "in", cat: "Дохід" },
];

const BAR_HEIGHTS = [36, 62, 48, 79, 53, 88, 67];
const BAR_DAYS = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"];

const STEPS = [
  {
    icon: Wallet,
    title: "Додайте рахунки",
    desc: "Створіть картку, готівку або накопичення і задайте стартовий баланс.",
  },
  {
    icon: ReceiptText,
    title: "Фіксуйте операції",
    desc: "Записуйте доходи та витрати за 10 секунд з категоріями і коментарями.",
  },
  {
    icon: TrendingUp,
    title: "Аналізуйте прогрес",
    desc: "Дивіться, де витрати ростуть, і приймайте рішення на основі цифр.",
  },
];

const QUICK_BENEFITS = ["Безкоштовний старт", "Зрозумілий інтерфейс", "Фокус на щоденній користі"];

function Home() {
  return (
    <div className="relative flex min-h-dvh flex-col overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,hsl(var(--primary)/0.14),transparent_40%),radial-gradient(circle_at_85%_15%,hsl(var(--accent)/0.12),transparent_36%),radial-gradient(circle_at_50%_100%,hsl(var(--primary)/0.08),transparent_42%)]" />

      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <span className="inline-flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/70 text-primary-foreground shadow-lg shadow-primary/25">
              <Wallet className="size-4" />
            </span>
            <span className="font-heading text-base font-bold tracking-tight">Home-ledger</span>
          </div>
          <nav className="flex items-center gap-2.5">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground" asChild>
              <Link to="/login">Увійти</Link>
            </Button>
            <Button
              size="sm"
              className="shadow-lg shadow-primary/25 transition-all hover:shadow-primary/40 hover:-translate-y-px"
              asChild
            >
              <Link to="/register">
                Реєстрація
                <ArrowRight className="ml-1.5 size-3.5" />
              </Link>
            </Button>
          </nav>
        </div>
      </header>

      <main className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col px-6">
        <section className="py-14 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_460px] lg:items-center">
            <div className="space-y-7">
              <p
                className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-primary"
                style={{ animation: "fadeUp 0.45s ease both" }}
              >
                <Sparkles className="size-3.5" /> Зручний контроль фінансів
              </p>

              <div style={{ animation: "fadeUp 0.45s 0.08s ease both" }}>
                <h1 className="max-w-2xl font-heading text-4xl font-extrabold leading-tight tracking-tight text-balance md:text-6xl lg:text-[4rem]">
                  Менше хаосу у витратах.
                  <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Більше впевненості у рішеннях.
                  </span>
                </h1>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                  Home-ledger допомагає бачити реальну картину ваших грошей: рахунки, категорії,
                  історія транзакцій і наочна аналітика в одному місці.
                </p>
              </div>

              <div className="flex flex-wrap gap-3" style={{ animation: "fadeUp 0.45s 0.16s ease both" }}>
                <Button
                  size="lg"
                  className="group shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 hover:shadow-primary/45"
                  asChild
                >
                  <Link to="/register">
                    Почати безкоштовно
                    <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-border/60 bg-background/70" asChild>
                  <Link to="/login">Увійти в акаунт</Link>
                </Button>
              </div>

              <div className="flex flex-wrap gap-2.5" style={{ animation: "fadeUp 0.45s 0.24s ease both" }}>
                {QUICK_BENEFITS.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-muted/50 px-3 py-1 text-xs font-semibold text-foreground/80"
                  >
                    <CheckCircle2 className="size-3.5 text-emerald-500" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div
              className="rounded-3xl border border-border/60 bg-card/80 p-5 shadow-2xl shadow-primary/10 backdrop-blur md:p-6"
              style={{ animation: "fadeUp 0.5s 0.12s ease both" }}
            >
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-foreground">Огляд за тиждень</p>
                  <p className="text-xs text-muted-foreground">Транзакції та баланс у реальному часі</p>
                </div>
                <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-bold text-emerald-600">
                  +12.4%
                </span>
              </div>

              <div className="grid gap-2.5">
                {MOCK_TRANSACTIONS.map((item) => (
                  <div
                    key={`${item.label}-${item.amount}`}
                    className="flex items-center justify-between rounded-xl border border-border/60 bg-background/70 px-3.5 py-2.5"
                  >
                    <div>
                      <p className="text-sm font-medium text-foreground">{item.label}</p>
                      <p className="text-xs text-muted-foreground">{item.cat}</p>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm font-semibold">
                      {item.type === "in" ? (
                        <ArrowUpRight className="size-4 text-emerald-500" />
                      ) : (
                        <ArrowDownRight className="size-4 text-rose-500" />
                      )}
                      <span className={item.type === "in" ? "text-emerald-600" : "text-rose-600"}>{item.amount}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-xl border border-border/60 bg-background/75 p-3.5">
                <div className="mb-3 flex items-center justify-between text-xs text-muted-foreground">
                  <span>Активність за 7 днів</span>
                  <span>Оновлено щойно</span>
                </div>
                <div className="flex h-24 items-end gap-2">
                  {BAR_HEIGHTS.map((h, i) => (
                    <div key={BAR_DAYS[i]} className="flex flex-1 flex-col items-center gap-1.5">
                      <div
                        className="w-full rounded-md bg-gradient-to-t from-primary/85 to-accent/75"
                        style={{ height: `${h}%` }}
                      />
                      <span className="text-[10px] font-medium text-muted-foreground">{BAR_DAYS[i]}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-border/50 py-16 md:py-20">
          <div className="mb-12 text-center">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/8 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-primary">
              <Sparkles className="size-3.5" /> Можливості
            </p>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-balance md:text-5xl">
              Все, що потрібно для{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                фінансового контролю
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Зручні інструменти, які реально допомагають у щоденному керуванні грошима.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map(({ icon: Icon, color, title, desc }, i) => (
              <div
                key={title}
                className={`group rounded-2xl border bg-card/65 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${colorMap[color].border} ${colorMap[color].glow}`}
                style={{ animation: `fadeUp 0.45s ${0.08 * i}s ease both` }}
              >
                <div
                  className={`mb-4 inline-flex size-11 items-center justify-center rounded-xl border ${colorMap[color].border} ${colorMap[color].bg}`}
                >
                  <Icon className={`size-5 ${colorMap[color].icon}`} />
                </div>
                <h3 className="mb-2 font-heading text-base font-semibold text-foreground">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-border/50 py-16 md:py-20">
          <div className="mb-10 text-center">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/8 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-primary">
              <Clock3 className="size-3.5" /> Як це працює
            </p>
            <h2 className="font-heading text-3xl font-bold tracking-tight md:text-5xl">Три прості кроки до порядку у фінансах</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {STEPS.map(({ icon: Icon, title, desc }, i) => (
              <div key={title} className="rounded-2xl border border-border/60 bg-card/65 p-6 backdrop-blur">
                <div className="mb-4 flex items-center justify-between">
                  <span className="inline-flex size-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </span>
                  <span className="text-xs font-bold tracking-[0.16em] text-muted-foreground">0{i + 1}</span>
                </div>
                <h3 className="mb-2 font-heading text-lg font-semibold">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-border/50 py-16 md:py-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/8 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-primary">
                <Wallet className="size-3.5" /> Про проєкт
              </p>
              <h2 className="font-heading text-3xl font-bold tracking-tight text-balance md:text-5xl">
                Домашня бухгалтерія —<br />
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  курсовий проєкт
                </span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Веб-додаток для персонального обліку фінансів: керування рахунками, категоріями транзакцій,
                перегляд історії операцій та аналітичних звітів.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Node.js", "Express", "React", "TypeScript", "PostgreSQL"].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border/60 bg-muted/50 px-3 py-1 text-xs font-semibold text-foreground/75"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative rounded-2xl border border-border/50 bg-card/70 p-8 shadow-xl backdrop-blur">
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/4 to-transparent" />
              <div className="relative">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex size-14 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-2xl font-bold text-primary">
                    РС
                  </div>
                  <div>
                    <p className="font-heading text-lg font-bold text-foreground">Сарчук Р. А.</p>
                    <p className="text-sm text-muted-foreground">Група ПП-34 · Full-stack розробка</p>
                  </div>
                </div>
                <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                  Розробник цього проєкту — студент, що захоплюється сучасними веб-технологіями
                  та будує зручні застосунки для реальних задач.
                </p>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    className="flex-1 gap-2 border-border/60 shadow-sm hover:-translate-y-px hover:shadow-md transition-all"
                    asChild
                  >
                    <a href={GITHUB_URL} target="_blank" rel="noreferrer noopener">
                      <FaGithub className="size-4" />
                      GitHub
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 gap-2 border-sky-500/30 bg-sky-500/5 text-sky-600 hover:bg-sky-500/10 hover:-translate-y-px hover:shadow-md transition-all"
                    asChild
                  >
                    <a href={LINKEDIN_URL} target="_blank" rel="noreferrer noopener">
                      <FaLinkedinIn className="size-4" />
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-24 pt-10 md:pb-28">
          <div className="relative overflow-hidden rounded-3xl border border-primary/25 bg-gradient-to-br from-primary/12 via-background to-accent/10 p-10 text-center shadow-2xl md:p-16">
            <div className="pointer-events-none absolute -left-20 -top-20 size-64 rounded-full bg-primary/15 blur-3xl" />
            <div className="pointer-events-none absolute -right-20 -bottom-20 size-64 rounded-full bg-accent/15 blur-3xl" />
            <div className="relative">
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/8 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-primary">
                <Sparkles className="size-3.5" /> Почни вже сьогодні
              </p>
              <h2 className="font-heading text-3xl font-bold tracking-tight text-balance md:text-5xl">
                Готовий взяти фінанси{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  під контроль?
                </span>
              </h2>
              <p className="mx-auto mt-4 mb-8 max-w-md text-muted-foreground">
                Реєстрація займає менше хвилини. Почни відстежувати доходи і витрати вже зараз.
              </p>
              <Button
                size="lg"
                className="group px-8 shadow-xl shadow-primary/30 transition-all hover:-translate-y-0.5 hover:shadow-primary/50"
                asChild
              >
                <Link to="/register">
                  Створити акаунт безкоштовно
                  <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/40 bg-background/60 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground sm:flex-row">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex size-7 items-center justify-center rounded-lg bg-primary/15">
              <Wallet className="size-3.5 text-primary" />
            </span>
            <span className="font-semibold text-foreground/70">Home-ledger</span>
            <span className="text-border">·</span>
            <span>{new Date().getFullYear()}</span>
          </div>
          <p className="text-xs">Домашня бухгалтерія для персонального обліку фінансів</p>
        </div>
      </footer>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

export default Home;