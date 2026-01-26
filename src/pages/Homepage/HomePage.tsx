import { useEffect, useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { LampCeiling, Lightbulb, LightbulbOff } from "lucide-react";
import { cn } from "../../lib/utils";

type ThemeMode = "light" | "dark";

const STORAGE_KEY = "bookshop-theme";

const HomePage = () => {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    if (typeof window === "undefined") {
      return "light";
    }

    const stored = window.localStorage.getItem(STORAGE_KEY) as ThemeMode | null;
    if (stored === "light" || stored === "dark") {
      return stored;
    }

    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    return prefersDark ? "dark" : "light";
  });

  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }

    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const isDark = theme === "dark";
  const toggleTheme = () => setTheme(isDark ? "light" : "dark");

  const ctaButtons = useMemo(
    () => [
      { label: "Browse Shelf", to: "/book-shelf" },
      { label: "Join the Club", to: "/book-club" },
      { label: "Top Rated", to: "/rating" },
      { label: "Settings", to: "/settings" },
    ],
    [],
  );

  return (
    <div
      className={`theme-shell relative flex min-h-screen w-full items-center justify-center px-6 py-10 sm:px-10 lg:px-16 ${isDark ? "theme-dark" : "theme-light"}`}
    >
      <div className="absolute right-1 top-1 flex items-center gap-3 text-sm">
        <Button
          type="button"
          variant="icon"
          size="icon"
          onClick={toggleTheme}
          aria-pressed={isDark}
        >
          {isDark ? <Lightbulb /> : <LightbulbOff />}
        </Button>
      </div>
      <div className="relative grid w-full max-w-6xl gap-12 overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[color:var(--color-background-soft)]/85 p-10 shadow-2xl shadow-[color:var(--color-shadow)] backdrop-blur-xl transition-colors duration-500 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div className="flex flex-col gap-7">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[color:var(--color-muted)]/70 px-4 py-1 text-xs font-semibold tracking-[0.35em] text-[color:var(--color-muted-foreground)] uppercase">
            Book Shop
          </span>
          <h1 className="text-4xl font-bold leading-tight text-[color:var(--color-foreground)] sm:text-5xl">
            Curate your next chapter with stories that linger
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-[color:var(--color-foreground-subtle)] sm:text-lg">
            Build your personal library, join vibrant discussions, and receive
            tailor-made recommendations that keep your reading list fresh and
            inspiring.
          </p>
          <div className="flex flex-wrap md:items-center md:justify-center gap-3">
            {ctaButtons.map(({ label, to }) => (
              <Button key={to} asChild variant="primary" size="lg">
                <NavLink to={to}>{label}</NavLink>
              </Button>
            ))}
          </div>
        </div>

        <div className="relative mx-auto flex flex-col h-80 w-80 items-center justify-center rounded-full bg-[color:var(--color-surface)]/95 p-6 shadow-[0_24px_60px_-32px_rgba(30,20,10,0.45)] transition-shadow duration-500 sm:h-96 sm:w-96">
          {isDark && (
            <div className="absolute -top-8 left-1/2 flex -translate-x-1/2 flex-col items-center">
              <span className="pointer-events-none absolute -inset-16 rounded-full bg-[radial-gradient(circle,_rgba(255,196,109,0.22)_0%,_transparent_70%)] blur-2xl animate-[pulse_2.4s_ease-in-out_infinite]" />
              <span className="pointer-events-none absolute -inset-10 rounded-full bg-[radial-gradient(circle,_rgba(255,215,154,0.4)_0%,_transparent_75%)] blur-xl animate-[pulse_3s_ease-in-out_infinite]" />
              <LampCeiling className="relative z-10 size-16 text-[hsl(32_95%_72%)] drop-shadow-[0_0_22px_rgba(255,188,100,0.85)] transition-transform duration-700 ease-in-out hover:rotate-1" />
            </div>
          )}

          <img
            src="/cat.PNG"
            alt="Cat reading among books"
            className={cn(
              "relative z-10 max-h-64 w-auto object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.22)]",
              isDark && "dark:drop-shadow-[0_25px_35px_rgba(255,188,100,0.85)]",
              "sm:max-h-72",
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
