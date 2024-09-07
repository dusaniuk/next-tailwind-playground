import {
  EventsList,
  EventsListSkeleton,
} from "@/libs/evento/events/EventsList";
import { H1 } from "@/libs/ui/components/H1";
import { Suspense } from "react";
import { Metadata } from "next";
import { capitalize, SearchParams } from "@/libs/utils";

function getCurrentPageFromSearchParams(params: SearchParams) {
  const pageParam = params?.page;
  if (!pageParam) {
    return 1;
  }

  if (typeof pageParam !== "string") {
    return 1;
  }

  const page = parseInt(pageParam);

  if (isNaN(page)) {
    return 1;
  }

  if (page < 1) {
    return 1;
  }

  return page;
}

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

  const currentPage = getCurrentPageFromSearchParams(searchParams);

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
      <Suspense key={city + currentPage} fallback={<EventsListSkeleton />}>
        <EventsList city={city} page={currentPage} />
      </Suspense>
    </main>
  );
}
