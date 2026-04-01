import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, ExternalLink, ShieldCheck, Sparkles, UserRound, Wallet } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const GITHUB_URL = "https://github.com/Roman-Sarchuk/Home-ledger";
const LINKEDIN_URL = "https://www.linkedin.com/in/roman-sarchuk-267102323/";

function Home() {
  return (
    <div className="relative flex min-h-dvh flex-col overflow-hidden bg-background">
      <div className="pointer-events-none absolute -left-32 top-10 size-96 rounded-full bg-primary/12 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-40 size-80 rounded-full bg-accent/10 blur-3xl" />

      <header className="border-b bg-background/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <span className="inline-flex size-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-lg">
              <Wallet className="size-5" />
            </span>
            <span className="font-heading text-base font-bold">Home-ledger</span>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/login">Увійти</Link>
            </Button>
            <Button size="sm" asChild>
              <Link to="/register">Реєстрація</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col gap-32 px-6 py-20 md:py-28">
        <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-primary/5 via-transparent to-accent/3 p-10 shadow-xl backdrop-blur-sm md:p-16 lg:p-20">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="grid gap-8">
              <p className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/8 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-primary shadow-sm">
                <Sparkles className="size-4 text-primary" />
                Personal Finance Dashboard
              </p>
              <div className="space-y-4">
                <h1 className="font-heading text-5xl font-extrabold tracking-tight text-balance md:text-6xl lg:text-7xl">
                  Контролюй свої фінанси легко
                </h1>
                <div className="h-1 w-24 rounded-full bg-gradient-to-r from-primary to-accent" />
              </div>
              <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                Домашня бухгалтерія для щоденного контролю доходів, витрат, рахунків і категорій. Прозора аналітика,
                зручний інтерфейс і вся фінансова картина в одному місці.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Button size="lg" className="shadow-lg" asChild>
                  <Link to="/register">
                    Почати роботу
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-background/70 shadow-lg" asChild>
                  <Link to="/login">Увійти</Link>
                </Button>
              </div>
              <div className="grid gap-4 pt-4 text-sm sm:grid-cols-2">
                <div className="flex items-start gap-3 rounded-lg border border-emerald-500/20 bg-emerald-500/5 p-4">
                  <ShieldCheck className="size-5 flex-shrink-0 mt-0.5 text-emerald-600" />
                  <span className="text-muted-foreground">Безпечна авторизація та керування сесіями</span>
                </div>
                <div className="flex items-start gap-3 rounded-lg border border-sky-500/20 bg-sky-500/5 p-4">
                  <BarChart3 className="size-5 flex-shrink-0 mt-0.5 text-sky-600" />
                  <span className="text-muted-foreground">Розширена аналітика транзакцій</span>
                </div>
              </div>
            </div>

            <Card className="border border-white/20 bg-gradient-to-br from-background/90 to-background/70 shadow-2xl backdrop-blur">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl">Швидкий старт</CardTitle>
                <CardDescription>
                  Три прості кроки, щоб почати контролювати особисті фінанси вже сьогодні.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6 text-sm text-muted-foreground">
                <div className="space-y-1">
                  <p className="font-semibold text-foreground">1. Створіть акаунт</p>
                  <p>Налаштуйте профіль та персональні налаштування.</p>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <div className="space-y-1">
                  <p className="font-semibold text-foreground">2. Додайте рахунки</p>
                  <p>Налаштуйте рахунки й категорії транзакцій.</p>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <div className="space-y-1">
                  <p className="font-semibold text-foreground">3. Аналізуйте данні</p>
                  <p>Відстежуйте витрати та аналізуйте тенденції.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="grid gap-8">
          <div>
            <h2 className="font-heading text-4xl font-bold tracking-tight mb-2">Про проєкт</h2>
            <div className="h-1 w-24 rounded-full bg-gradient-to-r from-primary to-accent" />
          </div>
          <Card className="border-border/50 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Wallet className="size-6 text-primary" />
                Домашня бухгалтерія (Home-ledger)
              </CardTitle>
            </CardHeader>
            <CardContent className="text-base leading-relaxed text-muted-foreground space-y-4">
              <p>
                Це курсовий проєкт <span className="font-semibold text-foreground">«Домашня бухгалтерія»</span> —
                веб-додаток для персонального обліку фінансів: керування рахунками, категоріями транзакцій,
                перегляд історії операцій та аналітичних звітів.
              </p>
              <p>
                Проєкт розроблений з використанням сучасних технологій: <span className="font-semibold text-foreground">Node.js</span> та <span className="font-semibold text-foreground">Express</span> на бенд-енді,
                та <span className="font-semibold text-foreground">React</span> з <span className="font-semibold text-foreground">TypeScript</span> на фронт-енді.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="grid gap-8 pb-8">
          <div>
            <h2 className="font-heading text-4xl font-bold tracking-tight mb-2">Розробник</h2>
            <div className="h-1 w-24 rounded-full bg-gradient-to-r from-primary to-accent" />
          </div>
          <Card className="border-border/50 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="flex flex-col gap-8 pt-8 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="mb-3 inline-flex items-center gap-3 text-xl font-semibold text-foreground">
                  <UserRound className="size-6 text-primary" />
                  Сарчук Р. А.
                </p>
                <p className="text-base text-muted-foreground">Група ПП-34 · Full-stack розробка</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="outline" className="shadow-md hover:shadow-lg gap-2" asChild>
                  <a href={GITHUB_URL} target="_blank" rel="noreferrer noopener">
                    <ExternalLink className="size-4" />
                    GitHub
                  </a>
                </Button>
                <Button variant="outline" className="shadow-md hover:shadow-lg gap-2" asChild>
                  <a href={LINKEDIN_URL} target="_blank" rel="noreferrer noopener">
                    <ExternalLink className="size-4" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="border-t bg-background/50 backdrop-blur py-8 text-center text-sm text-muted-foreground">
        <div className="space-y-2">
          <p className="font-semibold">Home-ledger · {new Date().getFullYear()}</p>
          <p>Домашня бухгалтерія для персонального обліку фінансів</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
