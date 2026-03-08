import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-poe-border bg-poe-dark text-stone-500 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <h3 className="text-poe-gold font-semibold mb-2">⚡ PoE Companion</h3>
            <p className="text-stone-500 text-xs leading-relaxed">
              A fan-made companion tool for Path of Exile. Not affiliated with Grinding Gear
              Games.
            </p>
          </div>
          <div>
            <h3 className="text-stone-300 font-semibold mb-2">Sections</h3>
            <ul className="space-y-1 text-xs">
              {[
                { href: "/leveling-guide", label: "Leveling Guide" },
                { href: "/items", label: "Items Database" },
                { href: "/crafting", label: "Crafting Simulator" },
                { href: "/builds", label: "Pro Builds" },
                { href: "/news", label: "News" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-poe-gold transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-stone-300 font-semibold mb-2">Resources</h3>
            <ul className="space-y-1 text-xs">
              <li>
                <a
                  href="https://www.pathofexile.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-poe-gold transition-colors"
                >
                  Official PoE Website ↗
                </a>
              </li>
              <li>
                <a
                  href="https://poe.ninja"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-poe-gold transition-colors"
                >
                  poe.ninja ↗
                </a>
              </li>
              <li>
                <a
                  href="https://maxroll.gg/poe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-poe-gold transition-colors"
                >
                  maxroll.gg ↗
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="poe-divider mt-6 mb-4" />
        <p className="text-center text-xs text-stone-600">
          Path of Exile is a trademark of Grinding Gear Games. This site is not affiliated with
          or endorsed by Grinding Gear Games.
        </p>
      </div>
    </footer>
  );
}
