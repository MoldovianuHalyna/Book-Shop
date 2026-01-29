import { useEffect, useMemo, useState } from "react";

import BookCard, { type BookMeta } from "./BookComponents";
import { cn } from "../../lib/utils";
import { LampCeiling, X } from "lucide-react";
import useIsMobileView from "../../helpers/useIsMobileView";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "../../components/ui/dialog";
import { Button } from "../../components/ui/button";

const books: BookMeta[] = [
  {
    id: "sunlit-garden",
    title: "Whispers from the Sunlit Garden",
    author: "Aurelia Finch",
    price: "18.90",
    imageSrc: encodeURI("/annelies-geneyn-bhBONc07WsI-unsplash (1).jpg"),
    summary:
      "A gentle correspondence between botanists becomes a luminous meditation on belonging, stitched together by pressed petals and dawn-lit notes.",
  },
  {
    id: "midnight-notes",
    title: "Midnight Notes & Golden Margins",
    author: "Dorian Hale",
    price: "21.50",
    imageSrc: encodeURI("/alex-lvrs-2zDw14yCYqk-unsplash (1).jpg"),
    summary:
      "An insomniac composer unravels the mystery of a century-old journal, discovering harmonies hidden within the margins of forgotten scores.",
  },
  {
    id: "ink-river",
    title: "Ink River and Ember Skies",
    author: "Seren Ayers",
    price: "16.40",
    imageSrc: encodeURI("/jaredd-craig-HH4WBGNyltc-unsplash (1).jpg"),
    summary:
      "A cartographer sketches constellations along a riverside town, tracing a story of love, memory, and the tides that carry us forward.",
  },
  {
    id: "quiet-harbor",
    title: "Letters from a Quiet Harbor",
    author: "Mara Elmore",
    price: "19.95",
    imageSrc: encodeURI("/patrick-tomasso-Oaqk7qqNh_c-unsplash (1).jpg"),
    summary:
      "A reclusive painter restores an old boathouse and the community lore within it, capturing voices of the sea in iridescent palettes.",
  },
  {
    id: "ember-chronicles",
    title: "The Ember Chronicles",
    author: "Cassian Moray",
    price: "23.10",
    imageSrc: encodeURI("/sincerely-media-nGrfKmtwv24-unsplash (1).jpg"),
    summary:
      "Fire keepers guard a dwindling archive of flame-lit myths, and one apprentice must decide which stories deserve to burn brightest.",
  },
  {
    id: "starlit-libraries",
    title: "Starlit Libraries of Aure",
    author: "Isla Merrick",
    price: "17.80",
    imageSrc: encodeURI("/fang-wei-lin-H1IRUS1vEFA-unsplash (1).jpg"),
    summary:
      "A drifting archivist maps celestial reading rooms, each chapter revealing the constellations that shape the histories we keep.",
  },
  {
    id: "midnight-light",
    title: "Midnight Notes & Golden Margins",
    author: "Dorian Hale",
    price: "21.50",
    imageSrc: encodeURI("/alex-lvrs-2zDw14yCYqk-unsplash (1).jpg"),
    summary:
      "Alternate dust-jacket edition featuring annotated letters that unlock a secret cadence behind every nocturne.",
  },
  {
    id: "beauty-river",
    title: "Ink River and Ember Skies",
    author: "Seren Ayers",
    price: "16.40",
    imageSrc: encodeURI("/jaredd-craig-HH4WBGNyltc-unsplash (1).jpg"),
    summary:
      "Limited run with riverbank sketches and ember-scorched recipes collected from the town’s storytellers.",
  },
  {
    id: "quiet-lake",
    title: "Letters from a Quiet Harbor",
    author: "Mara Elmore",
    price: "19.95",
    imageSrc: encodeURI("/patrick-tomasso-Oaqk7qqNh_c-unsplash (1).jpg"),
    summary:
      "Includes watercolor studies and harbor lullabies that trace the painter’s journey toward a newfound home.",
  },
  {
    id: "white-chronicles",
    title: "The Ember Chronicles",
    author: "Cassian Moray",
    price: "23.10",
    imageSrc: encodeURI("/sincerely-media-nGrfKmtwv24-unsplash (1).jpg"),
    summary:
      "Special collector’s version with glow-in-the-dark ink capturing every ember legend in radiant relief.",
  },
  {
    id: "starlight-libraries",
    title: "Starlit Libraries of Aure",
    author: "Isla Merrick",
    price: "17.80",
    imageSrc: encodeURI("/fang-wei-lin-H1IRUS1vEFA-unsplash (1).jpg"),
    summary:
      "Travel edition bound in midnight linen, annotated with star charts and whispered index entries.",
  },
];

const BookShelfPage = () => {
  const [isDark, setIsDark] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState<BookMeta | null>(null);
  const isMobile = useIsMobileView();

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

  const handleSelectBook = (book: BookMeta) => {
    setSelectedBook(book);
    setIsDetailsOpen(true);
  };

  const handleDetailsOpenChange = (open: boolean) => {
    setIsDetailsOpen(open);
    if (!open) {
      setTimeout(() => setSelectedBook(null), 150);
    }
  };

  return (
    <section className="relative flex w-full flex-col gap-10 overflow-hidden">
      <div className="grid gap-8 sm:gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="grid gap-6">
          <div className="flex flex-col gap-2 sm:gap-3">
            <h2 className="text-lg font-semibold text-[color:var(--color-foreground)] sm:text-xl">
              Spotlight Selections
            </h2>
          </div>
          <div className="relative mx-auto flex h-[17rem] w-full max-w-[17rem] items-center justify-center rounded-full bg-[color:var(--color-surface)]/95 p-5 shadow-[0_24px_60px_-32px_rgba(30,20,10,0.45)] transition-shadow duration-500 sm:h-80 sm:max-w-[20rem] sm:p-6 lg:h-96 lg:max-w-[24rem]">
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
                "relative z-10 h-full w-full max-h-[14rem] object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.22)]",
                isDark &&
                  "dark:drop-shadow-[0_25px_35px_rgba(255,188,100,0.85)]",
                "sm:max-h-[17rem]",
              )}
            />
          </div>
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {featured.map((book) => (
              <BookCard
                key={book.id}
                book={book}
                isDark={isDark}
                onSelect={handleSelectBook}
              />
            ))}
          </div>
        </div>

        <div className="grid gap-5 sm:gap-6">
          <h3 className="text-base font-semibold text-[color:var(--color-foreground)] sm:text-lg">
            Fresh from the Reading Nook
          </h3>
          <div className="grid gap-5 sm:grid-cols-2">
            {remainder.map((book) => (
              <BookCard
                key={book.id}
                book={book}
                isDark={isDark}
                onSelect={handleSelectBook}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-background-soft)]/90 px-5 py-10 shadow-[0_45px_65px_-35px_rgba(30,20,10,0.28)] backdrop-blur-xl sm:px-10 sm:py-12">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-10 top-0 h-60 w-60 rounded-full bg-[radial-gradient(circle,_hsla(24,92%,57%,0.25)_0%,_transparent_70%)] blur-3xl" />
          <div className="absolute -bottom-20 right-0 h-64 w-64 rounded-full bg-[radial-gradient(circle,_hsla(32,48%,66%,0.18)_0%,_transparent_70%)] blur-3xl" />
        </div>

        <div className="relative flex flex-col gap-5 text-[color:var(--color-foreground)] sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl space-y-3 sm:space-y-4">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[color:var(--color-muted)]/70 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-[color:var(--color-muted-foreground)] sm:text-xs">
              Curated Editions
            </span>
            <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
              Sink into luminous stories and discover your next favorite read
            </h1>
            <p className="text-sm leading-relaxed text-[color:var(--color-foreground-subtle)] sm:text-base lg:text-lg">
              From richly annotated hardcovers to pocket-sized journeys, explore
              a library arranged for serenity and wonder. Each title is
              handpicked to pair beautifully with a warm cup and a quiet
              evening.
            </p>
          </div>

          <div className="grid gap-1.5 text-xs text-[color:var(--color-muted-foreground)] sm:text-sm">
            <span className="font-semibold text-[color:var(--color-accent)] sm:text-base">
              {books.length}+ Collectible Editions
            </span>
            <span>Free gift wrapping & next-day dispatch on EU orders.</span>
            <span>Members earn seasonal perks with every purchase.</span>
          </div>
        </div>
      </div>

      {selectedBook && (
        <>
          <Dialog open={isDetailsOpen} onOpenChange={handleDetailsOpenChange}>
            <DialogContent className="max-w-3xl border-[color:var(--color-border)] bg-[color:var(--color-background)]/96 text-[color:var(--color-foreground)] shadow-[0_40px_80px_-45px_rgba(26,18,12,0.55)]">
              <DialogHeader className="flex flex-col gap-1">
                <DialogTitle className="text-2xl font-semibold">
                  {selectedBook.title}
                </DialogTitle>
                <DialogDescription className="text-sm text-[color:var(--color-muted-foreground)]">
                  by {selectedBook.author}
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-6 md:grid-cols-[1.05fr_0.95fr]">
                <div className="relative overflow-hidden rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)]/95 p-4">
                  <img
                    src={selectedBook.imageSrc}
                    alt={`${selectedBook.title} cover art`}
                    className="mx-auto max-h-80 w-full rounded-xl object-cover shadow-[0_30px_55px_-28px_rgba(26,20,15,0.45)]"
                  />
                  {isDark && (
                    <span className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top,_rgba(255,196,130,0.22)_0%,_transparent_68%)] mix-blend-screen" />
                  )}
                </div>
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-3 text-base">
                    <p className="text-[color:var(--color-foreground-subtle)]">
                      {selectedBook.summary}
                    </p>
                    <div className="flex flex-wrap items-center gap-3 text-sm">
                      <span className="inline-flex items-center gap-2 rounded-full bg-[color:var(--color-muted)]/60 px-3 py-1 font-semibold uppercase tracking-[0.28em] text-[color:var(--color-muted-foreground)]">
                        Collector’s Pick
                      </span>
                      <span className="text-lg font-semibold text-[color:var(--color-accent)]">
                        €{selectedBook.price}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="text-sm text-[color:var(--color-muted-foreground)]">
                      Ships within 24h • Complimentary bookmark • Gift wrap
                      available
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="primary"
                        size="default"
                        onClick={() => handleDetailsOpenChange(false)}
                        className="rounded-full px-5"
                      >
                        Close
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <DialogClose className="absolute right-4 top-4 text-[color:var(--color-muted-foreground)] transition-colors hover:text-[color:var(--color-foreground)]">
                <X className="size-5" aria-hidden="true" />
                <span className="sr-only">Close</span>
              </DialogClose>
            </DialogContent>
          </Dialog>
        </>
      )}
    </section>
  );
};

export default BookShelfPage;
