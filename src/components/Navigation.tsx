"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "HOME", path: "/" },
  { name: "JOURNAL", path: "/journal" },
  { name: "BOOKS", path: "/books" },
  { name: "QUOTES", path: "/quotes" },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="mb-20">
      <ul className="flex flex-wrap gap-x-8 gap-y-4 text-xs tracking-[0.2em] text-stone-500 font-medium">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <li key={item.path}>
              <Link
                href={item.path}
                className={`transition-all duration-300 hover:text-stone-100 ${
                  isActive ? "text-stone-100 border-b border-stone-100 pb-1" : ""
                }`}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
