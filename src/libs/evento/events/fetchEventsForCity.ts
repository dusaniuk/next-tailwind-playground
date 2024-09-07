import { prisma } from "@/libs/db";
import { capitalize } from "@/libs/utils";

export function fetchEventsForCity(city: string) {
  return prisma.eventoEvent.findMany({
    where: {
      city: city === "all" ? undefined : capitalize(city),
    },
    orderBy: { date: "asc" },
  });
}
