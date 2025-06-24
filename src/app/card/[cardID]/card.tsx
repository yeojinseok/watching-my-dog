import Image from "next/image";
import React from "react";

const 원근감 = "800px";

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
  bgColor: string;
}

export const Card = ({ imageSrc, title, description, bgColor }: CardProps) => {
  const [transform, setTransform] = React.useState<string>(
    `perspective(${원근감}) rotateX(0deg) rotateY(0deg)`
  );
  const [overlayStyle, setOverlayStyle] = React.useState({
    backgroundPosition: "100%",
    filter: "brightness(1.1) opacity(0.8)",
  });
  const containerRef = React.useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = (-1 / 5) * x + 20;
    const rotateX = (4 / 30) * y - 20;

    setOverlayStyle({
      backgroundPosition: `${x / 5 + y / 5}%`,
      filter: `opacity(${x / 200}) brightness(1.2)`,
    });

    setTransform(
      `perspective(${원근감}) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    );
  };

  const handleMouseLeave = () => {
    setOverlayStyle({
      backgroundPosition: "100%",
      filter: "opacity(0)",
    });
    setTransform(`perspective(${원근감}) rotateX(0deg) rotateY(0deg)`);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="container relative w-[320px] transition-all duration-100"
    >
      {/* 오버레이 요소 */}
      <div
        className="overlay absolute top-0 left-0 w-full h-full rounded-2xl"
        style={{
          zIndex: 10,
          background: `linear-gradient(105deg,
            transparent 40%,
            rgba(255, 219, 112, 0.8) 45%,
            rgba(132, 50, 255, 0.6) 50%,
            transparent 54%)`,
          mixBlendMode: "color-dodge",
          backgroundSize: "150% 150%",
          transition: "all 0.1s",
          pointerEvents: "none",
          ...overlayStyle,
        }}
      />
      {/* 카드 요소 */}
      <div
        className={`card w-[100%] aspect-[5/7] p-5 rounded-2xl shadow-md transition-transform duration-100 ${bgColor}`}
        style={{
          transform: transform,
        }}
      >
        <div className="relative w-full h-[60%] overflow-hidden">
          <Image
            className="rounded-lg object-cover"
            fill
            sizes="300px"
            objectPosition="center"
            unoptimized
            alt="강아지 이미지"
            src={imageSrc}
          />
        </div>

        <div className="h-[35%] mt-5 p-3 bg-white bg-opacity-80 rounded-lg text-black font-sans">
          <h5 className="text-lg font-bold mb-2">{title}</h5>
          <div className="text-sm leading-relaxed">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
