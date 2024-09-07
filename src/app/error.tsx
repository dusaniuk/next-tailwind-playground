"use client";

import { H1 } from "@/libs/ui/components/H1";
import { useEffect } from "react";

export type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error(props: ErrorProps) {
  const { error, reset } = props;

  useEffect(() => {
    // just log the error)
    if (process.env.NODE_ENV === "development") {
      console.error(error);
    }
  }, [error]);

  return (
    <main className="text-center py-24">
      <H1>Oops! Something went wrong.</H1>
      {process.env.NODE_ENV === "development" && (
        <div className="flex flex-col gap-y-2 mt-4 text-white/75">
          <p className="text-lg">(dev) Error message:</p>
          <p className="text-md">{error.message}</p>
        </div>
      )}
      <button
        onClick={reset}
        className="text-lg mt-5 capitalize py-2 px-4 rounded-md border-white/10 border-2 state-active"
      >
        Try again
      </button>
    </main>
  );
}
