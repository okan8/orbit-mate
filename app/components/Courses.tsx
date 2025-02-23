'use client'

import { motion } from 'framer-motion'
import { Code, Shield, Terminal, Globe } from 'lucide-react'

const courses = [
  {
    title: "Temel Programlama",
    description: "Yazılım dünyasına giriş yapın ve temel programlama kavramlarını öğrenin.",
    icon: <Code size={40} />,
    color: "from-blue-400 to-blue-600",
  },
  {
    title: "Siber Güvenlik Temelleri",
    description: "Siber güvenliğin temellerini ve önemini keşfedin.",
    icon: <Shield size={40} />,
    color: "from-red-400 to-red-600",
  },
  {
    title: "Web Geliştirme",
    description: "Modern web teknolojilerini kullanarak web siteleri ve uygulamalar oluşturun.",
    icon: <Globe size={40} />,
    color: "from-green-400 to-green-600",
  },
  {
    title: "Etik Hacking",
    description: "Sistemlerdeki güvenlik açıklarını etik bir şekilde tespit etmeyi ve kapatmayı öğrenin.",
    icon: <Terminal size={40} />,
    color: "from-purple-400 to-purple-600",
  },
]

export default function Courses() {
  return (
    <section id="egitimler" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-gradient"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Eğitimlerimiz
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className={`p-6 bg-gradient-to-r ${course.color}`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="text-white mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {course.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-2">{course.title}</h3>
              </motion.div>
              <div className="p-6">
                <p className="text-gray-300 mb-4">{course.description}</p>
                <motion.a
                  href="#"
                  className="btn btn-primary w-full text-center inline-block"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Detayları Gör
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

