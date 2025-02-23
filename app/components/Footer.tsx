import Image from "next/image"
import Link from "next/link"
import { Twitter, Linkedin, Instagram, GitlabIcon as GitHub } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-900/80 text-slate-300 py-12" id="iletisim">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center md:text-left">
            <Image
              src="/placeholder.svg?height=96&width=96"
              alt="Logo"
              width={96}
              height={96}
              className="mx-auto md:mx-0 rounded-xl glass-card"
            />
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4 text-gradient">Projelerimiz</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://devhub.tr"
                  target="_blank"
                  className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
                >
                  DevHubTR
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4 text-gradient">Sosyal Medya</h4>
            <div className="flex space-x-4">
              <Link href="#" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">
                <Twitter size={24} />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">
                <Linkedin size={24} />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">
                <Instagram size={24} />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">
                <GitHub size={24} />
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4 text-gradient">İletişim</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:info@siberonculer.com"
                  className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
                >
                  info@siberonculer.com
                </a>
              </li>
              <li>
                <a
                  href="mailto:destek@siberonculer.com"
                  className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
                >
                  destek@siberonculer.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 text-center text-slate-500">
          <p>&copy; 2024 Siber Öncüler. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  )
}

