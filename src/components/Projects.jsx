import { motion } from "motion/react";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const projects = [
    {
        title: "Temple Pooja Booking System",
        description:
            "A full-stack MERN application that allows users to book multiple poojas, make payments, and receive admin-approved virtual tickets.",
        tech: ["React", "Node.js", "Express", "MongoDB", "Cloudinary"],
        role: "Full Stack Developer",
        github: "https://github.com/Mohan-Badiger",
        live: "https://kds-temple-frontend.vercel.app",
    },
    {
        title: "CV Website",
        description:
            "A modern CV website built with React, Tailwind CSS, and Framer Motion, focused on clean UX, performance, and recruiter readability.",
        tech: ["React", "Tailwind CSS", "Framer Motion"],
        role: "Frontend Developer",
        github: "https://github.com/Mohan-Badiger",
        live: "https://mohanbadiger.site",
    },
    {
        title: "EasyShare",
        description:
            "A secure file sharing web application that allows users to upload files, generate shareable links, and control access with expiry and download limits.",
        tech: ["React", "Node.js", "Express", "MongoDB", "Cloudinary"],
        role: "Full Stack Developer",
        github: "https://github.com/Mohan-Badiger/EasyShare",
        live: "https://easysharefiles.vercel.app",
    },
    {
        title: "Employee Management Dashboard",
        description:
            "An admin dashboard to manage employees with CRUD operations, role-based access, and API integration.",
        tech: ["React", "REST API", "Tailwind CSS"],
        role: "Frontend Developer",
        github: "https://github.com/Mohan-Badiger",
        live: "",
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
                    className="mb-12"
                >
                    <h2 className="text-2xl sm:text-3xl font-semibold text-black dark:text-white">
                        Projects
                    </h2>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                        Selected work showcasing real-world problem solving
                    </p>
                </motion.div>

                {/* Projects List */}
                <div className="flex flex-col gap-10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 32 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                ease: "easeOut",
                                delay: index * 0.05,
                            }}
                            className="group glass-card p-6 sm:p-8"
                        >
                            {/* Title + Role */}
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                <h3 className="text-lg sm:text-xl font-semibold text-black dark:text-white transition-colors duration-300 group-hover:text-pink-600 dark:group-hover:text-pink-400">
                                    {project.title}
                                </h3>
                                <span className="text-xs text-gray-500 dark:text-gray-400">
                                    {project.role}
                                </span>
                            </div>

                            {/* Description */}
                            <p className="mt-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                                {project.description}
                            </p>

                            {/* Tech Stack */}
                            <div className="mt-4 flex flex-wrap gap-2">
                                {project.tech.map((tech) => (
                                    <span
                                        key={tech}
                                        className="rounded-full glass-pill px-3 py-1 text-xs text-gray-700 dark:text-gray-300 transition duration-300 hover:scale-105"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Links */}
                            <div className="mt-6 flex items-center gap-6 text-sm">
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition hover:scale-105 duration-200"
                                    >
                                        <FiGithub />
                                        Code
                                    </a>
                                )}

                                {project.live && (
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition hover:scale-105 duration-200"
                                    >
                                        <FiExternalLink />
                                        Live
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
