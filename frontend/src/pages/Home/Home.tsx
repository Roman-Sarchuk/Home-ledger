import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, ExternalLink, ShieldCheck, Sparkles, UserRound, Wallet } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const GITHUB_URL = "https://github.com/Roman-Sarchuk/Home-ledger";

function Home() {
  return (
    <div className="relative flex min-h-dvh flex-col overflow-hidden bg-gradient-to-b from-slate-50 via-slate-100 to-slate-200 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="pointer-events-none absolute -left-32 top-10 size-80 rounded-full bg-sky-400/20 blur-3xl dark:bg-sky-500/10" />
      <div className="pointer-events-none absolute -right-24 top-40 size-72 rounded-full bg-indigo-400/20 blur-3xl dark:bg-indigo-500/10" />

      <header className="border-b bg-background/80 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <span className="inline-flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Wallet className="size-5" />
            </span>
            <span className="font-heading text-sm font-semibold">Home-ledger</span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/login">Увійти</Link>
            </Button>
            <Button size="sm" asChild>
              <Link to="/register">Реєстрація</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col gap-20 px-4 py-16 md:py-20">
        <section className="rounded-3xl border border-white/60 bg-gradient-to-br from-slate-50 to-slate-200 p-8 shadow-lg backdrop-blur-sm dark:border-slate-800 dark:from-slate-900 dark:to-slate-950 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="grid gap-6">
              <p className="inline-flex w-fit items-center gap-2 rounded-full border bg-background/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground shadow-sm">
                <Sparkles className="size-3.5 text-primary" />
                Personal Finance Dashboard
              </p>
              <h1 className="font-heading text-5xl font-extrabold tracking-tight text-balance md:text-6xl">
                Контролюй свої фінанси легко
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                Домашня бухгалтерія для щоденного контролю доходів, витрат, рахунків і категорій. Прозора аналітика,
                зручний інтерфейс і вся фінансова картина в одному місці.
              </p>
              <div className="flex flex-wrap gap-4">
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
              <div className="grid gap-3 pt-2 text-sm text-muted-foreground sm:grid-cols-2">
                <p className="flex items-center gap-2">
                  <ShieldCheck className="size-4 text-emerald-600" />
                  Безпечна авторизація та керування сесіями
                </p>
                <p className="flex items-center gap-2">
                  <BarChart3 className="size-4 text-sky-600" />
                  Розширена аналітика транзакцій
                </p>
              </div>
            </div>

            <Card className="border-0 bg-background/85 shadow-lg backdrop-blur">
              <CardHeader>
                <CardTitle className="text-lg">Швидкий старт</CardTitle>
                <CardDescription>
                  Три прості кроки, щоб почати контролювати особисті фінанси вже сьогодні.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4 text-sm text-muted-foreground">
                <p>1. Створіть акаунт та налаштуйте профіль.</p>
                <p>2. Додайте рахунки й категорії транзакцій.</p>
                <p>3. Відстежуйте витрати та аналізуйте тенденції.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="grid gap-6">
          <h2 className="font-heading text-3xl font-bold tracking-tight">Про проєкт</h2>
          <Card className="border-0 shadow-lg">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-xl">
                <Wallet className="size-5 text-primary" />
                Домашня бухгалтерія (Home-ledger)
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-2 text-base leading-relaxed text-muted-foreground">
              <p>
                Це курсовий проєкт <span className="font-semibold text-foreground">«Домашня бухгалтерія»</span> —
                веб-додаток для персонального обліку фінансів: керування рахунками, категоріями транзакцій,
                перегляд історії операцій та аналітичних звітів.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="grid gap-6 pb-6">
          <h2 className="font-heading text-3xl font-bold tracking-tight">Розробник</h2>
          <Card className="border-0 shadow-lg">
            <CardContent className="flex flex-col gap-5 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="mb-1 inline-flex items-center gap-2 text-lg font-semibold text-foreground">
                  <UserRound className="size-5 text-primary" />
                  Сарчук Р. А.
                </p>
                <p className="text-sm text-muted-foreground">Група ПП-34 · Full-stack розробка</p>
              </div>
              <Button variant="outline" className="shadow-lg" asChild>
                <a href={GITHUB_URL} target="_blank" rel="noreferrer noopener">
                  <ExternalLink className="mr-2 size-4" />
                  GitHub: Home-ledger
                </a>
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="border-t py-6 text-center text-xs text-muted-foreground">
        Home-ledger · {new Date().getFullYear()}
      </footer>
    </div>
  );
}

export default Home;
