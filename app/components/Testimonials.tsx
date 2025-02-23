"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const testimonials = [
  {
    name: "Ayşe Yılmaz",
    role: "Yazılım Geliştirici",
    content: "Siber Öncüler'in eğitimleri sayesinde kariyerimde büyük bir sıçrama yapabildim. Teşekkürler!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60",
  },
  {
    name: "Mehmet Kaya",
    role: "Siber Güvenlik Uzmanı",
    content: "Etik hacking eğitimleri gerçekten çok kapsamlı ve güncel. Sektörde fark yaratmamı sağladı.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&auto=format&fit=crop&q=60",
  },
  {
    name: "Zeynep Demir",
    role: "Öğrenci",
    content:
      "Temel programlama kursları sayesinde yazılım dünyasına adım attım. Şimdi büyük bir tutkuyla öğrenmeye devam ediyorum.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&auto=format&fit=crop&q=60",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-gradient"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Öğrencilerimizin Yorumları
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="glass-card p-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gradient">{testimonial.name}</h3>
                  <p className="text-slate-400">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-slate-300 italic">{testimonial.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

