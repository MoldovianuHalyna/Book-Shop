import { useState } from "react";
import { toast } from "react-toastify";
import { BookOpen, Mail, User } from "lucide-react";

import { cn } from "../../lib/utils";
import { Button } from "../../components/ui/button";
import { validationSchema } from "../../helpers/validationSchema.ts";

type FormValues = {
  name: string;
  email: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const BookClubPage = () => {
  const [values, setValues] = useState<FormValues>({ name: "", email: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (nextValues: FormValues) => {
    const nextErrors: FormErrors = {
      name: validationSchema.name(nextValues.name),
      email: validationSchema.email(nextValues.email),
    };

    if (!nextErrors.name) {
      delete nextErrors.name;
    }
    if (!nextErrors.email) {
      delete nextErrors.email;
    }

    return nextErrors;
  };

  const handleChange = (key: keyof FormValues, value: string) => {
    const next = { ...values, [key]: value };
    setValues(next);

    if (errors[key]) {
      const nextErrors = validate(next);
      setErrors(nextErrors);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      toast.error("Please fix the highlighted fields.", {
        autoClose: 1000,
        position: "top-center",
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    setIsSubmitting(true);

    const name = values.name.trim();
    toast.success(`${name} you successfully subscribed to the Book club`, {
      autoClose: 1000,
      position: "top-center",
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    setValues({ name: "", email: "" });
    setErrors({});

    setTimeout(() => setIsSubmitting(false), 350);
  };

  return (
    <section className="relative flex w-full flex-col gap-10">
      <header className="relative overflow-hidden rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-background-soft)]/90 px-6 py-10 shadow-[0_45px_65px_-35px_rgba(30,20,10,0.26)] backdrop-blur-xl sm:px-10">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-14 top-0 h-56 w-56 rounded-full bg-[radial-gradient(circle,_hsla(24,92%,57%,0.22)_0%,_transparent_70%)] blur-3xl" />
          <div className="absolute -bottom-20 right-0 h-64 w-64 rounded-full bg-[radial-gradient(circle,_hsla(32,48%,66%,0.18)_0%,_transparent_70%)] blur-3xl" />
        </div>

        <div className="relative space-y-4">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[color:var(--color-muted)]/70 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-[color:var(--color-muted-foreground)] sm:text-xs">
            <BookOpen className="size-4" />
            Book Club
          </span>
          <h1 className="text-3xl font-bold text-[color:var(--color-foreground)] sm:text-4xl lg:text-5xl">
            Join the Book Club
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-[color:var(--color-foreground-subtle)] sm:text-base lg:text-lg">
            Sign up to receive monthly picks, cozy discussion prompts, and early
            access to new arrivals.
          </p>
        </div>
      </header>

      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)]/92 p-6 shadow-[0_25px_45px_-30px_rgba(30,20,10,0.32)]"
        >
          <h2 className="text-lg font-semibold text-[color:var(--color-foreground)]">
            Subscription form
          </h2>
          <p className="mt-1 text-sm text-[color:var(--color-muted-foreground)]">
            Fake form — validation is real.
          </p>

          <div className="mt-6 grid gap-4">
            <div className="grid gap-2">
              <label
                htmlFor="club-name"
                className="text-sm font-semibold text-[color:var(--color-foreground)]"
              >
                Name
              </label>
              <div
                className={cn(
                  "flex items-center gap-2 rounded-2xl border bg-[color:var(--color-background)]/85 px-4 py-3",
                  errors.name
                    ? "border-[color:var(--color-accent)] shadow-[0_0_0_3px_rgba(255,135,85,0.25)]"
                    : "border-[color:var(--color-border)]",
                )}
              >
                <User className="size-4 text-[color:var(--color-muted-foreground)]" />
                <input
                  id="club-name"
                  name="name"
                  value={values.name}
                  onChange={(event) => handleChange("name", event.target.value)}
                  placeholder="Your name"
                  className="w-full bg-transparent text-sm text-[color:var(--color-foreground)] outline-none placeholder:text-[color:var(--color-muted-foreground)]"
                  autoComplete="name"
                />
              </div>
              {errors.name && (
                <p className="text-xs font-medium text-[color:var(--color-accent)]">
                  {errors.name}
                </p>
              )}
            </div>

            <div className="grid gap-2">
              <label
                htmlFor="club-email"
                className="text-sm font-semibold text-[color:var(--color-foreground)]"
              >
                Email
              </label>
              <div
                className={cn(
                  "flex items-center gap-2 rounded-2xl border bg-[color:var(--color-background)]/85 px-4 py-3",
                  errors.email
                    ? "border-[color:var(--color-accent)] shadow-[0_0_0_3px_rgba(255,135,85,0.25)]"
                    : "border-[color:var(--color-border)]",
                )}
              >
                <Mail className="size-4 text-[color:var(--color-muted-foreground)]" />
                <input
                  id="club-email"
                  name="email"
                  value={values.email}
                  onChange={(event) =>
                    handleChange("email", event.target.value)
                  }
                  placeholder="you@example.com"
                  className="w-full bg-transparent text-sm text-[color:var(--color-foreground)] outline-none placeholder:text-[color:var(--color-muted-foreground)]"
                  autoComplete="email"
                  inputMode="email"
                />
              </div>
              {errors.email && (
                <p className="text-xs font-medium text-[color:var(--color-accent)]">
                  {errors.email}
                </p>
              )}
            </div>

            <Button
              type="submit"
              variant="primary"
              size="default"
              disabled={isSubmitting}
              className="mt-2 w-full rounded-full"
            >
              Subscribe
            </Button>
          </div>
        </form>

        <aside className="rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-background)]/70 p-6 shadow-[0_25px_45px_-30px_rgba(30,20,10,0.18)]">
          <h3 className="text-sm font-semibold tracking-[0.3em] uppercase text-[color:var(--color-muted-foreground)]">
            What you get
          </h3>
          <div className="mt-4 grid gap-3 text-sm text-[color:var(--color-foreground-subtle)]">
            <p>Monthly top pick + 3 cozy alternates.</p>
            <p>Discussion prompts and reading challenges.</p>
            <p>Early access to seasonal discounts.</p>
          </div>
          <p className="mt-6 text-xs text-[color:var(--color-muted-foreground)]">
            No real emails are sent in this demo.
          </p>
        </aside>
      </div>
    </section>
  );
};

export default BookClubPage;
