import { useEffect, useState, type ReactNode } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, Lightbulb, LightbulbOff } from "lucide-react";

import { Button } from "../ui/button";

type LayoutProps = {
  children: ReactNode;
};

type ThemeMode = "light" | "dark";

const STORAGE_KEY = "bookshop-theme";

const Layout = ({ children }: LayoutProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";
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

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-neutral-100 text-neutral-900">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 -top-24 h-80 w-80 rounded-full bg-gradient-to-br from-amber-200 via-orange-100 to-rose-100 opacity-60 blur-3xl" />
        <div className="absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-gradient-to-br from-sky-100 via-indigo-100 to-blue-200 opacity-50 blur-3xl" />
      </div>

      <main className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 py-12 sm:px-6 lg:px-10">
        {!isHome && (
          <div className="sticky top-3 z-40 mb-6">
            <div className="flex w-full items-center justify-between gap-3 rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-background-soft)]/90 px-3 py-2 shadow-[0_22px_40px_-30px_rgba(30,20,10,0.28)] backdrop-blur-xl sm:px-5 sm:py-3">
              <div className="flex items-center gap-2 sm:gap-3">
                <Button
                  type="button"
                  variant="icon"
                  size="icon"
                  onClick={() => navigate("/")}
                  aria-label="Back to home"
                  className="bg-[color:var(--color-surface)]/90 text-[color:var(--color-foreground)] hover:bg-[color:var(--color-muted)]/70"
                >
                  <ArrowLeft />
                </Button>
                <nav className="flex items-center gap-1 sm:gap-2">
                  <Button
                    asChild
                    variant="icon"
                    size="sm"
                    className="h-8 rounded-full bg-transparent px-3 text-xs font-semibold text-[color:var(--color-foreground)] hover:bg-[color:var(--color-muted)]/60 sm:h-9 sm:px-4 sm:text-sm"
                  >
                    <NavLink to="/book-shelf">Book Shelf</NavLink>
                  </Button>
                  <Button
                    asChild
                    variant="icon"
                    size="sm"
                    className="h-8 rounded-full bg-transparent px-3 text-xs font-semibold text-[color:var(--color-foreground)] hover:bg-[color:var(--color-muted)]/60 sm:h-9 sm:px-4 sm:text-sm"
                  >
                    <NavLink to="/rating">Rating</NavLink>
                  </Button>
                  <Button
                    asChild
                    variant="icon"
                    size="sm"
                    className="h-8 rounded-full bg-transparent px-3 text-xs font-semibold text-[color:var(--color-foreground)] hover:bg-[color:var(--color-muted)]/60 sm:h-9 sm:px-4 sm:text-sm"
                  >
                    <NavLink to="/settings">Settings</NavLink>
                  </Button>
                </nav>
              </div>

              <Button
                type="button"
                variant="icon"
                size="icon"
                onClick={toggleTheme}
                aria-pressed={isDark}
                className="bg-[color:var(--color-surface)]/90 text-[color:var(--color-foreground)] hover:bg-[color:var(--color-muted)]/70"
              >
                {isDark ? <Lightbulb /> : <LightbulbOff />}
              </Button>
            </div>
          </div>
        )}
        {children}
      </main>

      <footer className="relative border-t border-neutral-200 bg-white/60 backdrop-blur-sm">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-6 text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-10">
          <span>&copy; {new Date().getFullYear()} Book Shop</span>
          <span>Crafted for curious readers everywhere.</span>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
