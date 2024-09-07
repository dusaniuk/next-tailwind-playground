import { prisma } from "@/libs/db";
import { capitalize } from "@/libs/utils";

const eventsPerPage = 6;

export async function fetchEventsForCity(city: string, page = 1) {
  const normalizedCity = city === "all" ? undefined : capitalize(city);

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

  const hasNextPage = page * eventsPerPage < totalCount;
  const hasPreviousPage = page > 1;

  return {
    events,
    hasNextPage,
    hasPreviousPage,
  };
}
