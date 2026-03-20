import { personalInfo } from "@/lib/data";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";
import GithubIcon from "./icons/GithubIcon";
import LinkedinIcon from "./icons/LinkedinIcon";

export default function SupportSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="container max-w-4xl mx-auto px-6 md:px-4 relative z-10">
        <motion.div
          className="flex flex-col md:flex-row justify-between"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <motion.h1
              className="text-4xl font-bold mb-2"
              variants={childVariants}
            >
              {personalInfo.name}
            </motion.h1>

            {personalInfo.jobTitle &&<motion.p
              className="text-xl text-muted-foreground mb-2"
              variants={childVariants}
            >
              {personalInfo.jobTitle}
            </motion.p>}

            {personalInfo.location && <motion.div
              className="flex items-center text-sm text-muted-foreground"
              variants={childVariants}
              whileHover={{ scale: 1.05 }}
            >
              <MapPin className="h-4 w-4 mr-2" />
              {personalInfo.location}
            </motion.div>}

            <motion.div
              className="flex gap-2 items-center md:items-start mt-4"
              variants={childVariants}
            >
              {personalInfo.github && <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <GithubIcon className="h-6 w-6" />
              </motion.a>}

              {personalInfo.linkedin && <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <LinkedinIcon className="h-6 w-6" />
              </motion.a>}
            </motion.div>
          </div>

          <motion.div
            className="mt-8 md:mt-0 flex justify-center"
            variants={childVariants}
          >
            <iframe id='kofiframe' src='https://ko-fi.com/aprildawne/?hidefeed=true&widget=true&embed=true&preview=true' className="bg-gradient-to-r from-accent/10 to-accent-secondary/10 backdrop-blur-sm backdrop-filter p-4 rounded-lg border border-accent/20 dark:border-accent/10 shadow-sm" height='600' title='aprildawne'></iframe>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
