import Link from "next/link";

const currentYear = new Date().getFullYear();

const routes = [
  { href: "/terms-conditions", label: "Terms & Conditions" },
  { href: "/privacy-policy", label: "Privacy Policy" },
];

export function Footer() {
  return (
    <footer className="mt-auto flex items-center justify-between h-16 border-t border-white/10 px-3 sm:px-6 md:px-9 text-xs text-white/25">
      <small className="text-xs">
        &copy; {currentYear} Yaro. All rights reserved.
      </small>
      <ul className="flex gap-x-3 sm:gap-x-8">
        {routes.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}
