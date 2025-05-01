import React from "react";
import Link from "next/link";
import { Sparkles, Twitter, Github, Mail, Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0c0a16] py-12 px-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#BA3CFF] rounded-xl flex items-center justify-center hover:rotate-12 transition-transform duration-300 shadow-lg shadow-[#BA3CFF]/30">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                CoverAI
              </span>
            </Link>
            <p className="mt-4 text-gray-400 text-sm">
              Transform your ideas into stunning visuals with AI
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/Animiiexe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">About us</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/product" className="hover:text-white text-sm">
                  Product
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-white text-sm">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/community" className="hover:text-white text-sm">
                  Community
                </Link>
              </li>
            </ul>
          </div>
          <div className="relative overflow-hidden p-5 rounded-xl bg-gradient-to-br from-purple-900/50 to-blue-900/50 w-full md:col-span-2">
            <div className="relative z-10">
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 bg-purple-600/20 rounded-lg">
                  <Mail className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Join Our Newsletter
                  </h3>
                  <p className="text-gray-300/90 text-sm mt-1">
                    Get exclusive AI tips, tutorials, and updates delivered
                    weekly.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-[#12101a]/90 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                />
                <button className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" />
                  Subscribe Now
                </button>
              </div>

              <p className="text-xs text-gray-400/80 mt-3">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} CoverAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
