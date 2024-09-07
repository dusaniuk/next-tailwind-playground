import { PaginationControls } from "@/libs/ui/components/PaginationControls/PaginationControls";
import { EventCard } from "../EventCard";
import { fetchEventsForCity } from "../fetchEventsForCity";

export interface EventsListProps {
  city: string;
  page?: number;
}

export async function EventsList(props: EventsListProps) {
  const { city, page = 1 } = props;

  const { events, hasNextPage, hasPreviousPage } = await fetchEventsForCity(
    city,
    page
  );

  const previousPagePath = hasPreviousPage
    ? `/events/${city}?page=${page - 1}`
    : null;
  const nextPagePath = hasNextPage ? `/events/${city}?page=${page + 1}` : null;

  return (
    <section className="flex flex-wrap gap-10 justify-center max-w-[70rem] px-[1.25rem]">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
      <PaginationControls
        nextPagePath={nextPagePath}
        previousPagePath={previousPagePath}
      />
    </section>
  );
}
