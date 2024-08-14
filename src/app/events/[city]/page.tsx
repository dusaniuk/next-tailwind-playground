import { H1 } from "@/components/H1";
import { EventoEvent } from "@/lib/types";

export type EventPageProps = {
  params: {
    city: string;
  };
};

export default async function EventPage(props: EventPageProps) {
  const { params } = props;
  const { city } = params;

  const response = await fetch(
    "https://bytegrad.com/course-assets/projects/evento/api/events?city=austin"
  );

  const events: EventoEvent[] = await response.json();

  return (
    <main className="flex flex-col items-center py-24 px-[1.25rem] min-h-[110vh]">
      <H1>
        {city === "all" ? (
          "All Events"
        ) : (
          <>
            Events in <span className="text-accent capitalize">{city}</span>
          </>
        )}
      </H1>
      <section>
        {events.map((event) => (
          <div key={event.id}>
            <h2>{event.name}</h2>
          </div>
        ))}
      </section>
    </main>
  );
}
