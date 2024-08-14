import { EventContentSection } from "@/libs/evento/events/EventContentSection";
import { EventoEvent } from "@/libs/types";
import { H1 } from "@/libs/ui/components/H1";
import Image from "next/image";

export type EventPageProps = {
  params: {
    slug: string;
  };
};

export default async function EventPage(props: EventPageProps) {
  const { params } = props;
  const { slug } = params;

  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`
  );

  const event: EventoEvent = await response.json();
  const eventDate = new Date(event.date);

  return (
    <main>
      <section className="relative overflow-hidden flex justify-center items-center py-14 md:py-20">
        <Image
          className="object-cover blur-3xl z-0"
          src={event.imageUrl}
          alt="Event background image"
          fill
          quality={10}
          sizes="(max-width: 1280px) 100vw, 1280px"
          priority
        />
        <div className="z-1 relative flex flex-col lg:flex-row gap-6 lg:gap-x-16">
          <Image
            className="rounded-xl border-2 border-white/20 object-cover"
            src={event.imageUrl}
            alt={event.name}
            width={300}
            height={201}
          />
          <div className="flex flex-col">
            <p className="text-white/75">
              {eventDate.toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </p>
            <H1 className="mb-2 mt-1 whitespace-nowrap lg:text-5xl">
              {event.name}
            </H1>
            <p className="whitespace-nowrap text-xl text-white/75">
              Organized by <span className="italic">{event.organizerName}</span>
            </p>
            <button className="bg-white/20 text-lg mt-5 lg:mt-auto capitalize py-2 rounded-md border-white/10 border-2 state-active">
              Get Tickets
            </button>
          </div>
        </div>
      </section>
      <div className="text-center px-5 py-14 min-h-[75vh]">
        <EventContentSection
          title="About this event"
          content={event.description}
        />
        <EventContentSection
          className="mt-12"
          title="Location"
          content={event.location}
        />
      </div>
    </main>
  );
}
