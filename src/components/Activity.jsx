import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const GITHUB_USERNAME = "Mohan-Badiger";

const QUERY = `
query($login: String!) {
  user(login: $login) {
    contributionsCollection {
      contributionCalendar {
        totalContributions
        weeks {
          contributionDays {
            contributionCount
            date
          }
        }
      }
    }
  }
}
`;

/* GitHub official green colors */
const getColor = (count) => {
  if (count === 0) return "bg-[#ebedf0] dark:bg-[#161b22]";
  if (count <= 3) return "bg-[#9be9a8] dark:bg-[#0e4429]";
  if (count <= 6) return "bg-[#40c463] dark:bg-[#006d32]";
  if (count <= 9) return "bg-[#30a14e] dark:bg-[#26a641]";
  return "bg-[#216e39] dark:bg-[#39d353]";
};

const formatDate = (date) =>
  new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

const Activity = () => {
  const [weeks, setWeeks] = useState([]);
  const [total, setTotal] = useState(0);
  const [range, setRange] = useState({ start: "", end: "" });
  const [hovered, setHovered] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
      },
      body: JSON.stringify({
        query: QUERY,
        variables: { login: GITHUB_USERNAME },
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        const calendar =
          data?.data?.user?.contributionsCollection?.contributionCalendar;

        if (!calendar) return;

        setWeeks(calendar.weeks);
        setTotal(calendar.totalContributions);

        const allDays = calendar.weeks.flatMap(
          (week) => week.contributionDays
        );

        setRange({
          start: allDays[0]?.date,
          end: allDays[allDays.length - 1]?.date,
        });

        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section id="activity">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-6"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-black dark:text-white">
            GitHub Activity
          </h2>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            {total.toLocaleString()} contributions from {range.start} to{" "}
            {range.end}
          </p>
        </motion.div>

        {loading && (
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Loading activity…
          </p>
        )}

        {!loading && (
          <div className="relative overflow-x-auto">
            <div className="grid grid-flow-col auto-cols-max gap-1">
              {weeks.map((week, i) => (
                <div key={i} className="flex flex-col gap-1">
                  {week.contributionDays.map((day, j) => (
                    <div
                      key={j}
                      className="relative"
                      onMouseEnter={() =>
                        setHovered({ day, row: j })
                      }
                      onMouseLeave={() => setHovered(null)}
                    >
                      {/* Contribution square */}
                      <div
                        className={`h-3 w-3 rounded-sm cursor-pointer ${getColor(
                          day.contributionCount
                        )}`}
                      />

                      {/* Tooltip */}
                      <AnimatePresence>
                        {hovered?.day === day && (
                          <motion.div
                            initial={{
                              opacity: 0,
                              y: hovered.row === 0 ? -8 : 6,
                            }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{
                              opacity: 0,
                              y: hovered.row === 0 ? -8 : 6,
                            }}
                            transition={{ duration: 0.15 }}
                            className={`absolute z-50 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-black px-3 py-2 text-xs text-gray-700 dark:text-gray-200 shadow-lg
                              ${
                                hovered.row === 0
                                  ? "top-5"   // show below for top row
                                  : "-top-14" // show above otherwise
                              }
                            `}
                          >
                            <strong>
                              {day.contributionCount} contribution
                              {day.contributionCount !== 1 && "s"}
                            </strong>
                            <div className="text-[11px] text-gray-500 dark:text-gray-400">
                              on {formatDate(day.date)}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Profile link */}
        <a
          href="https://github.com/Mohan-Badiger"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-xs text-gray-500 hover:text-black dark:hover:text-white"
        >
          View GitHub Profile →
        </a>
      </div>
    </section>
  );
};

export default Activity;
