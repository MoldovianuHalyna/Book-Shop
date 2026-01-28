import { useMemo } from "react";
import { Star } from "lucide-react";

import { cn } from "../../lib/utils";

type RatedBook = {
  id: string;
  title: string;
  author: string;
  cover: string;
  rating: number;
  reviews: number;
  highlight: string;
};

const RatingPage = () => {
  const books = useMemo<RatedBook[]>(
    () => [
      {
        id: "celestial-index",
        title: "Celestial Index of Quiet Wonders",
        author: "Juniper Vale",
        cover: encodeURI("/fang-wei-lin-H1IRUS1vEFA-unsplash (1).jpg"),
        rating: 4.9,
        reviews: 1842,
        highlight: "Readers love the dreamy chapters and starlit mood.",
      },
      {
        id: "amber-annotations",
        title: "Amber Annotations",
        author: "Mila Soren",
        cover: encodeURI("/alex-lvrs-2zDw14yCYqk-unsplash (1).jpg"),
        rating: 4.8,
        reviews: 1320,
        highlight: "A cozy mystery with margin notes that sparkle.",
      },
      {
        id: "river-lanterns",
        title: "River Lantern Diaries",
        author: "Arlo Bennet",
        cover: encodeURI("/jaredd-craig-HH4WBGNyltc-unsplash (1).jpg"),
        rating: 4.7,
        reviews: 987,
        highlight: "Soft pacing, rich imagery, and a warm ending.",
      },
      {
        id: "midnight-tea",
        title: "Midnight Tea Society",
        author: "Noa Hart",
        cover: encodeURI("/annelies-geneyn-bhBONc07WsI-unsplash (1).jpg"),
        rating: 4.6,
        reviews: 744,
        highlight: "Perfect for fans of gentle romance and found-family.",
      },
      {
        id: "harbor-postcards",
        title: "Postcards from the Harbor",
        author: "Elise Maren",
        cover: encodeURI("/patrick-tomasso-Oaqk7qqNh_c-unsplash (1).jpg"),
        rating: 4.5,
        reviews: 611,
        highlight: "Short chapters, big feelings, and seaside calm.",
      },
      {
        id: "ember-keepers",
        title: "Ember Keepers",
        author: "Cassian Moray",
        cover: encodeURI("/sincerely-media-nGrfKmtwv24-unsplash (1).jpg"),
        rating: 4.4,
        reviews: 504,
        highlight: "Adventure-forward fantasy with glowing lore.",
      },
    ],
    [],
  );

  const topPick = books[0];

  return (
    <section className="relative flex w-full flex-col gap-10">
      <header className="relative overflow-hidden rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-background-soft)]/90 px-6 py-10 shadow-[0_45px_65px_-35px_rgba(30,20,10,0.26)] backdrop-blur-xl sm:px-10">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-14 top-0 h-56 w-56 rounded-full bg-[radial-gradient(circle,_hsla(24,92%,57%,0.22)_0%,_transparent_70%)] blur-3xl" />
          <div className="absolute -bottom-20 right-0 h-64 w-64 rounded-full bg-[radial-gradient(circle,_hsla(32,48%,66%,0.18)_0%,_transparent_70%)] blur-3xl" />
        </div>

        <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-4">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[color:var(--color-muted)]/70 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-[color:var(--color-muted-foreground)] sm:text-xs">
              Community Ratings
            </span>
            <h1 className="text-3xl font-bold text-[color:var(--color-foreground)] sm:text-4xl lg:text-5xl">
              Top rated reads this week
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed text-[color:var(--color-foreground-subtle)] sm:text-base lg:text-lg">
              Handpicked favorites based on recent reviews, rereads, and reader
              shelves. Tap a title and add it to your next cozy session.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)]/92 p-5 shadow-[0_30px_55px_-36px_rgba(30,20,10,0.38)]">
            <div className="flex items-start gap-4">
              <img
                src={topPick.cover}
                alt={`${topPick.title} cover`}
                className="h-28 w-20 rounded-xl object-cover shadow-[0_18px_32px_-18px_rgba(0,0,0,0.45)]"
                loading="lazy"
              />
              <div className="flex flex-1 flex-col gap-2">
                <div className="space-y-1">
                  <h2 className="text-lg font-semibold text-[color:var(--color-foreground)]">
                    {topPick.title}
                  </h2>
                  <p className="text-sm font-medium text-[color:var(--color-muted-foreground)]">
                    {topPick.author}
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-2 text-sm">
                  <div className="flex items-center gap-1 text-[color:var(--color-accent)]">
                    <Star className="size-4 fill-current" />
                    <span className="font-semibold">
                      {topPick.rating.toFixed(1)}
                    </span>
                  </div>
                  <span className="text-[color:var(--color-muted-foreground)]">
                    ({topPick.reviews.toLocaleString()} reviews)
                  </span>
                </div>
                <p className="text-sm text-[color:var(--color-foreground-subtle)]">
                  {topPick.highlight}
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {books.map((book, index) => {
          const percent = Math.min(100, (book.rating / 5) * 100);

          return (
            <article
              key={book.id}
              className="group relative overflow-hidden rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)]/92 p-5 shadow-[0_25px_45px_-30px_rgba(30,20,10,0.32)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_40px_60px_-40px_rgba(30,20,10,0.38)]"
            >
              <div className="flex items-start gap-4">
                <img
                  src={book.cover}
                  alt={`${book.title} cover`}
                  className="h-28 w-20 rounded-xl object-cover shadow-[0_18px_32px_-18px_rgba(0,0,0,0.45)]"
                  loading="lazy"
                />
                <div className="flex min-w-0 flex-1 flex-col gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="truncate text-base font-semibold text-[color:var(--color-foreground)]">
                        {book.title}
                      </h3>
                      <span className="shrink-0 rounded-full bg-[color:var(--color-muted)]/65 px-2.5 py-1 text-[0.65rem] font-semibold tracking-[0.24em] uppercase text-[color:var(--color-muted-foreground)]">
                        #{index + 1}
                      </span>
                    </div>
                    <p className="truncate text-xs font-medium text-[color:var(--color-muted-foreground)] sm:text-sm">
                      {book.author}
                    </p>
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-1 text-[color:var(--color-accent)]">
                        {Array.from({ length: 5 }).map((_, starIndex) => (
                          <Star
                            key={`${book.id}-star-${starIndex}`}
                            className={cn(
                              "size-4",
                              starIndex + 1 <= Math.round(book.rating)
                                ? "fill-current"
                                : "text-[color:var(--color-border)]",
                            )}
                          />
                        ))}
                      </div>
                      <span className="font-semibold text-[color:var(--color-foreground)]">
                        {book.rating.toFixed(1)}
                      </span>
                    </div>

                    <div className="h-2 w-full overflow-hidden rounded-full bg-[color:var(--color-muted)]/70">
                      <div
                        className="h-full rounded-full bg-[color:var(--color-accent)] transition-all duration-700"
                        style={{ width: `${percent}%` }}
                      />
                    </div>

                    <p className="text-xs text-[color:var(--color-muted-foreground)]">
                      {book.reviews.toLocaleString()} reviews · {book.highlight}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default RatingPage;
