"use client"

import { motion } from "framer-motion"
import { ArrowRight, Code, Sparkles, Zap } from "lucide-react"

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80 // Adjust this value based on your header height
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden">
      {/* Animated Shapes */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Geleceğin <span className="text-gradient">Siber Öncüleri</span>
          </h1>
          <p className="text-xl mb-8 text-slate-400">
            İki kişilik ekibimizle, modern web uygulamaları geliştiriyor ve yakında yapay zeka destekli projelerle
            teknoloji dünyasına yön vermeyi hedefliyoruz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={() => scrollToSection("projelerimiz")}
              className="btn btn-primary flex items-center justify-center group"
            >
              Projelerimizi Keşfet
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <button
              onClick={() => scrollToSection("iletisim")}
              className="btn btn-secondary flex items-center justify-center"
            >
              Bize Ulaşın
            </button>
          </div>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              icon: Code,
              label: "Modern Web Uygulamaları",
              desc: "En son teknolojilerle geliştirilmiş çözümler",
            },
            {
              icon: Sparkles,
              label: "Yapay Zeka",
              desc: "Yakında gelecek AI destekli projeler",
            },
            {
              icon: Zap,
              label: "Hızlı ve Güvenli",
              desc: "Performans odaklı sistemler",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="glass-card p-6 floating"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="flex items-center justify-center mb-3 text-cyan-400">
                <item.icon size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.label}</h3>
              <p className="text-slate-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

