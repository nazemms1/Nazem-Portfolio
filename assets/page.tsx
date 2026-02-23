import { motion } from "framer-motion";
import {
  ArrowDown,
  Calendar,
  Download,
  Mail,
  MapPin,
  Phone,
  User,
  Linkedin,
  Github,
  Code2,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

// Components
import AnimatedBackground from "../components/AnimatedBackground";
import Navigation from "../components/Navigation";
import SkillCard from "../components/SkillCard";
import ProjectCard from "../components/ProjectCard";

// Hooks
import { useScrollAnimation } from "../hooks/useScrollAnimation";

// Data
import {
  experiences,
  projects,
  skills,
  contactInfo,
} from "../data/portfolioData";
import type { AnimationVariants } from "../types/portfolio";

export default function Portfolio() {
  const isVisible = useScrollAnimation();

  const containerVariants: AnimationVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: AnimationVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const handleDownloadCV = (): void => {
    // Implement CV download logic
    console.log("Downloading CV...");
  };

  const handleContactClick = (): void => {
    window.location.href = `mailto:${contactInfo.email}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white overflow-hidden">
      <AnimatedBackground />
      <Navigation />

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative pt-20"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="container mx-auto px-6 text-center"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <div className="w-32 h-32 mx-auto mb-8 relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-slate-400 to-blue-400 rounded-full"
                animate={{
                  rotate: 360,
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotate: {
                    duration: 20,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  },
                  scale: {
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  },
                }}
              />
              <div className="absolute inset-2 bg-slate-900 rounded-full flex items-center justify-center">
                <User className="w-16 h-16 text-blue-400" />
              </div>
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-slate-200 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              NAZEM ALMSOUTI
            </span>
          </motion.h1>

          <motion.div variants={itemVariants} className="mb-8">
            <h2 className="text-xl md:text-2xl text-slate-300 mb-4">
              Software Engineer
            </h2>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-400">
              <span className="flex items-center gap-2">
                <Code2 className="w-4 h-4" />
                Frontend Development
              </span>
              <span className="flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                Mobile Development
              </span>
              <span className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                React & TypeScript Expert
              </span>
            </div>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg text-slate-400 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Passionate about building modern, scalable applications with React,
            TypeScript, and Flutter. Experienced in delivering clean,
            responsive, and user-centered interfaces with cutting-edge
            technologies including Generative AI, LLMs, and advanced state
            management solutions.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              onClick={handleDownloadCV}
              className="bg-gradient-to-r from-slate-600 to-blue-600 hover:from-slate-700 hover:to-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={handleContactClick}
              className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-16">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <ArrowDown className="w-8 h-8 mx-auto text-blue-400" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-300 to-blue-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-slate-400 to-blue-400 mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-900/50 backdrop-blur-lg border-slate-700/50 hover:border-blue-500/30 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <GraduationCap className="w-8 h-8 text-blue-400 mr-4" />
                    <h3 className="text-2xl font-bold text-blue-400">
                      Education
                    </h3>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-slate-200">
                      Bachelor's Degree in Information and Communication
                      Engineering
                    </h4>
                    <p className="text-slate-400">
                      University of Business Excellence
                    </p>
                    <p className="text-slate-400">
                      Major in Software Engineering
                    </p>
                    <div className="flex items-center text-blue-400 text-sm mt-4">
                      <Calendar className="w-4 h-4 mr-2" />
                      2018 - 2024
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="prose prose-invert max-w-none">
                <p className="text-lg text-slate-300 leading-relaxed">
                  I'm a passionate{" "}
                  <strong className="text-blue-400">Software Engineer</strong>{" "}
                  with expertise in Frontend Web and Mobile Development. I hold
                  a Bachelor's degree in Information Technology with a focus on
                  Software Engineering.
                </p>
                <p className="text-lg text-slate-300 leading-relaxed">
                  I specialize in building modern web applications using{" "}
                  <strong className="text-blue-400">
                    React and TypeScript
                  </strong>
                  , and developing cross-platform mobile apps with{" "}
                  <strong className="text-blue-400">Flutter and Dart</strong>.
                  I'm passionate about integrating cutting-edge technologies
                  such as Generative AI, LLMs, and RAG into real-world projects.
                </p>
                <p className="text-lg text-slate-300 leading-relaxed">
                  Strong team player with a commitment to code quality,
                  scalability, and seamless user experience. Always eager to
                  learn new technologies and tackle challenging problems.
                </p>
              </div>

              <div className="flex items-center space-x-4 text-slate-400 pt-4">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>{contactInfo.location}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

       <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-300 to-blue-400 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-slate-400 to-blue-400 mx-auto rounded-full" />
            <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
              Proficient in modern technologies and frameworks with a focus on
              performance and user experience
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {skills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </section>

       <section id="experience" className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-300 to-blue-400 bg-clip-text text-transparent">
              Professional Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-slate-400 to-blue-400 mx-auto rounded-full" />
          </motion.div>

          <div className="space-y-8 max-w-5xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="bg-slate-900/50 backdrop-blur-lg border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                  <CardHeader>
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-xl text-blue-400 mb-2">
                          {exp.title}
                        </CardTitle>
                        <CardDescription className="text-lg text-slate-200 font-semibold">
                          {exp.company}
                        </CardDescription>
                      </div>
                      <div className="lg:text-right mt-4 lg:mt-0 space-y-2">
                        <div className="flex items-center text-slate-400 lg:justify-end">
                          <Calendar className="w-4 h-4 mr-2" />
                          {exp.period}
                        </div>
                        <div className="flex items-center text-slate-400 lg:justify-end">
                          <MapPin className="w-4 h-4 mr-2" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                          exp.type === "Fulltime"
                            ? "bg-green-500/20 text-green-400 border border-green-500/30"
                            : "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                        }`}
                      >
                        {exp.type}
                      </span>
                    </div>

                    <ul className="space-y-3">
                      {exp.description.map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-start"
                        >
                          <div className="w-2 h-2 rounded-full bg-blue-400 mr-4 mt-2 flex-shrink-0" />
                          <span className="text-slate-300 leading-relaxed">
                            {item}
                          </span>
                        </motion.li>
                      ))}
                    </ul>

                    {exp.technologies && (
                      <div className="pt-4">
                        <h4 className="text-sm font-semibold text-blue-400 mb-3">
                          Technologies Used:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-xs font-medium border border-blue-500/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-300 to-blue-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-slate-400 to-blue-400 mx-auto rounded-full" />
            <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
              Showcasing my expertise in modern web and mobile development
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-300 to-blue-400 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-slate-400 to-blue-400 mx-auto rounded-full" />
            <p className="text-xl text-slate-300 mt-6 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and interesting
              projects.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <motion.div whileHover={{ scale: 1.05 }} className="text-center">
                <Card className="bg-slate-900/50 backdrop-blur-lg border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                  <CardContent className="p-8">
                    <Mail className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Email</h3>
                    <p className="text-slate-400">{contactInfo.email}</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} className="text-center">
                <Card className="bg-slate-900/50 backdrop-blur-lg border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                  <CardContent className="p-8">
                    <Phone className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Phone</h3>
                    <p className="text-slate-400">{contactInfo.phone}</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} className="text-center">
                <Card className="bg-slate-900/50 backdrop-blur-lg border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                  <CardContent className="p-8">
                    <MapPin className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Location</h3>
                    <p className="text-slate-400">{contactInfo.location}</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="flex justify-center space-x-6">
                <motion.a
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  href={`mailto:${contactInfo.email}`}
                  className="w-14 h-14 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors shadow-lg hover:shadow-blue-500/25"
                >
                  <Mail className="w-6 h-6" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                  href={contactInfo.linkedin}
                  className="w-14 h-14 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors shadow-lg hover:shadow-blue-500/25"
                >
                  <Linkedin className="w-6 h-6" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  href={contactInfo.github}
                  className="w-14 h-14 bg-slate-700 hover:bg-slate-800 rounded-full flex items-center justify-center transition-colors shadow-lg hover:shadow-slate-500/25"
                >
                  <Github className="w-6 h-6" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-700/50 bg-slate-900/30 backdrop-blur-lg">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-400">
            © 2024 Nazem Almsouti. Built with React, TypeScript & Next.js
          </p>
        </div>
      </footer>
    </div>
  );
}
