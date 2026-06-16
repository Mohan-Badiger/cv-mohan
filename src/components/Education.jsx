import { motion } from "motion/react";

const education = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Rani Chennamma University",
    year: "2022 – 2025",
    highlights: [
      "Strong foundation in computer science fundamentals",
      "Hands-on projects using web technologies",
      "Focused on software development and databases",
    ],
  },
  {
    degree: "Pre-University / Higher Secondary",
    institution: "SRA PU College",
    year: "2020 – 2022",
    highlights: [
      "Computer Science specialization",
      "Built logical and analytical problem-solving skills",
    ],
  },
];

const Education = () => {
  return (
    <section id="education" className="relative scroll-mt-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-10 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-black dark:text-white">
            Education & Academic Background
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-500 dark:text-gray-400">
            Academic background and qualifications
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="space-y-6 sm:space-y-8">
          {education.map((edu, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="glass-card p-5 sm:p-6"
            >
              <div className="flex flex-col gap-2">
                <h3 className="text-base sm:text-lg font-medium text-black dark:text-white leading-snug">
                  {edu.degree}
                </h3>

                <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                  <span>{edu.institution}</span>
                  <span className="hidden sm:inline">•</span>
                  <span>{edu.year}</span>
                </div>

                <ul className="mt-3 list-disc pl-5 text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1 leading-relaxed">
                  {edu.highlights.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;