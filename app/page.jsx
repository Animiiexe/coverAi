"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, ImageIcon, Zap, ChevronRight } from "lucide-react";

export default function Page() {
  const [isLogin, setIsLogin] = useState(true);

  const logos = {
    Google: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 256 262"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#4285F4"
          d="M255.9 133.5c0-9.5-1-18.7-2.9-27.6H130v52.3h71.4c-3 16.2-11.9 29.9-25.5 39.2v32h41.2c24.1-22.2 38-54.9 38-95.9z"
        />
        <path
          fill="#34A853"
          d="M130 261c34.5 0 63.4-11.4 84.5-30.8l-41.2-32c-11.4 7.7-26 12.3-43.3 12.3-33.3 0-61.5-22.5-71.5-52.7H15.8v33.1C36.5 232 80.7 261 130 261z"
        />
        <path
          fill="#FBBC05"
          d="M58.5 157.8c-2.6-7.7-4-16-4-24.8s1.4-17.1 4-24.8V75.1H15.8C5.7 95.1 0 117.1 0 140s5.7 44.9 15.8 64.9l42.7-33.1z"
        />
        <path
          fill="#EA4335"
          d="M130 51.2c18.8 0 35.7 6.5 49.1 19.4l36.7-36.7C193.4 12.8 164.5 0 130 0 80.7 0 36.5 29 15.8 75.1l42.7 33.1C68.5 73.7 96.7 51.2 130 51.2z"
        />
      </svg>
    ),
    GitHub: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="white"
          d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
        />
      </svg>
    ),
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-black text-white overflow-hidden">
      {/* Left Section - Visual */}
      <div className="md:w-3/5 w-full relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-fuchsia-500 to-purple-800 opacity-20"></div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=20&width=20')] bg-[length:50px_50px] opacity-10"></div>

        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center p-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
              Cover<span className="text-purple-400">AI</span>
            </h1>
            <p className="text-lg md:text-xl text-purple-100 max-w-md mx-auto">
              Transform your ideas into stunning visuals with our AI-powered
              image generation platform
            </p>
          </motion.div>

          <div className="mt-12 w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
              {[
                {
                  icon: <Sparkles className="h-5 w-5" />,
                  text: "State-of-the-art AI model",
                },
                {
                  icon: <ImageIcon className="h-5 w-5" />,
                  text: "Unlimited content generation",
                },
                {
                  icon: <Zap className="h-5 w-5" />,
                  text: "Lightning-fast processing",
                },
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                  className="flex items-center justify-center md:justify-start space-x-2 text-purple-200 px-4 py-2"
                >
                  {feature.icon}
                  <span className="whitespace-nowrap">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - Form */}
      <div className="md:w-2/5 w-full bg-black/90 backdrop-blur-xl flex items-center justify-center px-8 py-12">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-fuchsia-500">
              {isLogin ? "Welcome Back" : "Join CoverAI"}
            </h2>
            <p className="text-gray-400">
              {isLogin
                ? "Sign in to continue your creative journey"
                : "Start creating stunning AI-generated images today"}
            </p>
          </div>

          <form className="space-y-5">
            {!isLogin && (
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full py-2.5 px-2 bg-gray-900/80  rounded-md"
                />
              </div>
            )}

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full py-2.5 px-2 bg-gray-900/80  rounded-md"
                required
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <label className="block text-sm font-medium text-gray-300">
                  Password
                </label>
              </div>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full py-2.5 px-2 bg-gray-900/80  rounded-md"
              />
              <div>
                {isLogin && (
                  <a
                    href="#"
                    className="text-xs text-purple-400 hover:text-purple-300"
                  >
                    Forgot password?
                  </a>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 mt-6 bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group"
            >
              <span>{isLogin ? "Sign In" : "Create Account"}</span>
              <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="mt-8 text-center">
            <div className="relative flex items-center justify-center">
              <div className="border-t border-gray-800 absolute w-full"></div>
              <span className="relative bg-black px-4 text-sm text-gray-500">
                or continue with
              </span>
            </div>

            <div className="mt-4 flex justify-center space-x-4">
              {["Google", "GitHub"].map((provider) => (
                <button
                  key={provider}
                  className="flex items-center justify-center space-x-2 w-30 px-4 py-2 border border-gray-800 rounded-lg text-sm text-gray-300 hover:bg-gray-900 transition-colors"
                >
                  {logos[provider]}
                  <span>{provider}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-gray-400">
            {isLogin ? (
              <>
                Don't have an account?{" "}
                <button
                  onClick={() => setIsLogin(false)}
                  className="text-purple-400 hover:text-purple-300 font-medium"
                >
                  Sign up
                </button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <button
                  onClick={() => setIsLogin(true)}
                  className="text-purple-400 hover:text-purple-300 font-medium"
                >
                  Sign in
                </button>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
