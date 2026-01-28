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
    <section id="education" className="relative">
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
            Education
          </h2>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-500">
            Academic background and qualifications
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-black p-6"
            >
              {/* Timeline Dot */}
              <span className="absolute -left-2 top-6 h-3 w-3 rounded-full bg-black dark:bg-white" />

              <div className="flex flex-col gap-2">
                <h3 className="text-base sm:text-lg font-medium text-black dark:text-white">
                  {edu.degree}
                </h3>

                <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <span>{edu.institution}</span>
                  <span>•</span>
                  <span>{edu.year}</span>
                </div>

                <ul className="mt-3 list-disc pl-5 text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  {edu.highlights.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
