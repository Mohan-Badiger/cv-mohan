import { motion } from "motion/react";
import {
  FiDownload,
  FiMail,
  FiMapPin,
  FiGlobe,
} from "react-icons/fi";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative scroll-mt-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-16">

        {/* Main Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
                ease: "easeOut",
              },
            },
          }}
          className="flex flex-col gap-5 sm:gap-6"
        >
          {/* Greeting */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            className="text-xs font-medium uppercase tracking-widest text-gray-500 dark:text-gray-400"
          >
            Hello, I’m
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.55 }}
            className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-gray-900 dark:text-white leading-tight"
          >
            Mohan S Badiger
          </motion.h1>

          {/* Role */}
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.55 }}
            className="text-base sm:text-lg md:text-2xl font-medium text-gray-700 dark:text-gray-300"
          >
            Full Stack Developer <span className="text-gray-400">(MERN Stack)</span>
          </motion.h2>

          {/* Location + Socials */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 14 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.45 }}
            className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 sm:gap-5 text-sm text-gray-600 dark:text-gray-400"
          >
            {/* Location */}
            <div className="flex items-center gap-1.5">
              <FiMapPin className="opacity-70" />
              Bengaluru, Karnataka, India
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
              {[
                {
                  href: "https://mohanbadiger.site",
                  icon: <FiGlobe size={16} />,
                  label: "Portfolio",
                },
                {
                  href: "https://github.com/Mohan-Badiger",
                  icon: <FaGithub size={16} />,
                  label: "GitHub",
                },
                {
                  href: "https://www.linkedin.com/in/mohan-badiger",
                  icon: <FaLinkedin size={16} />,
                  label: "LinkedIn",
                },
                {
                  href: "mailto:mohanbadiger250@gmail.com",
                  icon: <FiMail size={16} />,
                  label: "Email",
                },
                {
                  href: "https://www.instagram.com/mohan_badiger250",
                  icon: <FaInstagram size={16} />,
                  label: "Instagram",
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="p-2.5 rounded-full glass-pill text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:scale-110 active:scale-95 transition duration-300"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.55 }}
            className="max-w-2xl text-sm sm:text-base leading-relaxed text-gray-600 dark:text-gray-400"
          >
            I build scalable, performance-focused web applications using the
            MERN stack (React.js, Node.js, MongoDB, Express), with strong emphasis
            on clean architecture, usability, and maintainable code.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 pt-3"
          >
            <a
              href="/resume.pdf"
              download
              className="inline-flex justify-center items-center gap-2 rounded-full bg-black/90 dark:bg-white/90 text-white dark:text-black px-6 py-3 text-sm font-semibold shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition duration-300"
            >
              <FiDownload className="stroke-[2.5]" />
              Download CV
            </a>

            <a
              href="#contact"
              className="inline-flex justify-center items-center gap-2 rounded-full glass-pill px-6 py-3 text-sm font-semibold text-gray-900 dark:text-white hover:scale-105 active:scale-95 transition duration-300"
            >
              <FiMail />
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Accent */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.1 }}
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-1/3 h-60 sm:h-72 w-60 sm:w-72 -translate-x-1/2 rounded-full bg-gray-200/60 dark:bg-gray-800/60 blur-3xl" />
      </motion.div>
    </section>
  );
};

export default Hero;