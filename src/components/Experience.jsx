import { motion } from "motion/react";

const experiences = [
  {
    role: "Software Development Engineer Intern",
    company: "Bluestock Fintech (Remote)",
    period: "Nov, 2025 – Dec, 2025",
    description: [
      "Developed and enhanced full-stack web features using React.js, Node.js, Express.js, and REST APIs.",
      "Implemented backend logic, API integrations, and database operations for application features.",
      "Debugged frontend and backend issues and improved application functionality and performance.",
      "Used Git/GitHub for version control and collaborated with developers throughout the SDLC.",
    ],
  },
  {
    role: "Web Development Intern",
    company: "Infidata Technologies (Remote)",
    period: "Feb, 2025 – Apr, 2025",
    description: [
      "Built responsive web applications using HTML, CSS, JavaScript, PHP, and MySQL.",
      "Implemented CRUD operations and backend integrations for dynamic data workflows.",
      "Developed modules handling user input validation and database interactions.",
      "Debugged frontend, backend, and database issues to improve application reliability.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative scroll-mt-24">
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
            Work Experience
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Professional journey and technical projects
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative pl-1">
          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
              >
                {/* Card Container */}
                <div className="glass-card p-6 hover:scale-[1.005] transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-gray-200/40 dark:border-white/5 pb-4">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mt-1">
                        {exp.company}
                      </p>
                    </div>

                    <div className="inline-flex items-center gap-2 rounded-none glass-pill px-3 py-1.5 text-xs font-semibold text-gray-600 dark:text-gray-400 max-w-max self-start md:self-center border border-black/10 dark:border-white/5">
                      {exp.period}
                    </div>
                  </div>

                  {/* Bullet points */}
                  <ul className="mt-4 space-y-3 pl-2">
                    {exp.description.map((point, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                        <span className="text-gray-400 dark:text-gray-600 shrink-0 select-none">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
