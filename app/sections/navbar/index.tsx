"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DividerSvg from "@/Assets/vectors/divider.svg?react";
import { navLinks, socialLinks } from "./nav-data";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuId = useId();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const availableSocialLinks = socialLinks.filter((item) => item.url.trim());

  useEffect(() => {
    if (!isMenuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="navbar" aria-label="منوی اصلی">
      <div className="navbar-header">
        <Link
          className="navbar-logo"
          href="/"
          aria-label="لومس، صفحه اصلی"
          onClick={closeMenu}
        >
          Lomes
        </Link>

        <button
          ref={menuButtonRef}
          className="navbar-toggle"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls={menuId}
          aria-label={isMenuOpen ? "بستن منو" : "باز کردن منو"}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span>{isMenuOpen ? "بستن" : "منو"}</span>
          <span className="menu-icon" aria-hidden="true">
            <span />
            <span />
          </span>
        </button>
      </div>

      <div className="navbar-divider" aria-hidden="true">
        <DividerSvg className="navbar-divider-image" />
      </div>

      <div className="navbar-menu" id={menuId} data-open={isMenuOpen}>
        <ul className="navbar-links">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={closeMenu}
                aria-current={pathname === href ? "page" : undefined}
                className="navbar-link"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {availableSocialLinks.length > 0 && (
          <ul className="navbar-socials">
            {availableSocialLinks.map(({ label, url, icon: Icon }) => (
              <li key={label}>
                <a
                  href={url}
                  aria-label={label}
                  className="navbar-social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
