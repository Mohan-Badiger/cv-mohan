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
    <section id="experience" className="relative">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20">

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
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Professional and project experience
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 h-full w-px bg-gray-200 dark:bg-gray-800" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative pl-12"
              >
                {/* Dot */}
                <span className="absolute left-10px top-2 h-3 w-3 rounded-full bg-black dark:bg-white" />

                {/* Content */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-base sm:text-lg font-medium text-black dark:text-white">
                    {exp.role}
                  </h3>

                  <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <span>{exp.company}</span>
                    <span>•</span>
                    <span>{exp.period}</span>
                  </div>

                  <ul className="mt-3 list-disc pl-5 text-sm text-gray-700 dark:text-gray-300 space-y-1">
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
