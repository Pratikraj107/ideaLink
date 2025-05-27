"use client";

import { motion } from "framer-motion";

interface DashboardCardProps {
  color: string;
  title: string;
  description: string;
  delay: number;
}

export function DashboardCard({ color, title, description, delay }: DashboardCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`${color} rounded-lg p-3 shadow-lg`}
    >
      <p className="text-white text-xl font-bold">{title}</p>
      <p className="text-white/80 text-xs">{description}</p>
    </motion.div>
  );
}