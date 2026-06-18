import { motion } from "motion/react";

const skills = [
  {
    title: "Frontend",
    items: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS"],
    hoverGlow: "hover:border-black/30",
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "RESTful APIs", "JWT Auth"],
    hoverGlow: "hover:border-black/30",
  },
  {
    title: "Database",
    items: ["MongoDB", "Mongoose", "PostgreSQL"],
    hoverGlow: "hover:border-black/30",
  },
  {
    title: "Tools & Practices",
    items: ["Git & GitHub", "Postman API", "VS Code", "Clean Code"],
    hoverGlow: "hover:border-black/30",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="relative scroll-mt-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-gray-900 dark:text-white">
            Skills
          </h2>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Technologies and tools I specialize in
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
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
              className={`group glass-card p-6 flex flex-col justify-between hover:scale-[1.01] transition-all duration-350 border border-black/10 dark:border-white/10`}
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 border-b border-gray-200/40 dark:border-white/5 pb-4 mb-5">
                  <h3 className="text-base sm:text-lg font-medium text-gray-900 dark:text-white">
                    {group.title}
                  </h3>
                </div>

                {/* Items */}
                <ul className="flex flex-wrap gap-2.5">
                  {group.items.map((skill) => (
                    <li
                      key={skill}
                      className={`rounded-none glass-pill px-3.5 py-1.5 text-xs font-semibold text-gray-600 dark:text-gray-300 hover:scale-105 transition duration-300 border border-black/10 dark:border-white/10`}
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
