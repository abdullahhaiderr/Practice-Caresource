"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, Phone, Mail } from "lucide-react";
import { business, primaryNav, ctaNav, type NavItem } from "@/config/business";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        setMobileExpanded(null);
        window.setTimeout(() => triggerRef.current?.focus(), 20);
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((element) => element.offsetParent !== null);

      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    const focusTimer = window.setTimeout(() => closeButtonRef.current?.focus(), 40);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      window.clearTimeout(focusTimer);
    };
  }, [open]);

  const closeMenu = () => {
    setOpen(false);
    setMobileExpanded(null);
    window.setTimeout(() => triggerRef.current?.focus(), 20);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
          scrolled
            ? "border-[#dce7eb]/80 bg-white/90 shadow-[0_12px_40px_-20px_rgba(23,59,86,0.16)] backdrop-blur-xl"
            : "border-[#dce7eb]/80 bg-white/95 backdrop-blur-xl"
        }`}
      >
        <div className="container-x flex h-16 items-center justify-between gap-4 sm:h-[4.5rem]">
          <Link href="/" aria-label="PracticeCareSource home" className="shrink-0">
            <span className="font-display text-xl sm:text-2xl font-bold text-navy tracking-tight">
              PracticeCareSource
            </span>
          </Link>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-6 lg:flex text-sm font-medium"
          >
            {primaryNav.map((item) =>
              item.hasDropdown && item.dropdown ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    type="button"
                    className="flex items-center gap-1 text-ink hover:text-blue transition-colors py-2"
                    aria-expanded={openDropdown === item.label}
                    aria-haspopup="true"
                    onClick={() =>
                      setOpenDropdown(openDropdown === item.label ? null : item.label)
                    }
                  >
                    {item.label}
                    <ChevronDown
                      className={`size-3.5 transition-transform ${
                        openDropdown === item.label ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                  {openDropdown === item.label && (
                    <div className="absolute left-0 top-full w-64 bg-white border border-[#dce7eb] rounded-xl shadow-soft backdrop-blur-xl py-2 z-50">
                      {item.href !== "#resources" && (
                        <Link
                          href={item.href}
                          className="block px-4 py-2 text-sm font-semibold text-navy hover:bg-[#f2f7f8] hover:text-blue transition-colors"
                        >
                          All {item.label}
                        </Link>
                      )}
                      {item.dropdown.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="block px-4 py-2 text-sm text-ink-soft hover:bg-bg-secondary hover:text-blue transition-colors"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-ink-soft hover:text-blue transition-colors"
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="flex items-center gap-3">
            <Link href={ctaNav.href} className="btn btn-primary hidden sm:inline-flex">
              {ctaNav.label}
            </Link>
            <button
              ref={triggerRef}
              type="button"
              onClick={() => setOpen(true)}
              className="grid size-10 place-items-center rounded-lg border border-border text-ink transition hover:bg-bg-secondary lg:hidden"
              aria-expanded={open}
              aria-controls={open ? "mobile-menu" : undefined}
              aria-label="Open site menu"
            >
              <Menu className="size-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div
          ref={dialogRef}
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 z-[70] overflow-y-auto bg-paper lg:hidden"
        >
          <div className="min-h-full">
            <div className="container-x flex h-16 items-center justify-between border-b border-border">
              <span className="font-display text-lg font-bold text-navy tracking-tight">
                PracticeCareSource
              </span>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={closeMenu}
                className="grid size-10 place-items-center rounded-lg border border-border text-ink transition hover:bg-bg-secondary"
                aria-label="Close site menu"
              >
                <X className="size-5" aria-hidden="true" />
              </button>
            </div>

            <div className="container-x py-6">
              <ul className="space-y-1">
                {primaryNav.map((item) => (
                  <MobileNavItem
                    key={item.label}
                    item={item}
                    expanded={mobileExpanded === item.label}
                    onToggle={() =>
                      setMobileExpanded(
                        mobileExpanded === item.label ? null : item.label,
                      )
                    }
                    onNavigate={closeMenu}
                  />
                ))}
                <li className="pt-6">
                  <Link
                    href={ctaNav.href}
                    onClick={closeMenu}
                    className="btn btn-primary w-full"
                  >
                    {ctaNav.label}
                  </Link>
                </li>
                <li className="mt-4 space-y-3 pb-8 text-sm text-ink-soft">
                  {business.phoneHref && business.phone ? (
                    <a
                      href={business.phoneHref}
                      className="flex items-center gap-2 transition hover:text-blue"
                    >
                      <Phone className="size-4" aria-hidden="true" />
                      {business.phone}
                    </a>
                  ) : null}
                  {business.emailHref && business.email ? (
                    <a
                      href={business.emailHref}
                      className="flex items-center gap-2 transition hover:text-blue"
                    >
                      <Mail className="size-4" aria-hidden="true" />
                      {business.email}
                    </a>
                  ) : null}
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function MobileNavItem({
  item,
  expanded,
  onToggle,
  onNavigate,
}: {
  item: NavItem;
  expanded: boolean;
  onToggle: () => void;
  onNavigate: () => void;
}) {
  if (item.hasDropdown && item.dropdown) {
    return (
      <li>
        <button
          type="button"
          onClick={onToggle}
          className="flex w-full items-center justify-between border-b border-border-soft py-4 font-medium text-ink transition"
          aria-expanded={expanded}
        >
          {item.label}
          <ChevronDown
            className={`size-4 transition-transform ${expanded ? "rotate-180" : ""}`}
            aria-hidden="true"
          />
        </button>
        {expanded && (
          <ul className="mt-2 space-y-1 pl-4">
            {item.dropdown.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={onNavigate}
                  className="block px-2 py-2 text-sm text-ink-soft hover:text-blue transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </li>
    );
  }

  return (
    <li>
      <Link
        href={item.href}
        onClick={onNavigate}
        className="block border-b border-border-soft py-4 font-medium text-ink-soft hover:text-blue transition-colors"
      >
        {item.label}
      </Link>
    </li>
  );
}
