import { EventoEvent } from "@/libs/types";
import { EventCard } from "./EventCard";

export interface EventsListProps {
  events: EventoEvent[];
}

export function EventsList(props: EventsListProps) {
  const { events } = props;

  return (
    <section className="flex flex-wrap gap-10 justify-center max-w-[70rem] px-[1.25rem]">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}
