import { useMemo, useState } from "react";
import { Bell, Check, ChevronRight, Mail, Shield, User } from "lucide-react";

import { cn } from "../../lib/utils";

type SettingsItem = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
};

const SettingsPage = () => {
  const sections = useMemo<SettingsItem[]>(
    () => [
      {
        id: "profile",
        title: "Profile",
        description: "Update your name, reading goals, and preferences.",
        icon: <User className="size-5" />,
      },
      {
        id: "notifications",
        title: "Notifications",
        description: "Control reminders for new arrivals and club meetups.",
        icon: <Bell className="size-5" />,
      },
      {
        id: "email",
        title: "Email",
        description: "Manage weekly newsletters and curated recommendations.",
        icon: <Mail className="size-5" />,
      },
      {
        id: "privacy",
        title: "Privacy",
        description: "Adjust what is shared with friends and the community.",
        icon: <Shield className="size-5" />,
      },
    ],
    [],
  );

  const [newsletterEnabled, setNewsletterEnabled] = useState(true);
  const [remindersEnabled, setRemindersEnabled] = useState(false);

  return (
    <section className="relative flex w-full flex-col gap-10">
      <header className="relative overflow-hidden rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-background-soft)]/90 px-6 py-10 shadow-[0_45px_65px_-35px_rgba(30,20,10,0.26)] backdrop-blur-xl sm:px-10">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-14 top-0 h-56 w-56 rounded-full bg-[radial-gradient(circle,_hsla(24,92%,57%,0.22)_0%,_transparent_70%)] blur-3xl" />
          <div className="absolute -bottom-20 right-0 h-64 w-64 rounded-full bg-[radial-gradient(circle,_hsla(32,48%,66%,0.18)_0%,_transparent_70%)] blur-3xl" />
        </div>

        <div className="relative space-y-4">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[color:var(--color-muted)]/70 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-[color:var(--color-muted-foreground)] sm:text-xs">
            Settings
          </span>
          <h1 className="text-3xl font-bold text-[color:var(--color-foreground)] sm:text-4xl lg:text-5xl">
            Fine-tune your reading experience
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-[color:var(--color-foreground-subtle)] sm:text-base lg:text-lg">
            These are demo settings with fake data. Toggle what you like and we
            will keep the UI cozy and consistent.
          </p>
        </div>
      </header>

      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="grid gap-4">
          {sections.map((item) => (
            <article
              key={item.id}
              className="group relative overflow-hidden rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)]/92 p-5 shadow-[0_25px_45px_-30px_rgba(30,20,10,0.32)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_40px_60px_-40px_rgba(30,20,10,0.38)]"
            >
              <div className="flex items-start gap-4">
                <div className="flex size-11 items-center justify-center rounded-2xl bg-[color:var(--color-muted)]/60 text-[color:var(--color-foreground)]">
                  {item.icon}
                </div>
                <div className="flex min-w-0 flex-1 flex-col gap-1">
                  <div className="flex items-start justify-between gap-3">
                    <h2 className="text-base font-semibold text-[color:var(--color-foreground)] sm:text-lg">
                      {item.title}
                    </h2>
                    <ChevronRight className="size-5 text-[color:var(--color-muted-foreground)] transition-transform duration-300 group-hover:translate-x-0.5" />
                  </div>
                  <p className="text-sm text-[color:var(--color-muted-foreground)]">
                    {item.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="grid gap-6">
          <div className="rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)]/92 p-6 shadow-[0_25px_45px_-30px_rgba(30,20,10,0.32)]">
            <h3 className="text-lg font-semibold text-[color:var(--color-foreground)]">
              Quick toggles
            </h3>
            <p className="mt-1 text-sm text-[color:var(--color-muted-foreground)]">
              Pretend switches with instant visual feedback.
            </p>

            <div className="mt-6 grid gap-4">
              <button
                type="button"
                onClick={() => setNewsletterEnabled((prev) => !prev)}
                className={cn(
                  "flex w-full items-center justify-between rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-background)]/85 px-4 py-3 text-left transition-colors",
                  newsletterEnabled
                    ? "shadow-[0_18px_40px_-28px_rgba(255,135,85,0.55)]"
                    : "hover:bg-[color:var(--color-muted)]/60",
                )}
              >
                <div>
                  <p className="text-sm font-semibold text-[color:var(--color-foreground)]">
                    Weekly newsletter
                  </p>
                  <p className="text-xs text-[color:var(--color-muted-foreground)]">
                    Curated recommendations every Friday.
                  </p>
                </div>
                <span
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold",
                    newsletterEnabled
                      ? "bg-[color:var(--color-accent-soft)] text-[color:var(--color-foreground)]"
                      : "bg-[color:var(--color-muted)]/60 text-[color:var(--color-muted-foreground)]",
                  )}
                >
                  {newsletterEnabled ? (
                    <>
                      <Check className="size-4" /> On
                    </>
                  ) : (
                    "Off"
                  )}
                </span>
              </button>

              <button
                type="button"
                onClick={() => setRemindersEnabled((prev) => !prev)}
                className={cn(
                  "flex w-full items-center justify-between rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-background)]/85 px-4 py-3 text-left transition-colors",
                  remindersEnabled
                    ? "shadow-[0_18px_40px_-28px_rgba(255,135,85,0.55)]"
                    : "hover:bg-[color:var(--color-muted)]/60",
                )}
              >
                <div>
                  <p className="text-sm font-semibold text-[color:var(--color-foreground)]">
                    Reading reminders
                  </p>
                  <p className="text-xs text-[color:var(--color-muted-foreground)]">
                    Gentle nudges to keep your streak alive.
                  </p>
                </div>
                <span
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold",
                    remindersEnabled
                      ? "bg-[color:var(--color-accent-soft)] text-[color:var(--color-foreground)]"
                      : "bg-[color:var(--color-muted)]/60 text-[color:var(--color-muted-foreground)]",
                  )}
                >
                  {remindersEnabled ? (
                    <>
                      <Check className="size-4" /> On
                    </>
                  ) : (
                    "Off"
                  )}
                </span>
              </button>
            </div>
          </div>

          <div className="rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-background)]/70 p-6 shadow-[0_25px_45px_-30px_rgba(30,20,10,0.18)]">
            <h3 className="text-sm font-semibold tracking-[0.3em] uppercase text-[color:var(--color-muted-foreground)]">
              About
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[color:var(--color-foreground-subtle)]">
              Book Shop is a demo storefront crafted for cozy UI practice. Theme
              and navigation live in the Layout.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SettingsPage;
