import { EventoEvent } from "@/libs/types";
import { EventCard } from "../EventCard";

export interface EventsListProps {
  city: string;
}

export async function EventsList(props: EventsListProps) {
  const { city } = props;

  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
  );

  const events: EventoEvent[] = await response.json();

  return (
    <section className="flex flex-wrap gap-10 justify-center max-w-[70rem] px-[1.25rem]">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}
