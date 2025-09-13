import SectionHeader from "./SectionHeader";
import { PrimaryButton, SecondaryButton } from "./CustomButtons";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!formRef.current) return;

    try {
      await emailjs.sendForm(
        "service_f2hrrub",
        "template_38q0u9q",
        formRef.current,
        "-HTl4rU_tkX-7EmKx",
      );

      toast.success("Message sent successfully!");
      formRef.current.reset();
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <SectionHeader
        title={"Contact"}
        description={
          "I’m always open to new opportunities and projects where I can contribute and grow. Got an idea in mind? Let’s build it together."
        }
      />
      <div className="mb-8 mt-5 flex gap-4">
        <a href="tel:+639123456789" className="block h-full">
          <PrimaryButton>Call</PrimaryButton>
        </a>
        <a
          href="mailto:magalingjesnie@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="block h-full"
        >
          <SecondaryButton>Email</SecondaryButton>
        </a>
      </div>
      <div className="rounded-lg border border-gray-300 p-8 dark:border-[rgba(255,255,255,0.06)] dark:bg-[#1C1C1C]">
        <h2 className="text-lg font-semibold md:text-xl">Send Message</h2>
        <p className="mb-6 text-sm opacity-80 dark:opacity-50">
          Fill out the form and I’ll get back to you as soon as possible.
        </p>

        <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
          <input type="hidden" name="title" value="Portfolio Contact Form" />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex flex-col">
              <label className="mb-2 text-sm font-semibold md:text-base">
                Name
              </label>
              <input
                required
                type="text"
                name="name"
                placeholder="Enter your name"
                className="rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder-[#7E7D7E] focus:border-gray-600 focus:outline-none dark:border-[rgba(255,255,255,0.06)] dark:focus:border-gray-400"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2 text-sm font-semibold md:text-base">
                Email
              </label>
              <input
                required
                type="email"
                name="email"
                placeholder="Enter your email"
                className="rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder-[#7E7D7E] focus:border-gray-600 focus:outline-none dark:border-[rgba(255,255,255,0.06)] dark:focus:border-gray-400"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="mb-2 text-sm font-semibold md:text-base">
              Message
            </label>
            <textarea
              required
              name="message"
              placeholder="Enter your message"
              rows={10}
              className="rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder-[#7E7D7E] focus:border-gray-600 focus:outline-none dark:border-[rgba(255,255,255,0.06)] dark:focus:border-gray-400"
            ></textarea>
          </div>

          {/* Button */}
          <PrimaryButton
            type="submit"
            disabled={loading}
            variant="outlined"
            fullWidth
            className="border-[rgba(255, 255, 255, 0.10)] dark:border-[rgba(255,255,255,0.06)]"
          >
            {loading ? "Sending..." : "Send Message"}
          </PrimaryButton>
        </form>
      </div>
    </>
  );
}
