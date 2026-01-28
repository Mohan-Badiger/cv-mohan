import { motion } from "motion/react";

const About = () => {
  return (
    <section id="about" className="relative">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-10"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-black dark:text-white">
            About Me
          </h2>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-500">
            A brief professional overview
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start"
        >
          {/* Left Text */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-gray-700 dark:text-gray-300 leading-relaxed"
          >
            <p className="mb-4">
              I am a passionate Full Stack Developer with hands-on experience in
              building scalable and maintainable web applications using the
              MERN stack. I enjoy translating complex requirements into clean,
              efficient solutions.
            </p>

            <p>
              I focus strongly on code quality, performance, and usability. My
              goal is to work on impactful projects where technology solves
              real-world problems and continuously improve my technical skills.
            </p>
          </motion.div>

          {/* Right Info */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-4"
          >
            <div className="flex justify-between border-b border-gray-200 dark:border-gray-800 pb-2">
              <span className="text-sm text-gray-500">Location</span>
              <span className="text-sm font-medium text-black dark:text-white">
                Bengaluru, India
              </span>
            </div>

            <div className="flex justify-between border-b border-gray-200 dark:border-gray-800 pb-2">
              <span className="text-sm text-gray-500">Experience</span>
              <span className="text-sm font-medium text-black dark:text-white">
                Fresher / Entry Level
              </span>
            </div>

            <div className="flex justify-between border-b border-gray-200 dark:border-gray-800 pb-2">
              <span className="text-sm text-gray-500">Primary Stack</span>
              <span className="text-sm font-medium text-black dark:text-white">
                MERN Stack
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-sm text-gray-500">Availability</span>
              <span className="text-sm font-medium text-black dark:text-white">
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
