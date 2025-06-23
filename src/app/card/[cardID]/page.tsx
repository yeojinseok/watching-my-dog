"use client";
import Image from "next/image";
import React from "react";

/**
 * 카드 상세 페이지
 **/
export default function Page() {
  return (
    <div className="flex flex-1 justify-center p-12">
      <Card />
    </div>
  );
}

const 원근감 = '800px';

const Card = () => {
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
      className="container relative w-[350px] transition-all duration-100"
    >
      {/* 오버레이 요소 */}
      <div
        className="overlay absolute inset-0 z-10 bg-gradient-to-r from-transparent via-[rgba(255,219,112,0.8)_45%,rgba(132,50,255,0.6)_50%] to-transparent bg-[length:150%_150%] mix-blend-color-dodge pointer-events-none transition-all duration-100"
        style={{
          backgroundPosition: overlayStyle.backgroundPosition,
          filter: overlayStyle.filter,
        }}
      />
      {/* 카드 요소 */}
      <div
        className="card w-[350px] p-5 bg-yellow-300 rounded-2xl shadow-md transition-transform duration-100"
        style={{
          transform: transform,
        }}
      >
        <div className="relative w-full h-[200px] overflow-hidden">
          <Image
            className="rounded-lg object-cover"
            fill
            sizes="300px"
            objectPosition="center"
            unoptimized
            alt="강아지 이미지"
            src={
              "https://www.urbanbrush.net/web/wp-content/uploads/edd/2020/06/urbanbrush-20200615000825087215.jpg"
            }
          />
        </div>

        <div className="mt-5 p-3 bg-white bg-opacity-80 rounded-lg text-black font-sans">
          <h5 className="text-lg font-bold mb-2">댕댕이</h5>
          <div className="text-sm leading-relaxed">
            <p>귀여운 강아지입니다.</p>
            <p>이 강아지는 매우 친절하고 사랑스러운 성격을 가지고 있습니다.</p>
            <p>강아지와 함께하는 시간은 언제나 즐겁습니다.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
