import { motion } from "motion/react";
import { FiGlobe, FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="border-t border-gray-200/50 dark:border-gray-800/40 bg-white/30 dark:bg-black/30 backdrop-blur-md"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8">

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">

          {/* Left */}
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Mohan Badiger. All rights reserved.
          </p>

          {/* Right */}
          <div className="flex items-center justify-center sm:justify-end gap-3">
            <a
              href="mailto:mohanbadiger250@gmail.com"
              className="p-2.5 rounded-full glass-pill text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:scale-110 active:scale-95 transition duration-300"
              aria-label="Email Mohan Badiger"
            >
              <FiMail size={16} />
            </a>

            <a
              href="https://mohanbadiger.site"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full glass-pill text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:scale-110 active:scale-95 transition duration-300"
              aria-label="Mohan Badiger Portfolio Website"
            >
              <FiGlobe size={16} />
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;