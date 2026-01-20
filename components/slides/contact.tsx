// components/slides/contact.tsx
"use client";

import { useState } from "react";

export default function ContactSlide() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="relative h-full w-full flex-none snap-start overflow-hidden">
      <div className="mx-auto flex h-full w-full max-w-5xl flex-col justify-center px-6 sm:px-10">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl text-zinc-50">
            Let's Connect
          </h2>
          <p className="mt-2 text-zinc-400">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-zinc-700/60 bg-zinc-800/50 px-4 py-3 text-zinc-50 placeholder-zinc-500 backdrop-blur-sm transition focus:border-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-600/50"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-zinc-700/60 bg-zinc-800/50 px-4 py-3 text-zinc-50 placeholder-zinc-500 backdrop-blur-sm transition focus:border-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-600/50"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full rounded-xl border border-zinc-700/60 bg-zinc-800/50 px-4 py-3 text-zinc-50 placeholder-zinc-500 backdrop-blur-sm transition focus:border-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-600/50 resize-none"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              className="inline-flex h-12 items-center justify-center rounded-full bg-zinc-50 px-6 text-sm font-medium tracking-wide text-zinc-950 transition hover:bg-zinc-200"
            >
              Send Message
            </button>
          </form>

          <div className="mt-8 flex gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center justify-center rounded-full border border-zinc-700 px-4 text-sm font-medium text-zinc-300 transition hover:bg-zinc-800/50 hover:border-zinc-600"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center justify-center rounded-full border border-zinc-700 px-4 text-sm font-medium text-zinc-300 transition hover:bg-zinc-800/50 hover:border-zinc-600"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center justify-center rounded-full border border-zinc-700 px-4 text-sm font-medium text-zinc-300 transition hover:bg-zinc-800/50 hover:border-zinc-600"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
