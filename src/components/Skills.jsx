import { motion } from "motion/react";

const skills = [
  {
    title: "Frontend",
    items: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "Authentication"],
  },
  {
    title: "Database",
    items: ["MongoDB", "Mongoose", "PostgreSQL"],
  },
  {
    title: "Tools & Practices",
    items: ["Git & GitHub", "Postman", "VS Code", "Clean Code"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="relative">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-7">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-black dark:text-white">
            Skills
          </h2>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-500">
            Technologies and tools I work with
          </p>
        </motion.div>

        {/* Skill Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {skills.map((group, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-black p-6"
            >
              <h3 className="text-base font-medium text-black dark:text-white mb-4">
                {group.title}
              </h3>

              <ul className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-gray-300 dark:border-gray-700 px-3 py-1 text-xs text-gray-700 dark:text-gray-300"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
