"use client";
import React from "react";
import { motion } from "framer-motion";
import { Twitter, Github, MessageSquare, ExternalLink } from "lucide-react";
import Link from "next/link";

const CommunityPage = () => {
  const socialLinks = [
    {
      icon: <Twitter className="w-6 h-6" />,
      name: "Twitter",
      url: "https://x.com/ANIMESHSAWANT1",
      description: "Follow us for updates, tips, and to share your creations.",
      color: "bg-blue-500",
    },
    {
      icon: <Github className="w-6 h-6" />,
      name: "GitHub",
      url: "https://github.com/Animiiexe",
      description:
        "Contribute to our open-source projects and explore examples.",
      color: "bg-gray-700",
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      name: "Discord",
      url: "https://discord.com/users/1092853812747833504",
      description: "Join our Discord community to chat and get help.",
      color: "bg-indigo-600",
    },
  ];

  const showcaseImages = [
    {
      url: "https://img.freepik.com/free-photo/digital-art-with-city-architecture-scenery_23-2151065675.jpg?t=st=1746086558~exp=1746090158~hmac=82310632844361bf4de9bab9717ebde1f0bd7408a289b4af639a75aae6952f7d&w=1380",
      creator: "Alex Chen",
      title: "Futuristic City",
    },
    {
      url: "https://img.freepik.com/free-photo/lights-prisms-effect-close-up_23-2148917884.jpg?t=st=1746086738~exp=1746090338~hmac=823bffcb727ffff80f4961252123f7bf6950b9e6de38ae8e779106927db2a191&w=1380",
      creator: "Sarah Johnson",
      title: "Abstract Dreams",
    },
    {
      url: "https://img.freepik.com/free-photo/leafy-tree-branch-vibrant-autumn-colors-generated-by-ai_188544-10399.jpg?t=st=1746086659~exp=1746090259~hmac=84f0d65f535f73408bf637f070b3f2bc8093f8c11b9b44bdb87e3fb226c97a02&w=1380",
      creator: "Mike Williams",
      title: "Nature's Beauty",
    },
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
              Join Our Community
            </h1>
            <p className="text-xl text-purple-200 mb-12">
              Connect with other creators, share your work, and get inspired by
              amazing AI-generated art.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-black/30 backdrop-blur-lg border border-purple-900/50 rounded-xl p-6 hover:bg-purple-900/20 transition-all hover:border-purple-600/50"
              >
                <div
                  className={`w-12 h-12 rounded-full ${link.color} flex items-center justify-center mb-4`}
                >
                  {link.icon}
                </div>
                <h3 className="text-xl font-medium mb-2 flex items-center gap-2 text-white">
                  {link.name}
                  <ExternalLink className="w-4 h-4 text-purple-300" />
                </h3>
                <p className="text-purple-200">{link.description}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
      {/* Showcase Section */}
      <section className="py-20 ">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-300">
            Community Showcase
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {showcaseImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="rounded-xl overflow-hidden group relative"
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-medium mb-1 text-white">
                      {image.title}
                    </h3>
                    <p className="text-purple-200">by {image.creator}</p>
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
              Share Your Creations
            </h2>
            <p className="text-purple-200 mb-8">
              Show off your AI-generated artwork and connect with fellow
              creators.
            </p>
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-lg font-medium text-white bg-[#BA3CFF] hover:bg-[#A82EF7] transition-all shadow-lg shadow-purple-500/20"
              >
                Upload Your Work
              </motion.button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommunityPage;
