export interface Experience {
  id: string
  title: string
  company: string
  period: string
  location: string
  type: "Fulltime" | "Freelance" | "Contract"
  description: string[]
  technologies?: string[]
}

export interface Project {
  id: string
  title: string
  period: string
  description: string
  features: string[]
  technologies: string[]
  image: string
  demoUrl?: string
  githubUrl?: string
  status: "completed" | "in-progress" | "planned"
}

export interface Skill {
  name: string
  category: "frontend" | "mobile" | "backend" | "tools" | "soft-skills"
  proficiency: number
  icon?: string
}

export interface ContactInfo {
  email: string
  phone: string
  location: string
  linkedin?: string
  github?: string
}

export interface AnimationVariants {
  hidden: {
    opacity: number
    y?: number
    x?: number
    scale?: number
  }
  visible: {
    opacity: number
    y?: number
    x?: number
    scale?: number
    transition?: {
      duration?: number
      delay?: number
      staggerChildren?: number
      delayChildren?: number
    }
  }
}
