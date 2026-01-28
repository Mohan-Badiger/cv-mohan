import { motion } from "motion/react";
import { FiDownload, FiMail } from "react-icons/fi";

const Hero = () => {
  return (
    <section className="relative">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-17 pb-14">

        {/* Main Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="flex flex-col gap-6"
        >
          {/* Greeting */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400"
          >
            Hello, I’m
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black dark:text-white"
          >
            Mohan Badiger
          </motion.h1>

          {/* Role */}
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-lg sm:text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300"
          >
            Full Stack Developer (MERN)
          </motion.h2>

          {/* Summary */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-2xl text-base leading-relaxed text-gray-600 dark:text-gray-400"
          >
            I build scalable, clean, and performance-focused web applications.
            Passionate about writing maintainable code, solving real-world
            problems, and delivering reliable user experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 rounded-full bg-black dark:bg-white px-6 py-3 text-sm font-medium text-white dark:text-black transition hover:opacity-80"
            >
              <FiDownload />
              Download CV
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-gray-300 dark:border-gray-700 px-6 py-3 text-sm font-medium text-black dark:text-white transition hover:bg-gray-100 dark:hover:bg-gray-900"
            >
              <FiMail />
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle Background Accent */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-gray-200 dark:bg-gray-800 blur-3xl opacity-30" />
      </motion.div>
    </section>
  );
};

export default Hero;
