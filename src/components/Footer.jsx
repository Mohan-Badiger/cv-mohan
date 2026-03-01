import { motion } from "motion/react";
import { FiGlobe, FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-black"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-6">

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">

          {/* Left */}
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Mohan S Badiger. All rights reserved.
          </p>

          {/* Right */}
          <div className="flex items-center justify-center sm:justify-end gap-5">
            <a
              href="mailto:mohanbadiger250@gmail.com"
              className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition"
              aria-label="Email Mohan S Badiger"
            >
              <FiMail size={17} />
            </a>

            <a
              href="https://mohanbadiger.site"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition"
              aria-label="Mohan S Badiger Portfolio Website"
            >
              <FiGlobe size={17} />
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;