"use client";
import { useActionState } from "react";
import { motion } from "framer-motion";
import { Sparkles, ImageIcon, Zap, ChevronRight } from "lucide-react";
import { register } from "@/actions/userController";
import Alert from "./Alert";

export default function RegisterForm() {
  const [formState, formAction] = useActionState(register, {});

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-black text-white overflow-hidden">
      {/* Left Section - Visual */}
      <div className="md:w-3/5 w-full relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950 to-black"></div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=20&width=20')] bg-[length:50px_50px] opacity-10"></div>

        {/* Content */}

        <div className="relative h-full flex flex-col items-center justify-center p-8 z-10">
          <div className="mb-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-600 flex items-center justify-center shadow-lg shadow-purple-500/20"
            >
              <Sparkles className="h-10 w-10 text-white" />
            </motion.div>
          </div>
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
              Join CoverAI
            </h2>
            <p className="text-gray-400">
              Start creating stunning AI-generated images today
            </p>
          </div>

          <form className="space-y-5" action={formAction}>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">
                Username
              </label>
              <input
                type="text"
                name="username"
                placeholder="you@example"
                className="w-full py-2.5 px-2 bg-gray-900/80  rounded-md"
                required
              />
              {formState?.errors?.username && (
                <Alert message={formState.errors?.username} />
              )}
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <label className="block text-sm font-medium text-gray-300">
                  Password
                </label>
              </div>
              <input
                name="password"
                type="password"
                placeholder="••••••••"
                className="w-full py-2.5 px-2 bg-gray-900/80  rounded-md"
              />
              {formState?.errors?.password && (
                <Alert message={formState.errors?.password} />
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 mt-6 bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group"
            >
              <span>Create Account</span>
              <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
