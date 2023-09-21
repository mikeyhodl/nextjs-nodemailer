"use client";

import Link from "next/link";
import * as React from "react";
// import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [isSending, setIsSending] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const response = await fetch(
        "https://nextjs-nodemailer-seven.vercel.app/api/email",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            email,
          }),
          mode: "no-cors",
        }
      );
    } catch (error) {
      console.log(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSending(false);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="mt-6">
        <div className="flex-1">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoFocus={true}
            required
            type="text"
            name="name"
            placeholder="John Doe"
            className="block w-full px-5 py-3 mt-2 text-zinc-700 bg-white border border-zinc-200 rounded-md dark:bg-zinc-900 dark:text-zinc-300 dark:border-zinc-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
          />
        </div>
        <div className="flex-1 mt-6">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
            name="email"
            placeholder="johndoe@example.com"
            className="block w-full px-5 py-3 mt-2 text-zinc-700 bg-white border border-zinc-200 rounded-md dark:bg-zinc-900 dark:text-zinc-300 dark:border-zinc-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
          />
        </div>
        {/* <div className="w-full mt-6">
          <textarea
            className="block w-full h-32 px-5 py-3 mt-2 text-zinc-700 placeholder-zinc-400 bg-white border border-zinc-200 rounded-md md:h-48 dark:bg-zinc-900 dark:text-zinc-300 dark:border-zinc-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            placeholder="Message"
            defaultValue={""}
          />
        </div> */}
        <button
          disabled={isSending}
          className="w-1/3 center px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50"
        >
          {!isSending ? (
            "get in touch"
          ) : (
            <CgSpinner className="w-6 h-6 animate-spin" />
          )}
        </button>
      </form>
    </>
  );
}
