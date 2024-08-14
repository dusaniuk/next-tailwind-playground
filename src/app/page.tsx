import { H1 } from "@/components/H1";
import { SearchForm } from "@/components/SearchForm";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-3 pt-36">
      <H1>Find Events around you</H1>
      <p className="mt-7 mb-12 text-lg md:text-2xl">
        Browse more than{" "}
        <span className="font-bold italic underline text-accent">
          10,000 events
        </span>{" "}
        around you
      </p>

      <SearchForm />

      <section className="mt-4 flex gap-x-4 text-sm text-white/50">
        <p>Popular:</p>
        <div className="space-x-2 font-semibold">
          <Link href={"/events/austin"}>Austin</Link>
          <Link href={"/events/vinnytsia"}>Vinnytsia</Link>
        </div>
      </section>
    </main>
  );
}
