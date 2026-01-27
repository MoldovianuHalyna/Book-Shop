import { cn } from "../../lib/utils";

export type BookMeta = {
  id: string;
  title: string;
  author: string;
  price: string;
  imageSrc: string;
  summary: string;
};

type BookCardProps = {
  book: BookMeta;
  isDark: boolean;
  onSelect?: (book: BookMeta) => void;
};

const BookCard = ({ book, isDark, onSelect }: BookCardProps) => {
  return (
    <button
      type="button"
      onClick={() => onSelect?.(book)}
      className="group relative flex w-full flex-col overflow-hidden rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)]/92 text-left shadow-[0_25px_45px_-28px_rgba(30,20,10,0.32)] transition-all duration-500 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[color:var(--color-accent)]/30 hover:-translate-y-2 hover:shadow-[0_40px_55px_-32px_rgba(30,20,10,0.38)]"
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        <img
          src={book.imageSrc}
          alt={`${book.title} cover`}
          className={cn(
            "h-full w-full object-cover transition-transform duration-700",
            "group-hover:scale-105",
            isDark &&
              "dark:drop-shadow-[0_28px_45px_rgba(255,188,100,0.55)] dark:brightness-[1.08]",
          )}
          loading="lazy"
        />
        {isDark && (
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,192,130,0.28)_0%,_transparent_60%)] mix-blend-screen" />
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-semibold text-[color:var(--color-foreground)]">
            {book.title}
          </h3>
          <p className="text-sm font-medium text-[color:var(--color-muted-foreground)]">
            {book.author}
          </p>
        </div>

        <div className="mt-auto flex items-center justify-between">
          <span className="rounded-full bg-[color:var(--color-muted)]/70 px-3 py-1 text-xs font-semibold tracking-[0.25em] uppercase text-[color:var(--color-muted-foreground)]">
            New Arrival
          </span>
          <span className="text-lg font-semibold text-[color:var(--color-accent)]">
            €{book.price}
          </span>
        </div>
      </div>
    </button>
  );
};

export default BookCard;
