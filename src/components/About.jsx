import { motion } from "motion/react";

const About = () => {
  return (
    <section id="about" className="relative scroll-mt-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-10 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
            About Mohan S Badiger
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-500 dark:text-gray-400">
            A quick professional overview
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-start"
        >
          {/* Left: Summary */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm sm:text-base"
          >
            <p className="mb-4">
              I am a Full Stack Developer with hands-on experience building
              scalable and maintainable web applications using the MERN stack
              (React.js, Node.js, MongoDB, and Express). I enjoy turning complex
              requirements into clean, practical solutions.
            </p>

            <p>
              I focus on writing quality code with attention to performance,
              usability, and long-term maintainability. I’m motivated to work
              on meaningful projects where technology solves real-world
              problems and helps users effectively.
            </p>
          </motion.div>

          {/* Right: Quick Facts */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-black p-5 sm:p-6 space-y-4"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
              <span className="text-xs sm:text-sm text-gray-500">
                Location
              </span>
              <span className="text-sm font-medium text-gray-900 dark:text-white">
                Bengaluru, Karnataka, India
              </span>
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
              <span className="text-xs sm:text-sm text-gray-500">
                Experience Level
              </span>
              <span className="text-sm font-medium text-gray-900 dark:text-white">
                Entry-level Full Stack Developer
              </span>
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
              <span className="text-xs sm:text-sm text-gray-500">
                Primary Stack
              </span>
              <span className="text-sm font-medium text-gray-900 dark:text-white">
                MERN Stack
              </span>
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
              <span className="text-xs sm:text-sm text-gray-500">
                Availability
              </span>
              <span className="text-sm font-medium text-gray-900 dark:text-white">
                Open to Opportunities
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;