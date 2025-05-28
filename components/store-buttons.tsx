"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export function StoreButtons() {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSuccess("");
    setError("");
    setLoading(true);
    const { error } = await supabase.from("waitlist").insert([{ email }]);
    setLoading(false);
    if (error) {
      setError("Something went wrong. Please try again.");
    } else {
      setSuccess("You've been added to the waitlist!");
      setEmail("");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full max-w-2xl mt-2">
      <input
        type="email"
        required
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Enter your email address"
        className="w-full sm:flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#85A67B] text-gray-900 dark:text-white dark:bg-gray-800 dark:border-gray-700"
        disabled={loading}
      />
      <button
        type="submit"
        className="w-full sm:w-auto px-8 py-3 rounded-lg bg-gradient-to-r from-[#85A67B] to-[#FFCBA4] text-white font-semibold shadow hover:opacity-90 transition"
        disabled={loading}
      >
        {loading ? "Joining..." : "Join Waitlist"}
      </button>
      {success && <div className="text-green-600 text-sm mt-2 sm:mt-0 sm:ml-4">{success}</div>}
      {error && <div className="text-red-600 text-sm mt-2 sm:mt-0 sm:ml-4">{error}</div>}
    </form>
  );
}