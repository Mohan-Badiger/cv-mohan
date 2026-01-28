import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Activity", href: "#activity" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  /* Theme */
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  /* Smooth scroll with offset */
  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (!section) return;

    const offset = -80; // navbar height
    const y =
      section.getBoundingClientRect().top +
      window.pageYOffset +
      offset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  /* Active section detection */
  useEffect(() => {
    const onScroll = () => {
      const scrollPos = window.scrollY + 100;

      navItems.forEach((item) => {
        const section = document.querySelector(item.href);
        if (
          section &&
          section.offsetTop <= scrollPos &&
          section.offsetTop + section.offsetHeight > scrollPos
        ) {
          setActive(item.href);
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 border-b border-gray-200/70 dark:border-gray-800/70 bg-white/80 dark:bg-black/80 backdrop-blur"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* Brand */}
        <button
          onClick={() => scrollToSection("#")}
          className="text-sm sm:text-base font-semibold tracking-wide text-black dark:text-white"
        >
          Mohan&nbsp;Badiger
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 relative">
          {navItems.map((item) => {
            const isActive = active === item.href;

            return (
              <li key={item.name} className="relative">
                <button
                  onClick={() => scrollToSection(item.href)}
                  className={`text-sm transition ${
                    isActive
                      ? "text-black dark:text-white"
                      : "text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
                  }`}
                >
                  {item.name}
                </button>

                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-2 left-0 h-2px w-full bg-black dark:bg-white"
                  />
                )}
              </li>
            );
          })}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <motion.button
            whileTap={{ rotate: 180 }}
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full border border-gray-300 dark:border-gray-700 text-black dark:text-white"
          >
            {darkMode ? <FiSun size={16} /> : <FiMoon size={16} />}
          </motion.button>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-black dark:text-white"
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-black"
          >
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-4">
              <ul className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => {
                      scrollToSection(item.href);
                      setOpen(false);
                    }}
                    className="text-left text-sm text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
                  >
                    {item.name}
                  </button>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
