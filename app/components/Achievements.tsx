"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Trophy, Star, Instagram, Play } from "lucide-react"
import Link from "next/link"
import VideoModal from "./VideoModal"

const achievements = [
  {
    title: "Hackathon Birinciliği",
    description:
      "Bahçelievler 15 Temmuz Şehitleri AIHL II. Bilim Teknoloji ve İnovasyon Şenliği Hackathon Yarışması Türkiye Birinciliği",
    date: "2024",
    icon: Trophy,
    link: "https://www.instagram.com/p/C6t0N3yCSec/",
    videoUrl: "https://video.siberonculer.com/video.mp4",
  },
  {
    title: "NASA Space Apps Challenge",
    description: "NASA Space Apps Challenge yarışmasına katılım ve başarılı proje geliştirme",
    date: "2024",
    icon: Star,
  },
]

export default function Achievements() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
  const [currentVideoUrl, setCurrentVideoUrl] = useState("")

  const openVideoModal = (videoUrl: string) => {
    setCurrentVideoUrl(videoUrl)
    setIsVideoModalOpen(true)
  }

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gradient">Başarılarımız</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative aspect-[3/4] w-full max-w-md mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-lg blur-3xl" />
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/444124295_1583045332271357_8395396806953168665_n.jpg-5k8zFEpJTrAkOtkCG2PwWvtJNmuc9P.jpeg"
              alt="Hackathon Birinciliği Ödülü"
              fill
              className="object-contain rounded-lg glass-card p-4"
            />
          </motion.div>
          <div className="space-y-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="glass-card p-6 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="flex items-start gap-4 relative z-10">
                  <div className="flex-shrink-0">
                    <div className="p-3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500">
                      <achievement.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gradient">{achievement.title}</h3>
                    <p className="text-slate-400 mb-2">{achievement.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-cyan-400">{achievement.date}</span>
                      <div className="flex space-x-2">
                        {achievement.videoUrl && (
                          <button
                            onClick={() => openVideoModal(achievement.videoUrl!)}
                            className="text-slate-400 hover:text-cyan-400 transition-colors"
                          >
                            <Play size={20} />
                          </button>
                        )}
                        {achievement.link && (
                          <Link
                            href={achievement.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-cyan-400 transition-colors"
                          >
                            <Instagram size={20} />
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <VideoModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} videoUrl={currentVideoUrl} />
    </section>
  )
}

