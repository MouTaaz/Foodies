"use client";

import Link from "next/link";
import css from "@/components/main-header/navLink.module.css";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children }) {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={path.startsWith(href) ? `${css.link} ${css.active}` : css.link}
    >
      {children}
    </Link>
  );
}
