"use client"

import { motion } from "framer-motion"
import { Github, Twitter } from "lucide-react"

const teamMembers = [
  {
    name: "Okan",
    role: "Backend Developer",
    image:
      "https://sjc.microlink.io/SeMuZIDYSPiaGx4-Q_IvXCEFfQy_2W1dYGpcEAYygGNDVz3PbxUB_PWMAJhm3DIn8qOPeBDphQgay70gCdEkUA.jpeg",
    socials: {
      github: "https://github.com/okan8",
      twitter: "https://x.com/MPoorguy_",
    },
  },
  {
    name: "Gök",
    role: "Frontend Developer",
    image:
      "https://sjc.microlink.io/W747E8stLx6lz7BILZZBo8ct4Xak8lvNtfSGEV2vYfwNoaFGODmlhbqKi2ljhVA4roMGdFCFpyxUz6OX0EFKXw.jpeg",
    socials: {
      github: "https://github.com/gxqenz",
      twitter: "https://x.com/gxqenz",
    },
  },
]

export default function Team() {
  return (
    <section className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gradient">Ekibimiz</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-card p-6 rounded-xl text-center"
            >
              <h3 className="text-2xl font-semibold mb-2 text-gradient">{member.name}</h3>
              <p className="text-slate-400 mb-4">{member.role}</p>
              <div className="flex justify-center space-x-4">
                <a
                  href={member.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  <Github size={24} />
                </a>
                <a
                  href={member.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  <Twitter size={24} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

