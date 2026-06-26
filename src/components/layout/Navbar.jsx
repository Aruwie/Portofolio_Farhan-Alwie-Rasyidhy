import { useState } from "react";

import navigation from "../../data/navigation";
import profile from "../../data/profile";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id) => {
    document.querySelector(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full px-4 py-4">
      <nav className="mx-auto max-w-6xl rounded-2xl border border-primary/20 bg-background/80 shadow-md backdrop-blur-md">
        <div className="flex items-center justify-between px-6 py-4">
          <button
            onClick={() => handleScroll("#home")}
            className="text-lg font-bold text-primary transition hover:opacity-80"
          >
            <span className="hidden sm:inline">{profile.fullName}</span>
            <span className="sm:hidden">{profile.shortName}</span>
          </button>

          {/* Desktop Menu */}
          <ul className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <li key={item.href}>
                <button
                  onClick={() => handleScroll(item.href)}
                  className="font-medium text-text transition hover:text-primary"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-2xl text-primary transition hover:bg-primaryalt md:hidden"
            aria-label="Toggle navigation"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="border-t border-primary/20 px-6 py-4 md:hidden">
            {navigation.map((item) => (
              <li key={item.href}>
                <button
                  onClick={() => handleScroll(item.href)}
                  className="block w-full py-3 text-left font-medium text-text transition hover:text-primary"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}

export default Navbar;