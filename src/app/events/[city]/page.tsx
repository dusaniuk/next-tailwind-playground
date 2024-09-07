import {
  EventsList,
  EventsListSkeleton,
} from "@/libs/evento/events/EventsList";
import { H1 } from "@/libs/ui/components/H1";
import { capitalize, SearchParams } from "@/libs/utils";
import { Metadata } from "next";
import { Suspense } from "react";
import { z } from "zod";

const pageNumberSchema = z.coerce.number().int().positive().optional();

export type EventPageProps = {
  params: {
    city: string;
  };
  searchParams: SearchParams;
};

export function generateMetadata(props: EventPageProps): Metadata {
  const { params } = props;
  const { city } = params;

  return {
    title: `EVENTO | Events in ${
      city === "all" ? "All Cities" : capitalize(city)
    }`,
  };
}

export default async function EventPage(props: EventPageProps) {
  const { params, searchParams } = props;
  const { city } = params;

  const currentPage = pageNumberSchema.safeParse(searchParams?.page);

  if (!currentPage.success) {
    throw new Error("Invalid page number");
  }

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
      <Suspense
        key={city + currentPage.data ?? 1}
        fallback={<EventsListSkeleton />}
      >
        <EventsList city={city} page={currentPage.data} />
      </Suspense>
    </main>
  );
}
