"use client";
import { useState } from "react";

export function StoreButtons() {
  const [email, setEmail] = useState("");
  // You can add a submit handler here if needed
  return (
    <form className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full max-w-2xl mt-2">
      <input
        type="email"
        required
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Enter your email address"
        className="w-full sm:flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#85A67B] text-gray-900 dark:text-white dark:bg-gray-800 dark:border-gray-700"
      />
      <button
        type="submit"
        className="w-full sm:w-auto px-8 py-3 rounded-lg bg-gradient-to-r from-[#85A67B] to-[#FFCBA4] text-white font-semibold shadow hover:opacity-90 transition"
      >
        Join Waitlist
      </button>
    </form>
  );
}