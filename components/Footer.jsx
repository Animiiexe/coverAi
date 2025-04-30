import Link from "next/link";
import { Heart, Sparkles, Twitter, Discord } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-transparent to-[#BA3CFF]/5 backdrop-blur-lg">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Column */}
          <div className="flex flex-col items-start space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-[#BA3CFF] rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-300 to-[#BA3CFF] text-transparent bg-clip-text">
                CoverAI
              </span>
            </div>
            <p className="text-white/70 text-sm">
              Transform your ideas into stunning visuals with AI
            </p>
          </div>

          {/* Links Columns */}
          <div className="flex flex-col space-y-3">
            <h3 className="text-white font-medium mb-2">Product</h3>
            <Link href="/features" className="text-white/70 hover:text-[#BA3CFF] transition-colors text-sm">Features</Link>
            <Link href="/pricing" className="text-white/70 hover:text-[#BA3CFF] transition-colors text-sm">Pricing</Link>
            <Link href="/examples" className="text-white/70 hover:text-[#BA3CFF] transition-colors text-sm">Examples</Link>
          </div>

          <div className="flex flex-col space-y-3">
            <h3 className="text-white font-medium mb-2">Resources</h3>
            <Link href="/docs" className="text-white/70 hover:text-[#BA3CFF] transition-colors text-sm">Documentation</Link>
            <Link href="/blog" className="text-white/70 hover:text-[#BA3CFF] transition-colors text-sm">Blog</Link>
            <Link href="/tutorials" className="text-white/70 hover:text-[#BA3CFF] transition-colors text-sm">Tutorials</Link>
          </div>

          <div className="flex flex-col space-y-3">
            <h3 className="text-white font-medium mb-2">Community</h3>
            <Link href="https://x.com/ANIMESHSAWANT1" className="flex items-center space-x-2 text-white/70 hover:text-[#BA3CFF] transition-colors text-sm">
              <Twitter className="w-4 h-4" /> <span>Twitter</span>
            </Link>
            <Link href="https://github.com/Animiiexe/CoverAi" className="flex items-center space-x-2 text-white/70 hover:text-[#BA3CFF] transition-colors text-sm">
              <Heart className="w-4 h-4" /> <span>GitHub</span>
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} CoverAI. No rights reserved - Open Source
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-white/50 hover:text-[#BA3CFF] transition-colors text-sm">Privacy</Link>
            <Link href="/terms" className="text-white/50 hover:text-[#BA3CFF] transition-colors text-sm">Terms</Link>
            <Link href="/cookies" className="text-white/50 hover:text-[#BA3CFF] transition-colors text-sm">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}