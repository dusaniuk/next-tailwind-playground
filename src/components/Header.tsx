"use client";

import Link from "next/link";
import { Logo } from "./Logo";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const routes = [
  { href: "/", label: "Home" },
  { href: "/events/all", label: "All Events" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="flex items-center justify-between border-b border-white/10 h-14 px-3 sm:px-6 md:px-9">
      <Logo />
      <nav className="h-full">
        <ul className="flex gap-x-6 h-full text-sm">
          {routes.map((link) => (
            <li
              key={link.href}
              className={cn(
                " hover:text-white flex items-center relative transition-colors",
                {
                  "text-white": pathname === link.href,
                  "text-white/50": pathname !== link.href,
                }
              )}
            >
              <Link href={link.href}>{link.label}</Link>
              {pathname === link.href && (
                <motion.div
                  layoutId="header-active-link"
                  className="bg-accent h-1 w-full absolute bottom-0"
                ></motion.div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
