import { EventoEvent } from "@/libs/types";

export async function fetchEventsForCity(city: string) {
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
  );

  const events: EventoEvent[] = await response.json();

  return events;
}
