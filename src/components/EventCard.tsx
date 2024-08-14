import { EventoEvent } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

export type EventCardProps = {
  event: EventoEvent;
};

export function EventCard(props: EventCardProps) {
  const { event } = props;
  const date = new Date(event.date);
  const eventDay = date.toLocaleDateString("en-US", { day: "2-digit" });
  const eventMonth = date.toLocaleDateString("en-US", { month: "short" });

  return (
    <Link
      className="relative flex flex-col flex-1 rounded-xl overflow-hidden bg-white/[3%] basis-80 h-[23.75rem] max-w-[31.25rem] hover:scale-105 active:scale-[1.02] transition-transform"
      href={`/event/${event.slug}`}
    >
      <Image
        className="h-[60%] object-fit"
        src={event.imageUrl}
        alt={event.name}
        height={280}
        width={500}
      />
      <div className="flex flex-col flex-1 justify-center items-center">
        <h2 className="text-2xl font-semibold">{event.name}</h2>
        <p className="italic text-white/75">By {event.organizerName}</p>
        <p className="text-sm text-white/50 mt-4">{event.location}</p>
      </div>
      <div className="absolute flex flex-col justify-center items-center left-[0.75rem] top-[0.75rem] w-[3rem] h-[3rem] bg-black/30 rounded-md">
        <p className="text-xl font-bold -mb-[0.25rem]">{eventDay}</p>
        <p className="text-xs text-accent uppercase font-bold">{eventMonth}</p>
      </div>
    </Link>
  );
}
