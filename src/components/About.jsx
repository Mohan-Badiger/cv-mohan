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
          <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-gray-900 dark:text-white">
            About Me
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-500 dark:text-gray-400">
            A quick professional overview
          </p>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-stretch"
        >
          {/* Left card: Description */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            className="glass-card p-6 sm:p-8 text-gray-600 dark:text-gray-400 leading-relaxed text-sm sm:text-base md:col-span-7 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                My Developer Philosophy
              </h3>
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
            </div>
            <div className="mt-6 border-t border-gray-200/40 dark:border-white/5 pt-4">
              <span className="text-xs font-bold uppercase text-gray-800 dark:text-gray-200 tracking-wider">
                Solving problems through codebase logic
              </span>
            </div>
          </motion.div>

          {/* Right column: 4 Micro detail cards */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            className="md:col-span-5 flex flex-col gap-4 sm:gap-5"
          >
            {[
              {
                label: "Location",
                value: "Bengaluru, Karnataka, India",
              },
              {
                label: "Experience Level",
                value: "Entry-level Developer",
              },
              {
                label: "Primary Stack",
                value: "MERN Stack (MongoDB, React)",
              },
              {
                label: "Availability",
                value: "Open to Opportunities",
              },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="glass-card p-4 sm:p-5 flex flex-col justify-center hover:scale-[1.02] transition-all duration-300"
              >
                <div className="flex flex-col min-w-0">
                  <span className="text-[10px] text-gray-400 dark:text-gray-500 uppercase font-bold tracking-wider">
                    {stat.label}
                  </span>
                  <span className="text-sm font-bold text-gray-800 dark:text-white mt-0.5 truncate">
                    {stat.value}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;