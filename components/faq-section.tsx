"use client";

import { motion } from "framer-motion";

const faqs = [
  {
    question: "What is IdeaLink?",
    answer: "IdeaLink is a platform where anyone can post a project idea or join existing projects to find teammates and collaborate. It's designed to help makers, dreamers, and doers connect and build together."
  },
  {
    question: "How do I join the waitlist?",
    answer: "Simply enter your email address in the waitlist form on the homepage and click 'Join Waitlist'. You'll be notified when the platform launches."
  },
  {
    question: "Can I post my own project?",
    answer: "Yes! Once the platform launches, you'll be able to post your own project, describe your idea, and specify the kind of teammates you're looking for."
  },
  {
    question: "How do I find a team to join?",
    answer: "You can browse projects posted by others and show interest in the ones that match your skills and interests. Project owners can then invite you to join their team."
  },
  {
    question: "Is IdeaLink free to use?",
    answer: "Yes, joining the waitlist and using the core features of IdeaLink will be free for everyone." 
  }
];

export function FaqSection() {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto"
          >
            Get answers to common questions about IdeaLink and how to get started.
          </motion.p>
        </div>
        <div className="max-w-3xl mx-auto space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg px-6 py-6 shadow">
              <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-base">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}