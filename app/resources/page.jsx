"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Play, BookOpen, Clock, Calendar, ChevronDown, Mail, User } from 'lucide-react';
import Link from 'next/link';

const TutorialsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'basics', name: 'Basics' },
    { id: 'prompting', name: 'Prompt Engineering' },
    { id: 'editing', name: 'Image Editing' },
    { id: 'api', name: 'API Integration' },
    { id: 'advanced', name: 'Advanced Techniques' },
  ];
  
  const levels = [
    { id: 'all', name: 'All Levels' },
    { id: 'beginner', name: 'Beginner' },
    { id: 'intermediate', name: 'Intermediate' },
    { id: 'advanced', name: 'Advanced' },
  ];
  
  const tutorials = [
    {
      id: 1,
      title: "Getting Started with CoverAI",
      description: "Learn the basics of using CoverAI to generate your first AI image.",
      category: "basics",
      level: "beginner",
      duration: "10 min",
      date: "May 12, 2025",
      image: "https://images.pexels.com/photos/3783471/pexels-photo-3783471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      type: "video"
    },
    {
      id: 2,
      title: "Advanced Prompt Engineering",
      description: "Master the art of writing effective prompts to get exactly the images you want.",
      category: "prompting",
      level: "intermediate",
      duration: "15 min",
      date: "May 8, 2025",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      type: "article"
    },
    {
      id: 3,
      title: "Editing and Refining Generated Images",
      description: "Learn how to use our built-in editing tools to perfect your AI-generated images.",
      category: "editing",
      level: "beginner",
      duration: "12 min",
      date: "May 5, 2025",
      image: "https://images.pexels.com/photos/7054528/pexels-photo-7054528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      type: "video"
    },
    {
      id: 4,
      title: "Integrating CoverAI with Your Application",
      description: "A step-by-step guide to integrating our API into your web or mobile application.",
      category: "api",
      level: "advanced",
      duration: "25 min",
      date: "April 30, 2025",
      image: "https://images.pexels.com/photos/4709369/pexels-photo-4709369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      type: "article"
    },
    {
      id: 5,
      title: "Creating Consistent Character Designs",
      description: "Techniques for generating consistent character designs across multiple images.",
      category: "advanced",
      level: "intermediate",
      duration: "18 min",
      date: "April 25, 2025",
      image: "https://img.freepik.com/free-photo/portrait-futuristic-female-humanoid-with-advanced-technology_23-2151666256.jpg?t=st=1746087923~exp=1746091523~hmac=d132ced76d9544f89cf3d7194cad2c15f156555372ab9cba70afb482d2bd3082&w=740",
      type: "video"
    },
    {
      id: 6,
      title: "Optimizing Image Parameters",
      description: "Understand how to adjust generation parameters for optimal results.",
      category: "prompting",
      level: "intermediate",
      duration: "14 min",
      date: "April 20, 2025",
      image: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      type: "article"
    },
    {
      id: 7,
      title: "Creating Art in Specific Styles",
      description: "Learn how to generate images in particular artistic styles and periods.",
      category: "prompting",
      level: "beginner",
      duration: "20 min",
      date: "April 15, 2025",
      image: "https://images.pexels.com/photos/3094799/pexels-photo-3094799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      type: "video"
    },
    {
      id: 8,
      title: "Advanced API Usage Patterns",
      description: "Explore complex API integration scenarios and performance optimization.",
      category: "api",
      level: "advanced",
      duration: "30 min",
      date: "April 10, 2025",
      image: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      type: "article"
    }
  ];
  
  const filteredTutorials = tutorials.filter(tutorial => {
    const matchesCategory = selectedCategory === 'all' || tutorial.category === selectedCategory;
    const matchesLevel = selectedLevel === 'all' || tutorial.level === selectedLevel;
    const matchesSearch = 
      tutorial.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      tutorial.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesLevel && matchesSearch;
  });

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
              Tutorials & Guides
            </h1>
            <p className="text-xl text-purple-200 mb-12">
              Learn how to use CoverAI effectively with our comprehensive tutorials and guides.
            </p>
            
            <div className="relative mb-10">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-purple-400" />
              </div>
              <input
                type="text"
                placeholder="Search tutorials..."
                className="w-full bg-black/30 backdrop-blur-lg border border-purple-900/50 rounded-xl pl-10 pr-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent placeholder-purple-400/70"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <select
                  className="w-full appearance-none bg-black/30 backdrop-blur-lg border border-purple-900/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-400 pointer-events-none" />
              </div>
              
              <div className="relative flex-1">
                <select
                  className="w-full appearance-none bg-black/30 backdrop-blur-lg border border-purple-900/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                >
                  {levels.map(level => (
                    <option key={level.id} value={level.id}>
                      {level.name}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-400 pointer-events-none" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Tutorials Grid */}
      <section className="py-10">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {filteredTutorials.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredTutorials.map(tutorial => (
                  <motion.div
                    key={tutorial.id}
                    whileHover={{ y: -5 }}
                    className="bg-black/30 backdrop-blur-lg border border-purple-900/50 rounded-xl overflow-hidden group transition-all hover:border-purple-600/50"
                  >
                    <div className="relative overflow-hidden h-48">
                      <img 
                        src={tutorial.image} 
                        alt={tutorial.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`px-4 py-2 rounded-lg font-medium text-white flex items-center gap-2 ${
                            tutorial.type === 'video' 
                              ? 'bg-blue-600 hover:bg-blue-700' 
                              : 'bg-purple-600 hover:bg-purple-700'
                          }`}
                        >
                          {tutorial.type === 'video' ? (
                            <>
                              <Play className="w-4 h-4" />
                              Watch
                            </>
                          ) : (
                            <>
                              <BookOpen className="w-4 h-4" />
                              Read
                            </>
                          )}
                        </motion.button>
                      </div>
                      <div className={`absolute top-3 right-3 ${
                        tutorial.type === 'video' ? 'bg-blue-600' : 'bg-purple-600'
                      } text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full`}>
                        {tutorial.type}
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between text-sm text-purple-300 mb-3">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {tutorial.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <span className={`w-2 h-2 rounded-full ${
                            tutorial.level === 'beginner' ? 'bg-green-500' :
                            tutorial.level === 'intermediate' ? 'bg-yellow-500' :
                            'bg-red-500'
                          }`}></span>
                          <span className="capitalize">{tutorial.level}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-medium mb-2 text-white">{tutorial.title}</h3>
                      <p className="text-purple-200 text-sm mb-4">{tutorial.description}</p>
                      <div className="flex items-center justify-between text-sm">
                        <div className="text-purple-400">
                          <Calendar className="w-4 h-4 inline mr-1" />
                          {tutorial.date}
                        </div>
                        <Link 
                          href={`/tutorials/${tutorial.id}`}
                          className="text-purple-400 font-medium hover:text-purple-300 transition-colors"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <h3 className="text-xl font-medium mb-2 text-white">No tutorials found</h3>
                <p className="text-purple-300">
                  Try adjusting your search or filters to find tutorials.
                </p>
              </div>
            )}
            
            {filteredTutorials.length > 0 && (
              <div className="mt-16 text-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-5 py-3 rounded-lg font-medium text-white bg-[#BA3CFF] hover:bg-[#A82EF7] transition-all shadow-lg shadow-purple-500/20"
                >
                  Load More Tutorials
                </motion.button>
              </div>
            )}
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-transparent to-purple-950/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-300">
                Can't Find What You Need?
              </h2>
              <p className="text-purple-200 mb-6">
                If you're looking for specific guidance that isn't covered in our tutorials, our support team is ready to help.
              </p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/community"
                className="inline-block px-6 py-3 rounded-lg font-medium text-white bg-[#BA3CFF] hover:bg-[#A82EF7] transition-all shadow-lg shadow-purple-500/20"
              >
                Contact Support
              </motion.a>
            </div>
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-black/30 backdrop-blur-lg rounded-xl p-6 border border-purple-900/50 hover:border-purple-600/50 transition-all"
            >
              <h3 className="text-xl font-medium mb-4 text-white">Request a Tutorial</h3>
              <p className="text-purple-300 text-sm mb-4">
                Is there a specific topic you'd like us to cover in a future tutorial? Let us know!
              </p>
              <div className="space-y-4">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-purple-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full bg-black/20 backdrop-blur-lg border border-purple-900/50 rounded-xl pl-10 pr-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent placeholder-purple-400/70"
                  />
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-purple-400" />
                  </div>
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full bg-black/20 backdrop-blur-lg border border-purple-900/50 rounded-xl pl-10 pr-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent placeholder-purple-400/70"
                  />
                </div>
                <textarea
                  placeholder="Describe the tutorial you'd like to see"
                  rows={4}
                  className="w-full bg-black/20 backdrop-blur-lg border border-purple-900/50 rounded-xl px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent resize-none placeholder-purple-400/70"
                ></textarea>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-6 py-3 rounded-lg font-medium text-white bg-[#BA3CFF] hover:bg-[#A82EF7] transition-all shadow-lg shadow-purple-500/20"
                >
                  Submit Request
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TutorialsPage;