import { motion } from "motion/react";
import { FiMail, FiGlobe, FiSend } from "react-icons/fi";

const Contact = () => {
  return (
    <section id="contact" className="relative scroll-mt-24 pb-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8 sm:mb-10 text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-gray-900 dark:text-white">
            Let’s Connect
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-500 dark:text-gray-400">
            Open for opportunities, projects, and discussions
          </p>
        </motion.div>

        {/* Contact Banner Card */}
        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="glass-card p-8 sm:p-12 text-center flex flex-col items-center justify-center relative border border-black/10 dark:border-white/10"
        >
          {/* Centered Icon Container */}
          <span className="relative flex h-14 w-14 items-center justify-center bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-black dark:text-white mb-6">
            <FiSend size={22} className="animate-pulse text-black dark:text-white" />
          </span>

          <p className="mb-8 max-w-2xl text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed font-semibold font-mono">
            I am currently open to full-time engineering roles, internship opportunities, and collaborative full-stack projects.
            If you have an opening or a development requirement, feel free to reach out. I will get back to you as soon as possible!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto">
            {/* Email Button */}
            <a
              href="mailto:mohanbadiger250@gmail.com"
              className="inline-flex justify-center items-center gap-2 rounded-none bg-black/90 dark:bg-white/95 text-white dark:text-black px-8 py-3.5 text-sm font-bold border border-black dark:border-white hover:opacity-85 active:scale-95 transition-all duration-200 w-full sm:w-auto"
              aria-label="Email Mohan Badiger"
            >
              <FiMail size={16} />
              Email Me
            </a>

            {/* Portfolio Link */}
            <a
              href="https://mohanbadiger.site"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center gap-2 rounded-none glass-pill px-8 py-3.5 text-sm font-bold text-gray-900 dark:text-white hover:scale-105 active:scale-95 transition duration-300 w-full sm:w-auto border border-black/10 dark:border-white/10"
              aria-label="View Mohan Badiger Portfolio Website"
            >
              <FiGlobe size={16} />
              View Portfolio
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;