import { motion } from "motion/react";
import { FiBookOpen, FiAward, FiCheckCircle } from "react-icons/fi";

const education = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Rani Chennamma University",
    year: "2022 – 2025",
    highlights: [
      "Strong foundation in computer science and programming fundamentals.",
      "Completed hands-on projects using modern full-stack web technologies.",
      "Specialized study in software engineering, database management, and networking.",
    ],
    icon: <FiAward size={20} className="text-pink-500" />,
  },
  {
    degree: "Pre-University / Higher Secondary (12th)",
    institution: "SRA PU College",
    year: "2020 – 2022",
    highlights: [
      "Specialization in Computer Science and mathematics streams.",
      "Developed solid foundations in logical thinking and analytical problem-solving.",
    ],
    icon: <FiBookOpen size={20} className="text-indigo-500" />,
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
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Education
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-500 dark:text-gray-400">
            Academic qualifications and computer science foundations
          </p>
        </motion.div>

        {/* Education List */}
        <div className="space-y-6 sm:space-y-8">
          {education.map((edu, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
              className="glass-card p-6 sm:p-8 flex flex-col md:flex-row gap-5 hover:scale-[1.005] transition-all duration-300"
            >
              {/* Left Column: Icon */}
              <div className="p-3.5 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center shrink-0 h-12 w-12 self-start">
                {edu.icon}
              </div>

              {/* Right Column: Info */}
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 border-b border-gray-200/40 dark:border-white/5 pb-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white leading-snug">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mt-0.5">
                      {edu.institution}
                    </p>
                  </div>
                  
                  <span className="rounded-none glass-pill px-3 py-1.5 text-xs font-semibold text-gray-500 dark:text-gray-400 self-start border border-black/10 dark:border-white/10">
                    {edu.year}
                  </span>
                </div>

                <ul className="mt-4 space-y-2.5">
                  {edu.highlights.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      <FiCheckCircle className="text-emerald-500 mt-1 shrink-0" size={14} />
                      <span>{point}</span>
                    </li>
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