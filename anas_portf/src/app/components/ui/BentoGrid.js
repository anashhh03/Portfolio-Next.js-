"use client";

import Image from "next/image";
import { cn } from "@/app/utils/cn";

// Grid container
export const BentoGrid = ({ className = "", children }) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-[93vw] grid-cols-1 gap-6 md:auto-rows-[7rem] md:grid-cols-5",
        className
      )}
    >
      {children}
    </div>
  );
};

// Individual card component
export const BentoGridItem = ({
  id, // unique identifier for card
  className = "",
  title,
  description,
  img,
  visual,
}) => {
  return (
    <div
      id={id}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-4 backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] hover:border-white/20",
        className
      )}
    >
      {/* Glow Overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.12),transparent_60%)]" />

      <div className="relative z-10 flex h-full flex-col justify-between gap-3">
        {/* Visual Section */}
        {(img || visual) && (
          <div className="relative h-full w-full overflow-hidden rounded-xl">
            {img && (
              <Image
                src={img}
                alt={title}
                fill
                sizes="(max-width:1280px) 33vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            )}
            {visual /* You can pass JSX logo/graphic here */}
          </div>
        )}

        {/* Text Section */}
        <div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="mt-1 text-sm text-white/70">{description}</p>
        </div>
      </div>
    </div>
  );
};
