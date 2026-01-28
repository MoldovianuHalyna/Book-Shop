import type { ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import { Button } from "../ui/button";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-neutral-100 text-neutral-900">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 -top-24 h-80 w-80 rounded-full bg-gradient-to-br from-amber-200 via-orange-100 to-rose-100 opacity-60 blur-3xl" />
        <div className="absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-gradient-to-br from-sky-100 via-indigo-100 to-blue-200 opacity-50 blur-3xl" />
      </div>

      <main className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 py-12 sm:px-6 lg:px-10">
        {!isHome && (
          <div className="mb-6 flex items-center">
            <Button
              type="button"
              variant="primary"
              size="sm"
              onClick={() => navigate("/")}
              className="rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-surface)]/90 px-4 text-base text-[color:var(--color-foreground)] shadow-[0_14px_34px_-24px_rgba(30,20,10,0.35)] hover:bg-[color:var(--color-muted)]/70"
            >
              <ArrowLeft />
              Back to Home
            </Button>
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
