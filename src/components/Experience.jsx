import { motion } from "motion/react";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Personal Projects / Internship",
    period: "2024 – Present",
    description: [
      "Developed full-stack web applications using MongoDB, Express, React, and Node.js.",
      "Implemented authentication, role-based access, and REST APIs.",
      "Built responsive UIs with Tailwind CSS and ensured cross-browser compatibility.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Academic Projects",
    period: "2023 – 2024",
    description: [
      "Created modern React interfaces with reusable components.",
      "Integrated APIs and handled state management effectively.",
      "Focused on clean UI, accessibility, and performance optimization.",
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
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-black dark:text-white">
            Experience
          </h2>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-500">
            Professional and project experience
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 h-full w-0.5 bg-black/10 dark:bg-white/10 backdrop-blur-xs" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative pl-10 sm:pl-12"
              >
                {/* Dot */}
                <span className="absolute left-2.5 top-6.5 z-10 h-3.5 w-3.5 rounded-full border-2 border-black bg-white dark:border-white dark:bg-black shadow-xs transition-transform duration-300 hover:scale-125" />

                {/* Content Card */}
                <div className="glass-card p-5 sm:p-6">
                  <h3 className="text-base sm:text-lg font-semibold text-black dark:text-white">
                    {exp.role}
                  </h3>

                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">
                    <span className="font-medium">{exp.company}</span>
                    <span>•</span>
                    <span>{exp.period}</span>
                  </div>

                  <ul className="mt-3 list-disc pl-5 text-xs sm:text-sm text-gray-600 dark:text-gray-300 space-y-1.5 leading-relaxed">
                    {exp.description.map((point, i) => (
                      <li key={i}>{point}</li>
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
