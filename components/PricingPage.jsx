"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, HelpCircle, Sparkles } from 'lucide-react';
import Link from 'next/link';

const PricingPage = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  
  const plans = [
    {
      name: "Free",
      description: "Perfect for trying out the platform",
      price: {
        monthly: 0,
        annual: 0
      },
      features: [
        "25 image generations per month",
        "Standard quality images",
        "Basic editing tools",
        "512x512 resolution",
        "Community support"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Creator",
      description: "For content creators and artists",
      price: {
        monthly: 19,
        annual: 15
      },
      features: [
        "250 image generations per month",
        "High quality images",
        "Advanced editing tools",
        "Up to 1024x1024 resolution",
        "Export in multiple formats",
        "Email support"
      ],
      cta: "Choose Creator",
      popular: true
    },
    {
      name: "Professional",
      description: "For businesses and serious creators",
      price: {
        monthly: 49,
        annual: 39
      },
      features: [
        "Unlimited image generations",
        "Highest quality images",
        "All editing tools and features",
        "Up to 1536x1536 resolution",
        "Priority processing",
        "Commercial usage rights",
        "API access",
        "Priority support"
      ],
      cta: "Choose Professional",
      popular: false
    }
  ];

  return (
    <div className="bg-[#0A071B] text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#BA3CFF]/20 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-[#BA3CFF]/10 rounded-full border border-[#BA3CFF]/30">
              <Sparkles className="w-4 h-4 text-[#BA3CFF]" />
              <span className="text-sm font-medium text-[#BA3CFF]">Pricing</span>
            </div>
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-[#BA3CFF] bg-clip-text text-transparent">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-300 mb-12">
              Choose the plan that fits your needs. All plans include access to our core AI image generation technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Toggle */}
      <div className="container mx-auto px-4 mb-16">
        <div className="flex items-center justify-center gap-4">
          <span className={`text-lg ${!isAnnual ? 'text-white font-medium' : 'text-gray-400'}`}>Monthly</span>
          <button 
            className="relative w-16 h-8 bg-gray-800 rounded-full p-1 pb-7 transition-colors hover:bg-gray-700"
            onClick={() => setIsAnnual(!isAnnual)}
          >
            <div className={`absolute w-6 h-6 bg-[#BA3CFF] rounded-full transform transition-all duration-300 ${isAnnual ? 'translate-x-8' : 'translate-x-0'}`} />
          </button>
          <div className="flex items-center gap-2">
            <span className={`text-lg ${isAnnual ? 'text-white font-medium' : 'text-gray-400'}`}>Annual</span>
            <span className="px-2 py-1 bg-green-900/30 text-green-400 text-xs rounded-full">Save 20%</span>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <section className="container mx-auto px-4 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative rounded-xl p-8 bg-gradient-to-b ${plan.popular ? 'from-[#1E103A] to-[#0E0720] border-2 border-[#BA3CFF]' : 'from-gray-900/50 to-gray-900/20 border border-gray-800'} transition-all hover:scale-[1.02]`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#BA3CFF] text-white text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full shadow-lg">
                  Most Popular
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                <p className="text-gray-400">{plan.description}</p>
              </div>
              
              <div className="mb-8">
                <span className="text-5xl font-bold">${isAnnual ? plan.price.annual : plan.price.monthly}</span>
                <span className="text-gray-400">/month</span>
                {isAnnual && plan.price.annual !== 0 && (
                  <p className="text-sm text-gray-400 mt-1">billed annually at ${plan.price.annual * 12}</p>
                )}
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="flex-shrink-0 w-5 h-5 text-[#BA3CFF] mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                className={`w-full py-3 rounded-lg font-medium transition-all ${
                  plan.popular 
                    ? 'bg-[#BA3CFF] hover:bg-[#A82EF7] text-white shadow-lg shadow-[#BA3CFF]/20' 
                    : 'bg-gray-800 hover:bg-gray-700 text-white'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-[#0E0720] to-[#0A071B]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-purple-300 to-[#BA3CFF] bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-4">
              {[
                {
                  question: "How many images can I generate?",
                  answer: "The number of images you can generate depends on your plan. The Free plan includes 25 generations per month, the Creator plan includes 250 generations per month, and the Professional plan includes unlimited generations."
                },
                {
                  question: "What payment methods do you accept?",
                  answer: "We accept all major credit cards, PayPal, and certain regional payment methods. All payments are processed securely through our payment processor."
                },
                {
                  question: "Can I upgrade or downgrade my plan?",
                  answer: "Yes, you can change your plan at any time. If you upgrade, you'll be charged the prorated difference for the remainder of your billing cycle. If you downgrade, the new rate will apply at the start of your next billing cycle."
                },
                {
                  question: "Do I own the images I create?",
                  answer: "Yes, you own all the content you create using our platform. Professional plan users receive full commercial usage rights for all generated images."
                },
                {
                  question: "Is there a refund policy?",
                  answer: "We offer a 7-day money-back guarantee for new subscriptions. If you're not satisfied with our service, contact our support team within 7 days of your initial purchase for a full refund."
                }
              ].map((faq, index) => (
                <div key={index} className="group rounded-xl p-6 bg-gray-900/30 hover:bg-gray-900/50 border border-gray-800 transition-all">
                  <h3 className="text-xl font-medium mb-3 flex items-center gap-3">
                    <div className="p-1 bg-[#BA3CFF]/10 rounded-lg group-hover:bg-[#BA3CFF]/20 transition-colors">
                      <HelpCircle className="w-5 h-5 text-[#BA3CFF]" />
                    </div>
                    {faq.question}
                  </h3>
                  <p className="text-gray-400 pl-9">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#BA3CFF]/10 to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Still Have Questions?</h2>
            <p className="text-gray-300 mb-8 text-lg">
              Our team is ready to help you find the perfect plan for your needs.
            </p>
            <div className="flex justify-center gap-4">
              <button className="px-8 py-3 rounded-lg font-medium bg-[#BA3CFF] hover:bg-[#A82EF7] text-white transition-colors shadow-lg shadow-[#BA3CFF]/20">
                Contact Sales
              </button>
              <Link href="https://discord.com/users/1092853812747833504">    <button className="px-8 py-3 rounded-lg font-medium bg-transparent hover:bg-gray-800 text-white border border-gray-700 transition-colors">
                Join Discord
              </button></Link>
              
          
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;