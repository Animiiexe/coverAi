import React from "react";
import Link from "next/link";
import { Sparkles,  Twitter, Github } from "lucide-react";


const Footer = () => {
  return (
    <footer className="bg-[#0c0a16] py-12 px-10 mt-2">
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
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                < Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/features" className="hover:text-white text-sm">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white text-sm">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/examples" className="hover:text-white text-sm">
                  Examples
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  href="/documentation"
                  className="hover:text-white text-sm"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/tutorials" className="hover:text-white text-sm">
                  Tutorials
                </Link>
              </li>
            </ul>
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
