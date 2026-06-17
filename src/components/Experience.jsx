import { motion } from "motion/react";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Personal Projects / Internship",
    period: "2024 – Present",
    description: [
      "Developed full-stack web applications using MongoDB, Express, React, and Node.js.",
      "Implemented secure authentication, role-based access control, and REST APIs.",
      "Built responsive layouts with Tailwind CSS, ensuring cross-browser compatibility.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Academic Projects",
    period: "2023 – 2024",
    description: [
      "Created modern React interfaces with modular, reusable components.",
      "Integrated REST APIs and handled frontend state management effectively.",
      "Focused on clean typography, accessibility, and performance optimizations.",
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
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Work Experience
          </h2>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Professional journey and technical projects
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative pl-1">
          {/* Vertical Track - Heavy Solid Line */}
          <div className="absolute left-4 sm:left-5 top-2 bottom-2 w-0.5 bg-black/15 dark:bg-white/10" />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                className="relative pl-10 sm:pl-14"
              >
                {/* Timeline Boxy Pulse Node */}
                <span className="absolute left-2.5 sm:left-3.5 top-6 z-10 flex h-3.5 w-3.5 items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-full w-full bg-gray-400/50 dark:bg-white/20 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 bg-black dark:bg-white border border-white dark:border-black" />
                </span>

                {/* Card Container */}
                <div className="glass-card p-6 hover:scale-[1.005] transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-gray-200/40 dark:border-white/5 pb-4">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mt-1">
                        {exp.company}
                      </p>
                    </div>

                    <div className="inline-flex items-center gap-2 rounded-none glass-pill px-3 py-1.5 text-xs font-semibold text-gray-500 dark:text-gray-400 max-w-max self-start md:self-center border border-black/10 dark:border-white/5">
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
