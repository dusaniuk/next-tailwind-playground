import { EventCard } from "../EventCard";
import { fetchEventsForCity } from "../fetchEventsForCity";

export interface EventsListProps {
  city: string;
}

export async function EventsList(props: EventsListProps) {
  const { city } = props;

  const events = await fetchEventsForCity(city);

  return (
    <section className="flex flex-wrap gap-10 justify-center max-w-[70rem] px-[1.25rem]">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}
