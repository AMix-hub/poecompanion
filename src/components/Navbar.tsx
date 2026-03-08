"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home", icon: "⚗" },
  { href: "/leveling-guide", label: "Leveling Guide", icon: "📖" },
  { href: "/items", label: "Items", icon: "⚔" },
  { href: "/crafting", label: "Crafting", icon: "🔨" },
  { href: "/builds", label: "Builds", icon: "🛡" },
  { href: "/news", label: "News", icon: "📰" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-poe-dark border-b border-poe-border shadow-lg shadow-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl">⚡</span>
            <span className="font-bold text-poe-gold group-hover:text-poe-gold-light transition-colors">
              PoE Companion
            </span>
          </Link>

          {/* Desktop navigation */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1.5 px-3 py-2 rounded text-sm font-medium transition-colors ${
                      active
                        ? "text-poe-gold bg-poe-card"
                        : "text-stone-400 hover:text-poe-gold hover:bg-poe-card"
                    }`}
                  >
                    <span aria-hidden>{link.icon}</span>
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-stone-400 hover:text-poe-gold p-2"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <ul className="md:hidden pb-3 space-y-1 border-t border-poe-border pt-3">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`flex items-center gap-2 px-3 py-2 rounded text-sm font-medium transition-colors ${
                      active
                        ? "text-poe-gold bg-poe-card"
                        : "text-stone-400 hover:text-poe-gold hover:bg-poe-card"
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    <span aria-hidden>{link.icon}</span>
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </nav>
  );
}
