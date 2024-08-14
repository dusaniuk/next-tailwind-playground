import { EventCardSkeleton } from "../EventCard";

export function EventsListSkeleton() {
  return (
    <section className="flex flex-wrap gap-10 justify-center max-w-[70rem] px-[1.25rem]">
      {[...Array(6)].map((_, index) => (
        <EventCardSkeleton key={index} />
      ))}
    </section>
  );
}
