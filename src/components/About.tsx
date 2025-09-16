import SectionHeader from "./SectionHeader";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  // refs
  const aboutHeaderRef = useRef<HTMLDivElement>(null);
  const aboutTextRefs = useRef<HTMLParagraphElement[]>([]);

  const goalHeaderRef = useRef<HTMLHeadingElement>(null);
  const goalTextRef = useRef<HTMLParagraphElement>(null);

  const eduHeaderRef = useRef<HTMLDivElement>(null);
  const eduItemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // About section
    if (aboutHeaderRef.current) {
      gsap.fromTo(
        aboutHeaderRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: aboutHeaderRef.current,
            start: "top 80%",
          },
        },
      );
    }

    gsap.fromTo(
      aboutTextRefs.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: aboutHeaderRef.current,
          start: "top 70%",
        },
      },
    );

    // Goal section
    if (goalHeaderRef.current && goalTextRef.current) {
      gsap.fromTo(
        goalHeaderRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: goalHeaderRef.current,
            start: "top 80%",
          },
        },
      );

      gsap.fromTo(
        goalTextRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: goalHeaderRef.current,
            start: "top 75%",
          },
        },
      );
    }

    // Education section
    if (eduHeaderRef.current) {
      gsap.fromTo(
        eduHeaderRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: eduHeaderRef.current,
            start: "top 80%",
          },
        },
      );
    }

    gsap.fromTo(
      eduItemsRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.25,
        ease: "power3.out",
        scrollTrigger: {
          trigger: eduHeaderRef.current,
          start: "top 75%",
        },
      },
    );
  }, []);

  aboutTextRefs.current = [];
  eduItemsRef.current = [];

  return (
    <div className="my-36 grid grid-cols-1 gap-[46px] md:grid-cols-2 lg:gap-[84px]">
      <div className="max-w-[655px]">
        {/* About Me */}
        <div ref={aboutHeaderRef}>
          <SectionHeader title={"About Me"} />
        </div>
        <p
          ref={(el) => {
            if (el) aboutTextRefs.current[0] = el;
          }}
          className="text-body mb-2 mt-6 text-lg md:text-xl"
        >
          I’m Jesnie Magaling, 21 years old, from Bulacan, and currently taking
          up BS in Information Technology at La Consolacion University
          Philippines. I’m a full-stack developer who can build web
          applications, from user interfaces to servers and databases, using
          modern technologies. Recently, I’ve also started exploring artificial
          intelligence engineering.
        </p>
        <p
          ref={(el) => {
            if (el) aboutTextRefs.current[1] = el;
          }}
          className="text-body mb-6 text-lg md:text-xl"
        >
          I enjoy learning new technologies, tackling challenges, and keeping up
          with the latest trends in development. I’m currently looking for a
          professional role where I can apply my skills, grow as a developer,
          and contribute to meaningful projects. If you’re looking for a
          full-stack web developer, feel free to reach out.
        </p>

        {/* Goal */}
        <div>
          <h2
            ref={goalHeaderRef}
            className="text-2xl font-bold md:text-3xl lg:text-[32px]"
          >
            My Goal
          </h2>
          <p ref={goalTextRef} className="text-body mt-2 text-lg md:text-xl">
            To work in a team that creates responsive web applications and
            AI-powered solutions that can make a real difference in tech
            communities and organizations.
          </p>
        </div>
      </div>

      {/* Education */}
      <div>
        <div ref={eduHeaderRef}>
          <SectionHeader title={"Education"} />
        </div>
        <div
          ref={(el) => {
            if (el) eduItemsRef.current[0] = el;
          }}
          className="mt-5"
        >
          <h2 className="text-xl font-semibold md:text-2xl">
            La Consolacion University Philippines
          </h2>
          <p className="text-body mb-4 mt-2 text-lg md:text-xl">
            Bachelor of Science in Information Technology
          </p>
          <h3 className="text-body text-lg font-semibold md:text-xl">
            2022 - 2026
          </h3>
        </div>
        <div
          ref={(el) => {
            if (el) eduItemsRef.current[1] = el;
          }}
          className="mt-4"
        >
          <h2 className="text-xl font-semibold md:text-2xl">
            La Consolacion University Philippines
          </h2>
          <p className="text-body mb-4 mt-2 text-lg md:text-xl">
            Senior High School
          </p>
          <h3 className="text-body text-lg font-semibold md:text-xl">
            2020 - 2022
          </h3>
        </div>
      </div>
    </div>
  );
}
