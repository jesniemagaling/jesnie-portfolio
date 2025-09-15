import { PrimaryButton, SecondaryButton } from "./CustomButtons";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" },
    );
  }, []);

  return (
    <section className="flex h-full min-h-screen items-center justify-center">
      <div className="mx-auto max-w-[1000px] space-y-6">
        <div className="font-bold">
          <p ref={titleRef} className="text-[44px] md:text-[60px]">
            Hi, I’m Jesnie,
          </p>
          <p className="text-[48px] leading-none md:text-[64px] md:leading-10">
            Full-Stack <span className="text-accent-dark">Developer.</span>
          </p>
        </div>
        <p className="text-body text-base md:text-xl">
          I’m a developer who builds web applications and keeps learning new
          technologies. I focus on making websites that are clear and easy to
          use. I’m always working on projects that help me grow and get better
          at coding.
        </p>
        <div className="flex gap-4">
          <a href="#about" className="block h-full">
            <PrimaryButton>About</PrimaryButton>
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
      </div>
    </section>
  );
}
