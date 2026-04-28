import { Link, useLocation } from "wouter";

const navLinks = [
  { href: "/menu", label: "MENU" },
  { href: "/reservations", label: "RESERVATIONS" },
  { href: "/story", label: "STORY" },
  { href: "/gallery", label: "GALLERY" },
  { href: "/contact", label: "CONTACT" },
];

export function Navbar() {
  const [location] = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b border-border">
      <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        <Link href="/">
          <div className="font-heading font-bold text-xl tracking-wider cursor-pointer hover:text-primary transition-colors">
            CHEZ XUE
          </div>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <div
                className={`text-sm font-semibold tracking-widest cursor-pointer px-3 py-1.5 transition-colors ${
                  location === link.href ? "bg-[#FFCC00] text-black" : "hover:text-primary"
                }`}
              >
                {link.label}
              </div>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/reservations">
            <div className="hidden sm:inline-flex bg-[#FFCC00] hover:bg-[#FFCC00]/90 text-black font-bold text-sm px-6 py-3 tracking-wider cursor-pointer transition-colors">
              BOOK A TABLE
            </div>
          </Link>
          {/* Mobile menu toggle could go here if needed, keeping simple for now */}
        </div>
      </div>
    </header>
  );
}
