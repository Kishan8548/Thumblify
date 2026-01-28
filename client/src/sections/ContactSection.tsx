'use client'
import SectionTitle from "../components/SectionTitle";
import { ArrowRightIcon, MailIcon, UserIcon } from "lucide-react";
import { motion } from "motion/react";
import emailjs from "emailjs-com";
import { useRef, useState } from "react";
import toast from "react-hot-toast";

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);

    try {
      await emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );


      toast.success("Message sent successfully 🚀");
      formRef.current.reset();
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact" className="px-4 md:px-16 lg:px-24 xl:px-32">
      <SectionTitle
        text1="Contact"
        text2="Grow your channel"
        text3="Have questions about our AI? Ready to scale your views? Let's talk."
      />

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl mx-auto text-slate-300 mt-16 w-full"
      >
        {/* NAME */}
        <motion.div
          initial={{ y: 150, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 320, damping: 70 }}
        >
          <p className="mb-2 font-medium">Your name</p>
          <div className="flex items-center pl-3 rounded-lg border border-slate-700 focus-within:border-pink-500">
            <UserIcon className="size-5" />
            <input
              name="name"
              required
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 outline-none bg-transparent"
            />
          </div>
        </motion.div>

        {/* EMAIL */}
        <motion.div
          initial={{ y: 150, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 280, damping: 70 }}
        >
          <p className="mb-2 font-medium">Email id</p>
          <div className="flex items-center pl-3 rounded-lg border border-slate-700 focus-within:border-pink-500">
            <MailIcon className="size-5" />
            <input
              name="email"
              required
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 outline-none bg-transparent"
            />
          </div>
        </motion.div>

        {/* MESSAGE */}
        <motion.div
          className="sm:col-span-2"
          initial={{ y: 150, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 240, damping: 70 }}
        >
          <p className="mb-2 font-medium">Message</p>
          <textarea
            name="message"
            required
            rows={8}
            placeholder="Enter your message"
            className="focus:border-pink-500 resize-none w-full p-3 outline-none rounded-lg border border-slate-700 bg-transparent"
          />
        </motion.div>

        {/* SUBMIT */}
        <motion.button
          type="submit"
          disabled={loading}
          className="w-max flex items-center gap-2 bg-pink-600 hover:bg-pink-700 disabled:opacity-60 text-white px-10 py-3 rounded-full"
          initial={{ y: 150, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 280, damping: 70 }}
        >
          {loading ? "Sending..." : "Submit"}
          <ArrowRightIcon className="size-5" />
        </motion.button>
      </form>
    </div>
  );
}
