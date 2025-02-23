import Image from "next/image"
import { Users, Target, Zap } from "lucide-react"

export default function AboutUs() {
  const features = [
    {
      icon: <Users size={24} />,
      title: "İki Kişilik Ekip",
      description: "Frontend ve backend alanlarında uzmanlaşmış iki kişilik ekibimizle çözümler üretiyoruz.",
    },
    {
      icon: <Target size={24} />,
      title: "Hedef Odaklı",
      description: "Türk gençlerine yönelik yararlı projeler geliştirmeyi amaçlıyoruz.",
    },
    {
      icon: <Zap size={24} />,
      title: "Yenilikçi Yaklaşım",
      description: "En son teknolojileri kullanarak yenilikçi çözümler sunuyoruz.",
    },
  ]

  return (
    <section id="hakkimizda" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gradient">Hakkımızda</h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="relative h-[400px] rounded-xl overflow-hidden glass-card">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/s.jpg-Pv86gPkgR81jgyC6h1kwqvQmecMhxg.jpeg"
                alt="Space Apps Yarışması'nda ekip çalışmamız"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-6 text-gradient">AMACIMIZ</h3>
            <p className="text-slate-300 mb-8 text-lg leading-relaxed">
              Amacımız, Türk gençlerine yönelik yararlı projeler geliştirmek ve teknoloji alanında öncü olmak. İki
              kişilik ekibimizle, yazılım ve siber güvenlik alanlarında yenilikçi çözümler sunuyoruz.
            </p>
            <div className="grid grid-cols-1 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start glass-card p-4">
                  <div className="flex-shrink-0 mr-4">
                    <div className="bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full p-2 text-white">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-slate-200">{feature.title}</h4>
                    <p className="text-slate-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

