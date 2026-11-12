"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DividerSvg from "@/Assets/vectors/divider.svg?react";
import { navLinks } from "./nav-data";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const mobileMenuId = useId();

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <nav
        className="fixed top-0 right-0 z-3 flex h-screen w-40 flex-col items-center p-5 font-heading max-[1100px]:hidden"
        aria-label="منوی اصلی"
      >
        <Link
          className="font-script text-6xl text-secondary hover:text-primary"
          href="/"
          aria-label="لومس، صفحه اصلی"
        >
          Lomes
        </Link>

        <div className="absolute top-1/2 flex w-full -translate-y-1/2 flex-col">
          <ul className="flex flex-col items-center gap-16">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={pathname === href ? "page" : undefined}
                  className="text-4xl text-secondary"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div
            className="pointer-events-none fixed top-1/2 right-47.5 h-0 w-0"
            aria-hidden="true"
          >
            <DividerSvg className="h-auto w-130 transform-[translate(55%,-50%)_rotate(90deg)]" />
          </div>
        </div>
      </nav>

      <nav
        className="fixed inset-x-0 top-0 z-3 px-4 pt-3 font-heading min-[1100px]:hidden"
        aria-label="منوی اصلی موبایل"
      >
        <div className="flex min-h-14 items-center justify-between rounded-2xl bg-primary px-4 py-2 text-bg shadow-lg">
          <Link
            className="rounded-lg font-script text-4xl leading-none transition-colors duration-200 hover:text-bg/80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bg motion-reduce:transition-none"
            href="/"
            aria-label="لومس، صفحه اصلی"
            onClick={closeMenu}
          >
            Lomes
          </Link>

          <button
            className="group inline-flex min-h-11 items-center gap-3 rounded-xl px-3 py-2 text-lg transition-colors duration-200 hover:bg-bg/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg motion-reduce:transition-none"
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls={mobileMenuId}
            aria-label={isMenuOpen ? "بستن منو" : "باز کردن منو"}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span>{isMenuOpen ? "بستن" : "منو"}</span>
            <span
              className="flex w-6 flex-col gap-1.5 [&>span]:h-0.5 [&>span]:rounded-full [&>span]:bg-current [&>span]:transition-transform [&>span]:duration-300 [&>span]:ease-out motion-reduce:[&>span]:transition-none group-aria-expanded:[&>span:first-child]:translate-y-1 group-aria-expanded:[&>span:first-child]:rotate-45 group-aria-expanded:[&>span:last-child]:-translate-y-1 group-aria-expanded:[&>span:last-child]:-rotate-45"
              aria-hidden="true"
            >
              <span />
              <span />
            </span>
          </button>
        </div>

        <div
          className={`grid transition-[grid-template-rows,opacity,margin] duration-300 ease-out motion-reduce:transition-none ${isMenuOpen ? "mt-2 grid-rows-[1fr] opacity-100" : "pointer-events-none mt-0 grid-rows-[0fr] opacity-0"}`}
          id={mobileMenuId}
          aria-hidden={!isMenuOpen}
          inert={!isMenuOpen}
        >
          <div className="min-h-0 overflow-hidden rounded-2xl bg-primary text-bg shadow-lg">
            <ul className="max-h-[calc(100dvh-5.5rem)] overflow-y-auto overscroll-contain p-2">
              {navLinks.map(({ label, href }, index) => (
                <li
                  className={index === 0 ? "" : "border-t border-bg/15"}
                  key={href}
                >
                  <Link
                    href={href}
                    onClick={closeMenu}
                    aria-current={pathname === href ? "page" : undefined}
                    className="group flex min-h-12 items-center justify-between rounded-xl px-4 py-3 text-right text-lg font-medium transition-[background-color,color,padding] duration-200 ease-out hover:bg-bg/10 hover:pr-5 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-bg aria-[current=page]:bg-accent aria-[current=page]:text-bg motion-reduce:transition-none"
                  >
                    {label}
                    <span
                      aria-hidden="true"
                      className="text-bg/55 transition-transform duration-200 group-hover:-translate-x-1 group-aria-[current=page]:text-bg motion-reduce:transition-none"
                    >
                      ‹
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
