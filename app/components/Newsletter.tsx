"use client"

import { Send } from "lucide-react"
import type React from "react"

export default function Newsletter() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Burada e-posta gönderme işlemi yapılabilir
    console.log("E-posta kaydedildi")

    // Kullanıcıya geri bildirim ver
    alert("Bültene başarıyla abone oldunuz!")
  }

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-gradient">Gelişmelerden Haberdar Olun</h2>
          <p className="text-xl mb-8 text-slate-400">
            Yeni projelerimiz, teknoloji haberleri ve siber güvenlik ipuçları için bültenimize abone olun.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              placeholder="E-posta adresiniz"
              className="flex-grow px-4 py-3 rounded-lg bg-slate-800 text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            />
            <button type="submit" className="btn btn-primary flex items-center justify-center">
              Abone Ol <Send size={20} className="ml-2" />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

