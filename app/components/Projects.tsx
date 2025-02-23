"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "DevHub.tr",
    description: "Projelerinizi, sosyal medya hesaplarınızı ve web sitenizi tek bir link ile paylaşın.",
    image:
      "https://sjc.microlink.io/om60Q8VolDj3btcLByUjRo3MhIJyd6mmpVbOwko665nA1maSy4W-sBRKYPmf6SfWUkpcH74fzNupxeQVzTSXWg.jpeg",
    link: "https://devhub.tr",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Robux.tr",
    description:
      "Türkiye'nin en güvenilir dijital ürün satış platformu. %20-30 daha uygun fiyatlarla hızlı ve güvenli alışveriş.",
    image:
      "https://sjc.microlink.io/aEYSe01IKqJmB_6oWJOHUEPaGcNWok36F0t9rnKocfw_EFq4ZC4hsxxmrYaVxd4CswPKxYDvpU7po0z4J5CtEQ.jpeg",
    link: "https://robux.tr",
    tags: ["React", "Node.js", "MongoDB"],
  },
]

export default function Projects() {
  return (
    <section id="projelerimiz" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gradient">Projelerimiz</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link href={project.link} className="block" target="_blank">
                <div className="glass-card rounded-xl overflow-hidden">
                  <div className="relative h-64">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold text-gradient">{project.title}</h3>
                      <ArrowUpRight className="text-cyan-400 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                    <p className="text-slate-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-3 py-1 text-sm rounded-full bg-slate-700/50 text-slate-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

