import { motion } from "motion/react";
import { FiExternalLink, FiGithub, FiFolder } from "react-icons/fi";

const projects = [
  {
    title: "Temple Pooja Booking System",
    description:
      "A full-stack MERN application that allows users to book multiple poojas, make payments, and receive admin-approved virtual tickets.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Cloudinary"],
    role: "Full Stack Developer",
    github: "https://github.com/Mohan-Badiger",
    live: "https://kds-temple-frontend.vercel.app",
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "CV Website",
    description:
      "A modern CV website built with React, Tailwind CSS, and Framer Motion, focused on clean UX, performance, and recruiter readability.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    role: "Frontend Developer",
    github: "https://github.com/Mohan-Badiger",
    live: "https://mohanbadiger.site",
    color: "from-indigo-500 to-purple-500",
  },
  {
    title: "EasyShare",
    description:
      "A secure file sharing web application that allows users to upload files, generate shareable links, and control access with expiry and download limits.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Cloudinary"],
    role: "Full Stack Developer",
    github: "https://github.com/Mohan-Badiger/EasyShare",
    live: "https://easysharefiles.vercel.app",
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Employee Management Dashboard",
    description:
      "An admin dashboard to manage employees with CRUD operations, role-based access, and API integration.",
    tech: ["React", "REST API", "Tailwind CSS"],
    role: "Frontend Developer",
    github: "https://github.com/Mohan-Badiger",
    live: "",
    color: "from-emerald-500 to-teal-500",
  }
];

const Projects = () => {
  return (
    <section id="projects" className="relative scroll-mt-24">
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
            Projects
          </h2>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Selected work showcasing MERN development & system integrations
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.08,
              }}
              className="group glass-card p-6 flex flex-col justify-between"
            >
              <div>
                {/* Header: Folder Icon + Role */}
                <div className="flex items-start justify-between gap-4">
                  <div className={`p-2.5 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-gray-700 dark:text-gray-300 flex items-center justify-center shrink-0`}>
                    <FiFolder size={18} />
                  </div>
                  <span className="bg-black/5 dark:bg-white/10 px-2.5 py-1 text-[11px] font-bold text-gray-500 dark:text-gray-400">
                    {project.role}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-4 text-lg font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-350">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tech stack */}
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/5 px-2 py-1 text-[10px] sm:text-xs font-semibold text-gray-600 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-6 border-t border-gray-200/40 dark:border-white/5 pt-4 flex items-center gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-none glass-pill px-3.5 py-1.5 text-xs font-semibold text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition duration-200 border border-black/10 dark:border-white/10"
                    >
                      <FiGithub size={13} />
                      Code
                    </a>
                  )}

                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-none bg-black/90 dark:bg-white/95 text-white dark:text-black px-4.5 py-1.5 text-xs font-bold hover:opacity-85 active:scale-95 transition-all duration-200 border border-black dark:border-white"
                    >
                      <FiExternalLink size={13} />
                      Live Demo
                    </a>
                  ) : (
                    <span className="text-[11px] text-gray-400 italic">
                      Private Repository
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
