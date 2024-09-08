import "server-only";
import { prisma } from "@/libs/db";
import { capitalize } from "@/libs/utils";
import { unstable_cache } from "next/cache";

const eventsPerPage = 6;

export async function fetchEventsForCity(city: string, page = 1) {
  const normalizedCity = city === "all" ? undefined : capitalize(city);

  const getCachedEvents = unstable_cache(
    async () => {
      const events = await prisma.eventoEvent.findMany({
        where: {
          city: normalizedCity,
        },
        orderBy: { date: "asc" },
        take: eventsPerPage,
        skip: (page - 1) * eventsPerPage,
      });

      const totalCount = await prisma.eventoEvent.count({
        where: {
          city: normalizedCity,
        },
      });

      return { events, totalCount };
    },
    [city, page.toString()],
    {
      tags: ["events"],
      revalidate: 30,
    }
  );

  const { events, totalCount } = await getCachedEvents();

  const hasNextPage = page * eventsPerPage < totalCount;
  const hasPreviousPage = page > 1;

  return {
    events,
    hasNextPage,
    hasPreviousPage,
  };
}
