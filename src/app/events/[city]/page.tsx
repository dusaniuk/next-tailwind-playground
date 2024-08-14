import {
  EventsList,
  EventsListSkeleton,
} from "@/libs/evento/events/EventsList";
import { H1 } from "@/libs/ui/components/H1";
import { Suspense } from "react";

export type EventPageProps = {
  params: {
    city: string;
  };
};

export default async function EventPage(props: EventPageProps) {
  const { params } = props;
  const { city } = params;

  return (
    <main className="flex flex-col items-center py-24 px-[1.25rem] min-h-[110vh]">
      <H1 className="mb-28">
        {city === "all" ? (
          "All Events"
        ) : (
          <>
            Events in <span className="text-accent capitalize">{city}</span>
          </>
        )}
      </H1>
      <Suspense fallback={<EventsListSkeleton />}>
        <EventsList city={city} />
      </Suspense>
    </main>
  );
}
