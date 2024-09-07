import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { PropsWithChildren } from "react";

export type PaginationButtonProps = PropsWithChildren<{
  direction: "left" | "right";
  href: string;
}>;

export function PaginationButton(props: PaginationButtonProps) {
  const { children, direction, href } = props;

  return (
    <Link
      href={href}
      className="flex items-center gap-x-2 text-white px-5 py-3 bg-white/5 rounded-md opacity-75 hover:opacity-100 transition text-sm"
    >
      {direction === "left" ? <ArrowLeftIcon /> : <ArrowRightIcon />}
      {children}
    </Link>
  );
}
