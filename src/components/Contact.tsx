import SectionHeader from "./SectionHeader";
import { PrimaryButton, SecondaryButton } from "./CustomButtons";

export default function Contact() {
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
          href="mailto:jesnie.magaling@email.lcup.edu.ph"
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

        <form className="space-y-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex flex-col">
              <label className="mb-2 text-sm font-semibold md:text-base">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder-[#7E7D7E] focus:border-gray-600 focus:outline-none dark:border-[rgba(255,255,255,0.06)] dark:focus:border-gray-400"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2 text-sm font-semibold md:text-base">
                Email
              </label>
              <input
                type="email"
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
              placeholder="Enter your message"
              rows={10}
              className="rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder-[#7E7D7E] focus:border-gray-600 focus:outline-none dark:border-[rgba(255,255,255,0.06)] dark:focus:border-gray-400"
            ></textarea>
          </div>

          {/* Button */}
          <PrimaryButton
            variant="outlined"
            fullWidth
            className="border-[rgba(255, 255, 255, 0.10)] dark:border-[rgba(255,255,255,0.06)]"
          >
            Send Message
          </PrimaryButton>
        </form>
      </div>
    </>
  );
}
