'use client'
import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";
import { services } from "@/app/constant";
import { BiLeftArrow } from "react-icons/bi";
import { MoveRight } from "lucide-react";
export const HoverImageLinks = () => {
  return (
    <section >
      <div className="grid sm:grid-cols-2 mx-auto max-w-5xl px-5 gap-10">
        {services.map((service: any) => (
          <>
            <Link
              key={service.id}
              heading={service.title}
              subheading={service.description}
              imgSrc={service.image}
              href={service.href}
              subservice={service.subservices}
            />
          </>
        ))}
      </div>
    </section>
  );
};

const Link = ({ heading, imgSrc, subheading, href, subservice }: any) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e: any) => {
    const rect = (ref.current as any)?.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <div className="flex flex-col">
      <motion.a
        href={href}
        ref={ref}
        onMouseMove={handleMouseMove}
        initial="initial"
        whileHover="whileHover"
        className="group relative flex items-center justify-between py-3 transition-colors duration-500 hover:border-gray-50 min-w-96"
      >
        <div>
          <motion.span
            variants={{
              initial: { x: 0 },
              whileHover: { x: -16 },
            }}
            transition={{
              type: "spring",
              staggerChildren: 0.075,
              delayChildren: 0.25,
            }}
            className="relative z-10 block text-2xl font-bold text-cyan-900 transition-colors duration-500 group-hover:text-gray-200 md:text-3xl "
          >
            {heading.split(".").map((l: any, i: any) => (
              <motion.span
                variants={{
                  initial: { x: 0 },
                  whileHover: { x: 16 },
                }}
                transition={{ type: "spring" }}
                className="inline-block"
                key={i}
              >
                {l}
              </motion.span>
            ))}
          </motion.span>
          <span className="relative z-10 mt-2 block text-base text-gray-900 transition-colors duration-500 group-hover:text-gray-200">
            {subheading}
          </span>
        </div>

        {<motion.img
          style={{
            top,
            left,
            translateX: "-50%",
            translateY: "-50%",
          }}
          variants={{
            initial: { scale: 0, rotate: "-12.5deg" },
            whileHover: { scale: 1, rotate: "12.5deg" },
          }}
          transition={{ type: "spring" }}
          src={imgSrc}
          className="absolute z-10 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
          alt={`Image representing a link for ${heading}`}
        />}

        <motion.div
          variants={{
            initial: {
              x: "25%",
              opacity: 0,
            },
            whileHover: {
              x: "0%",
              opacity: 1,
            },
          }}
          transition={{ type: "spring" }}
          className="relative z-10 p-4"
        >
          <FiArrowRight className="text-5xl text-gray-200" />
        </motion.div>

      </motion.a>
      <li className="flex flex-col list-disc text-sm gap-2">
        {subservice.map((subservice: any) => (
          <a className="flex gap-5 opacity-90 hover:opacity-100 transition-all" href={subservice.href}>
            {subservice.title}
            <MoveRight className="w-5 h-5 text-cyan-700" />
          </a>
        ))}
      </li>
    </div>
  );
};

export default HoverImageLinks