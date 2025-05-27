"use client";

import { motion } from "framer-motion";
import { LineChart, BarChart, Smartphone, Target, Zap } from "lucide-react";

const features = [
  {
    icon: <LineChart className="w-8 h-8 text-purple-500" />,
    title: "Post a Project (Team Formation Tool)",
    description: "Solo builders and founders can easily attract collaborators. The structured form ensures clarity and sets expectations for prospective teammates."
  },
  {
    icon: <BarChart className="w-8 h-8 text-blue-500" />,
    title: "Interest & Match System",
    description: "Simplifies the connection process. This is your “matchmaking engine” — making team formation fast and intentional, without relying on cold outreach or randomness."
  },
  {
    icon: <Smartphone className="w-8 h-8 text-teal-500" />,
    title: "Skill-Based User Profiles",
    description: "Ensures transparency and credibility when forming teams. Helps project creators identify the best fit collaborators, and allows users to showcase their expertise."
  },
  {
    icon: <Target className="w-8 h-8 text-pink-500" />,
    title: "Collaboration Hub",
    description: "Keeps project conversations and workflows organized in one place — no need to jump to Slack or Trello. Helps new teams build momentum from day one."
  },
  {
    icon: <Zap className="w-8 h-8 text-yellow-500" />,
    title: "Project Discovery Feed",
    description: "Helps users find relevant projects quickly and join initiatives aligned with their interests and skills. Encourages serendipitous discovery and cross-discipline collaboration."
  }
];

export function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Powerful Features
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto"
          >
            Everything you need to track and optimize your mobile campaigns
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="bg-purple-50 dark:bg-gray-700 rounded-lg p-3 inline-block mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}