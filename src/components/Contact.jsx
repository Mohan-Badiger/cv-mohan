import { motion } from "motion/react";
import { FiMail, FiGlobe } from "react-icons/fi";

const Contact = () => {
  return (
    <section id="contact" className="relative scroll-mt-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8 sm:mb-10"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-black dark:text-white">
            Contact Mohan Badiger
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-500 dark:text-gray-400">
            Let’s connect and discuss opportunities
          </p>
        </motion.div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-black p-6 sm:p-8"
        >
          <p className="mb-6 max-w-2xl text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
            I’m open to full-time roles, internships, and freelance opportunities.
            If you’d like to know more about my work, please visit my portfolio or
            reach out via email.
          </p>

          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4">
            {/* Email */}
            <a
              href="mailto:mohanbadiger250@gmail.com"
              className="inline-flex justify-center items-center gap-2 rounded-full bg-black dark:bg-white px-6 py-3 text-sm font-medium text-white dark:text-black transition hover:opacity-80"
              aria-label="Email Mohan S Badiger"
            >
              <FiMail />
              Email Me
            </a>

            {/* Portfolio */}
            <a
              href="https://mohanbadiger.site"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center gap-2 rounded-full border border-gray-300 dark:border-gray-700 px-6 py-3 text-sm font-medium text-black dark:text-white transition hover:bg-gray-100 dark:hover:bg-gray-900"
              aria-label="View Mohan S Badiger Portfolio Website"
            >
              <FiGlobe />
              View Portfolio
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;