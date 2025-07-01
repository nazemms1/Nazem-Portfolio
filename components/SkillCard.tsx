"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Code, Smartphone, Server, PenToolIcon as Tool, Users } from "lucide-react"
import type { Skill } from "../types/portfolio"

interface SkillCardProps {
  skill: Skill
  index: number
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, index }) => {
  const getIcon = (category: Skill["category"]) => {
    const iconProps = { className: "w-6 h-6 text-slate-400" }

    switch (category) {
      case "frontend":
        return <Code {...iconProps} />
      case "mobile":
        return <Smartphone {...iconProps} />
      case "backend":
        return <Server {...iconProps} />
      case "tools":
        return <Tool {...iconProps} />
      case "soft-skills":
        return <Users {...iconProps} />
      default:
        return <Code {...iconProps} />
    }
  }

  const getCategoryColor = (category: Skill["category"]): string => {
    switch (category) {
      case "frontend":
        return "from-blue-500/20 to-cyan-500/20 border-blue-500/30"
      case "mobile":
        return "from-green-500/20 to-emerald-500/20 border-green-500/30"
      case "backend":
        return "from-purple-500/20 to-violet-500/20 border-purple-500/30"
      case "tools":
        return "from-orange-500/20 to-amber-500/20 border-orange-500/30"
      case "soft-skills":
        return "from-pink-500/20 to-rose-500/20 border-pink-500/30"
      default:
        return "from-slate-500/20 to-gray-500/20 border-slate-500/30"
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{
        scale: 1.05,
        y: -5,
        transition: { duration: 0.2 },
      }}
      viewport={{ once: true }}
      className={`relative group bg-gradient-to-br ${getCategoryColor(skill.category)} 
                 backdrop-blur-lg border rounded-xl p-6 cursor-pointer
                 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300`}
    >
      {/* Skill proficiency indicator */}
      <div className="absolute top-2 right-2">
        <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
      </div>

      <div className="flex flex-col items-center text-center space-y-3">
        <div className="p-3 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
          {getIcon(skill.category)}
        </div>

        <h3 className="font-semibold text-white group-hover:text-blue-300 transition-colors">{skill.name}</h3>

        <div className="text-xs text-slate-400 capitalize">{skill.category.replace("-", " ")}</div>

        {/* Proficiency bar */}
        <div className="w-full bg-slate-700/50 rounded-full h-1.5 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.proficiency}%` }}
            transition={{ duration: 1, delay: index * 0.1 }}
            viewport={{ once: true }}
          />
        </div>

        <span className="text-xs text-slate-400">{skill.proficiency}%</span>
      </div>
    </motion.div>
  )
}

export default SkillCard
