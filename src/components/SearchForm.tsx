"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export function SearchForm() {
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedValue = searchValue.trim();

    if (!trimmedValue) return;

    router.push(`/events/${trimmedValue}`);
  };

  return (
    <form className="w-full sm:w-[36rem]" onSubmit={handleSubmit}>
      <input
        type="text"
        className="w-full h-16 rounded-lg bg-white/[7%] px-6 outline-none ring-accent/50 focus:ring-2 focus:bg-white/10 transition-colors"
        placeholder="Search events in a city..."
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        spellCheck={false}
      />
    </form>
  );
}
