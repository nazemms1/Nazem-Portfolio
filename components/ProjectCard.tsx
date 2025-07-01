"use client"

import type React from "react"

import { motion } from "framer-motion"
import { ExternalLink, Github, Calendar, Zap } from "lucide-react"
import Image from "next/image"
import type { Project } from "../types/portfolio"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ProjectCardProps {
  project: Project
  index: number
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const getStatusColor = (status: Project["status"]): string => {
    switch (status) {
      case "completed":
        return "bg-green-500/20 text-green-400 border-green-500/30"
      case "in-progress":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
      case "planned":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30"
      default:
        return "bg-slate-500/20 text-slate-400 border-slate-500/30"
    }
  }

  const getStatusIcon = (status: Project["status"]) => {
    switch (status) {
      case "completed":
        return <Zap className="w-3 h-3" />
      case "in-progress":
        return <div className="w-3 h-3 rounded-full bg-yellow-400 animate-pulse" />
      case "planned":
        return <Calendar className="w-3 h-3" />
      default:
        return null
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group h-full"
    >
      <Card className="bg-slate-900/50 backdrop-blur-lg border-slate-700/50 hover:border-blue-500/30 transition-all duration-500 overflow-hidden h-full hover:shadow-2xl hover:shadow-blue-500/10">
        {/* Project Image */}
        <div className="relative overflow-hidden h-48">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            width={500}
            height={300}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

          {/* Status Badge */}
          <div
            className={`absolute top-4 right-4 px-2 py-1 rounded-full text-xs font-medium border backdrop-blur-sm flex items-center gap-1 ${getStatusColor(project.status)}`}
          >
            {getStatusIcon(project.status)}
            {project.status.replace("-", " ")}
          </div>
        </div>

        <CardHeader className="pb-4">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <CardTitle className="text-xl text-blue-400 mb-2 group-hover:text-blue-300 transition-colors">
                {project.title}
              </CardTitle>
              <div className="flex items-center text-slate-400 text-sm">
                <Calendar className="w-4 h-4 mr-2" />
                {project.period}
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <p className="text-slate-300 leading-relaxed">{project.description}</p>

          {/* Key Features */}
          <div>
            <h4 className="text-sm font-semibold text-blue-400 mb-3 flex items-center">
              <Zap className="w-4 h-4 mr-2" />
              Key Features
            </h4>
            <ul className="space-y-2">
              {project.features.slice(0, 3).map((feature, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start text-sm text-slate-300"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-3 mt-2 flex-shrink-0" />
                  {feature}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-sm font-semibold text-blue-400 mb-3">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-xs font-medium border border-blue-500/20 hover:bg-blue-500/20 transition-colors"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            {project.demoUrl && (
              <Button
                variant="outline"
                size="sm"
                className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white transition-all duration-300 flex-1"
                asChild
              >
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </a>
              </Button>
            )}

            {project.githubUrl && (
              <Button
                variant="outline"
                size="sm"
                className="border-slate-400 text-slate-400 hover:bg-slate-400 hover:text-white transition-all duration-300 flex-1"
                asChild
              >
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  Source
                </a>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default ProjectCard
