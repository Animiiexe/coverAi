"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, Sliders, Edit3, Image, Zap } from 'lucide-react';

const ProductPage = () => {
  const features = [
    {
      icon: <Sparkles className="w-6 h-6 text-purple-300" />,
      title: "Text-to-Image Generation",
      description: "Transform your text descriptions into stunning visuals using state-of-the-art AI models."
    },
    {
      icon: <Sliders className="w-6 h-6 text-purple-300" />,
      title: "Advanced Parameters",
      description: "Fine-tune your generations with adjustable settings for steps, guidance, and seed values."
    },
    {
      icon: <Edit3 className="w-6 h-6 text-purple-300" />,
      title: "Image Editing",
      description: "Edit generated images with our built-in tools for adjustments, filters, and effects."
    },
    {
      icon: <Image className="w-6 h-6 text-purple-300" />,
      title: "Multiple Image Sizes",
      description: "Choose from various aspect ratios and resolutions to fit your specific needs."
    }
  ];

  const integrations = [
    {
      title: "API Integration",
      description: "Integrate CoverAI directly into your applications with our robust API.",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      title: "Batch Processing",
      description: "Generate multiple images at once with our efficient batch processing system.",
      image: "https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-black via-purple-950 to-black min-h-screen">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-300">
              Transform Your Ideas Into Reality
            </h1>
            <p className="text-xl text-purple-200 mb-12">
              CoverAI provides powerful tools to turn your text descriptions into stunning visuals using advanced AI technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-black/30 backdrop-blur-lg border border-purple-900/50 rounded-xl p-6 hover:bg-purple-900/20 transition-all hover:border-purple-600/50"
              >
                <div className="w-12 h-12 rounded-full bg-purple-900/40 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-medium mb-2 text-white">{feature.title}</h3>
                <p className="text-purple-200">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-300">
            Powerful Integrations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="rounded-xl overflow-hidden group relative border border-purple-900/50"
              >
                <img
                  src={integration.image}
                  alt={integration.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-white">{integration.title}</h3>
                    <p className="text-purple-200">{integration.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-transparent to-purple-950/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-300">
              Ready to Get Started?
            </h2>
            <p className="text-purple-200 mb-8">
              Join thousands of creators who are already using CoverAI to bring their ideas to life.
            </p>
            <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-lg font-medium text-white  bg-[#BA3CFF] hover:bg-[#A82EF7] transition-all shadow-lg shadow-purple-500/20 flex items-center gap-2 mx-auto"
            >
              <Zap className="w-5 h-5"/>
              Generate Your First Image
            </motion.button></Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;