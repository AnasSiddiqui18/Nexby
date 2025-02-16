"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useScrollPosition } from "@/hooks/use-scroll-position";
import { cn } from "@/lib/utils";

interface CardProps extends React.ComponentProps<"div"> {
  index: number;
  title: string;
  description: string;
  imageSrc: string;
  iconSrc: string;
}

const Card = ({
  index,
  title,
  description,
  imageSrc,
  iconSrc,
  className,
  style,
}: CardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const scrollY = useScrollPosition();

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"],
  });

  const springConfig = {
    stiffness: 400,
    damping: 25,
    bounce: 0,
  };

  const y = useSpring(
    useTransform(scrollYProgress, [0, 0.3, 1], [-100, 0, 0]),
    springConfig
  );

  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.15, 1], [0, 1, 1]),
    springConfig
  );

  const scale = useSpring(
    useTransform(scrollYProgress, [0, 0.15, 1], [0.6, 1, 1]),
    springConfig
  );

  const isSticky = scrollY > index * 150;

  function calculateTopPosition() {
    if (!isSticky) return "0px";
    if (isSticky && index === 0) return "25px";
    if (isSticky && index === 1) return "50px";
    if (isSticky && index === 2) return "75px";
    if (isSticky && index === 3) return "100px";
    if (isSticky && index === 4) return "125px";
  }

  // if index is 1

  return (
    <motion.div
      ref={cardRef}
      style={{
        y,
        opacity,
        scale,
        position: isSticky ? "sticky" : "relative",
        top: calculateTopPosition(),
        zIndex: index,
        ...style,
      }}
    >
      <div
        className={cn(
          "flex justify-center flex-wrap lg:gap-20 max-lg:px-6 max-xl:px-8 items-center bg-brand-gray-600 rounded-tl-3xl rounded-tr-3xl min-h-[80vh] h-auto py-10 px-10 max-md:flex-col max-md:gap-5",
          className
        )}
      >
        <div className="flex flex-col gap-4 text-left">
          <img
            src={iconSrc}
            alt={title}
            className="size-24 max-lg:size-14 max-sm:size-12"
          />

          <h4 className="text-xl font-normal">{title}</h4>
          <p className="~text-sm/lg tracking-wide max-w-96 text-white-400">
            {description}
          </p>
        </div>

        <img
          src={imageSrc}
          alt={title}
          className="max-w-full sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px] xl:max-w-[550px] object-cover rounded-lg shadow-2xl shadow-brand-purple-600/50"
        />
      </div>
    </motion.div>
  );
};

export default function ScrollCards() {
  const cards = [
    {
      title: "Share your requirements",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
      imageSrc: "/requirement.png",
      iconSrc: "/arrow.png",
      position: "flex-row",
    },
    {
      title: "AI Generates JD for you",
      description:
        "lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
      imageSrc: "/generates.png",
      iconSrc: "/magic.png",
      position: "flex-row-reverse",
    },
    {
      title: "Choose your Assessment Goals",
      description:
        "lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
      imageSrc: "/assesment.png",
      iconSrc: "/upload.png",
      position: "flex-row",
    },
    {
      title: "Select AI-Generated Questions for your Job Profile",
      description:
        "lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
      imageSrc: "/question.png",
      iconSrc: "/select.png",
      position: "flex-row-reverse",
    },

    {
      title: "Assessment Link Ready to be floated",
      description:
        "lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
      imageSrc: "/assesment-link.png",
      iconSrc: "/link.png",
      position: "flex-row",
    },
  ];

  const calculateDynamicMargin = (index: number) => {
    const increment = 25;
    const baseMargin = 20;

    const margin = baseMargin + index * increment;

    return {
      marginLeft: `${margin}px`,
      marginRight: `${margin}px`,
    };
  };

  return (
    <div className="relative min-h-screen pt-14 w-full">
      {cards.map((card, index) => {
        return (
          <Card
            key={index}
            index={index}
            className={`${card.position} ${
              index > 0 && index % 2 !== 0 ? "bg-brand-gray-900 " : ""
            }`}
            {...card}
            style={index > 0 ? calculateDynamicMargin(index) : undefined}
          />
        );
      })}
    </div>
  );
}
