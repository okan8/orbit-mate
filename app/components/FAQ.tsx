"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqItems = [
  {
    question: "Siber Öncüler kimdir?",
    answer:
      "Siber Öncüler, iki kişilik bir ekip olarak modern web uygulamaları geliştiren bir girişimdir. DevHub.tr ve Robux.tr gibi başarılı projelere imza atıyoruz.",
  },
  {
    question: "Hangi teknolojileri kullanıyorsunuz?",
    answer:
      "Next.js, React, TypeScript, Node.js ve MongoDB gibi modern web teknolojilerini kullanıyoruz. Yakında yapay zeka teknolojilerini de projelerimize entegre edeceğiz.",
  },
  {
    question: "Yeni projeleriniz neler olacak?",
    answer:
      "Yakın gelecekte yapay zeka destekli yenilikçi web uygulamaları geliştirmeyi planlıyoruz. Bu projelerle kullanıcı deneyimini daha da ileriye taşımayı hedefliyoruz.",
  },
  {
    question: "Sizinle nasıl iletişime geçebilirim?",
    answer:
      "Websitemizdeki iletişim formunu kullanabilir veya sosyal medya hesaplarımız üzerinden bize ulaşabilirsiniz. İş birlikleri ve önerileriniz için her zaman açığız.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="sss" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gradient">Sıkça Sorulan Sorular</h2>
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <div key={index} className="mb-6">
              <button
                className="flex justify-between items-center w-full text-left p-4 bg-slate-800 rounded-lg focus:outline-none transition-colors duration-300 hover:bg-slate-700"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-semibold text-slate-200">{item.question}</span>
                <span className="text-blue-300">
                  {openIndex === index ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </span>
              </button>
              {openIndex === index && (
                <div className="bg-slate-700 rounded-b-lg p-4 mt-1">
                  <p className="text-slate-300">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

