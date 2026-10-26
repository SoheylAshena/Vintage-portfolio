"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, socialLinks } from "./nav-data";
import styles from "./navbar.module.css";

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
    <nav className={styles.navbar} aria-label="منوی اصلی">
      <div className={styles.mobileHeader}>
        <Link
          className={styles.logo}
          href="/"
          aria-label="لومس، صفحه اصلی"
          onClick={closeMenu}
        >
          Lomes
        </Link>

        <button
          ref={menuButtonRef}
          className={styles.menuToggle}
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls={menuId}
          aria-label={isMenuOpen ? "بستن منو" : "باز کردن منو"}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className={styles.menuLabel}>
            {isMenuOpen ? "بستن" : "منو"}
          </span>
          <span className={styles.menuIcon} aria-hidden="true">
            <span />
            <span />
          </span>
        </button>
      </div>

      <div className={styles.menuContent} id={menuId} data-open={isMenuOpen}>
        <ul className={styles.navList}>
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={closeMenu}
                aria-current={pathname === href ? "page" : undefined}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {availableSocialLinks.length > 0 && (
          <ul className={styles.social} aria-label="شبکه‌های اجتماعی">
            {availableSocialLinks.map(({ label, url, icon: Icon }) => (
              <li key={label}>
                <a
                  href={url}
                  aria-label={label}
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
