import { prisma } from "@/libs/db";

export function fetchEvent(slug: string) {
  return prisma.eventoEvent.findUnique({
    where: { slug },
  });
}
