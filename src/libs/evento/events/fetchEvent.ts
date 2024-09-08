import "server-only";
import { prisma } from "@/libs/db";
import { unstable_cache } from "next/cache";

export async function fetchEvent(slug: string) {
  const getCachedEvent = unstable_cache(
    () =>
      prisma.eventoEvent.findUnique({
        where: { slug },
      }),
    [slug],
    {
      tags: ["event"],
      revalidate: 30,
    }
  );

  return getCachedEvent();
}
