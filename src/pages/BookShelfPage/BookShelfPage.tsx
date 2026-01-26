import { useEffect, useMemo, useState } from "react";

import BookCard, { type BookMeta } from "./BookComponents";
import { cn } from "../../lib/utils";
import { LampCeiling } from "lucide-react";

const books: BookMeta[] = [
  {
    id: "sunlit-garden",
    title: "Whispers from the Sunlit Garden",
    author: "Aurelia Finch",
    price: "18.90",
    imageSrc: encodeURI("/annelies-geneyn-bhBONc07WsI-unsplash (1).jpg"),
  },
  {
    id: "midnight-notes",
    title: "Midnight Notes & Golden Margins",
    author: "Dorian Hale",
    price: "21.50",
    imageSrc: encodeURI("/alex-lvrs-2zDw14yCYqk-unsplash (1).jpg"),
  },
  {
    id: "ink-river",
    title: "Ink River and Ember Skies",
    author: "Seren Ayers",
    price: "16.40",
    imageSrc: encodeURI("/jaredd-craig-HH4WBGNyltc-unsplash (1).jpg"),
  },
  {
    id: "quiet-harbor",
    title: "Letters from a Quiet Harbor",
    author: "Mara Elmore",
    price: "19.95",
    imageSrc: encodeURI("/patrick-tomasso-Oaqk7qqNh_c-unsplash (1).jpg"),
  },
  {
    id: "ember-chronicles",
    title: "The Ember Chronicles",
    author: "Cassian Moray",
    price: "23.10",
    imageSrc: encodeURI("/sincerely-media-nGrfKmtwv24-unsplash (1).jpg"),
  },
  {
    id: "starlit-libraries",
    title: "Starlit Libraries of Aure",
    author: "Isla Merrick",
    price: "17.80",
    imageSrc: encodeURI("/fang-wei-lin-H1IRUS1vEFA-unsplash (1).jpg"),
  },
  {
    id: "midnight-light",
    title: "Midnight Notes & Golden Margins",
    author: "Dorian Hale",
    price: "21.50",
    imageSrc: encodeURI("/alex-lvrs-2zDw14yCYqk-unsplash (1).jpg"),
  },
  {
    id: "beauty-river",
    title: "Ink River and Ember Skies",
    author: "Seren Ayers",
    price: "16.40",
    imageSrc: encodeURI("/jaredd-craig-HH4WBGNyltc-unsplash (1).jpg"),
  },
  {
    id: "quiet-lake",
    title: "Letters from a Quiet Harbor",
    author: "Mara Elmore",
    price: "19.95",
    imageSrc: encodeURI("/patrick-tomasso-Oaqk7qqNh_c-unsplash (1).jpg"),
  },
  {
    id: "white-chronicles",
    title: "The Ember Chronicles",
    author: "Cassian Moray",
    price: "23.10",
    imageSrc: encodeURI("/sincerely-media-nGrfKmtwv24-unsplash (1).jpg"),
  },
  {
    id: "starlight-libraries",
    title: "Starlit Libraries of Aure",
    author: "Isla Merrick",
    price: "17.80",
    imageSrc: encodeURI("/fang-wei-lin-H1IRUS1vEFA-unsplash (1).jpg"),
  },
];

const BookShelfPage = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (typeof document === "undefined") {
      return undefined;
    }

    const root = document.documentElement;
    const updateMode = () => setIsDark(root.classList.contains("dark"));

    updateMode();

    const observer = new MutationObserver(updateMode);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  const featured = useMemo(() => books.slice(0, 6), []);
  const remainder = useMemo(() => books.slice(3, 10), []);

  return (
    <section className="relative flex w-full flex-col gap-12">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="grid gap-6">
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold text-[color:var(--color-foreground)]">
              Spotlight Selections
            </h2>
          </div>
          <div className="relative mx-auto flex flex-col h-100 w-100 items-center justify-center rounded-full bg-[color:var(--color-surface)]/95 p-6 shadow-[0_24px_60px_-32px_rgba(30,20,10,0.45)] transition-shadow duration-500 sm:h-96 sm:w-96">
            {isDark && (
              <div className="absolute -top-8 left-1/2 flex -translate-x-1/2 flex-col items-center">
                <span className="pointer-events-none absolute -inset-16 rounded-full bg-[radial-gradient(circle,_rgba(255,196,109,0.22)_0%,_transparent_70%)] blur-2xl animate-[pulse_2.4s_ease-in-out_infinite]" />
                <span className="pointer-events-none absolute -inset-10 rounded-full bg-[radial-gradient(circle,_rgba(255,215,154,0.4)_0%,_transparent_75%)] blur-xl animate-[pulse_3s_ease-in-out_infinite]" />
                <LampCeiling className="relative z-10 size-16 text-[hsl(32_95%_72%)] drop-shadow-[0_0_22px_rgba(255,188,100,0.85)] transition-transform duration-700 ease-in-out hover:rotate-1" />
              </div>
            )}

            <img
              src="/cat-2.png"
              alt="Cat reading among books"
              className={cn(
                "relative z-10 max-h-64 w-auto object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.22)]",
                isDark &&
                  "dark:drop-shadow-[0_25px_35px_rgba(255,188,100,0.85)]",
                "sm:max-h-72",
              )}
            />
          </div>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {featured.map((book) => (
              <BookCard key={book.id} book={book} isDark={isDark} />
            ))}
          </div>
        </div>

        <div className="grid gap-6">
          <h3 className="text-lg font-semibold text-[color:var(--color-foreground)]">
            Fresh from the Reading Nook
          </h3>
          <div className="grid gap-6 sm:grid-cols-2">
            {remainder.map((book) => (
              <BookCard key={book.id} book={book} isDark={isDark} />
            ))}
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-background-soft)]/85 px-8 py-12 shadow-[0_45px_65px_-35px_rgba(30,20,10,0.28)] backdrop-blur-xl sm:px-12">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-10 top-0 h-60 w-60 rounded-full bg-[radial-gradient(circle,_hsla(24,92%,57%,0.25)_0%,_transparent_70%)] blur-3xl" />
          <div className="absolute -bottom-20 right-0 h-64 w-64 rounded-full bg-[radial-gradient(circle,_hsla(32,48%,66%,0.18)_0%,_transparent_70%)] blur-3xl" />
        </div>

        <div className="relative flex flex-col gap-6 text-[color:var(--color-foreground)] sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[color:var(--color-muted)]/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--color-muted-foreground)]">
              Curated Editions
            </span>
            <h1 className="text-4xl font-bold sm:text-5xl">
              Sink into luminous stories and discover your next favorite read
            </h1>
            <p className="text-base leading-relaxed text-[color:var(--color-foreground-subtle)] sm:text-lg">
              From richly annotated hardcovers to pocket-sized journeys, explore
              a library arranged for serenity and wonder. Each title is
              handpicked to pair beautifully with a warm cup and a quiet
              evening.
            </p>
          </div>

          <div className="grid gap-2 text-sm text-[color:var(--color-muted-foreground)]">
            <span className="font-semibold text-[color:var(--color-accent)]">
              {books.length}+ Collectible Editions
            </span>
            <span>Free gift wrapping & next-day dispatch on EU orders.</span>
            <span>Members earn seasonal perks with every purchase.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookShelfPage;
