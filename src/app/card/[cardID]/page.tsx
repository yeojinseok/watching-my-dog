"use client";
import Image from "next/image";
import React from "react";

/**
 * 카드 상세 페이지
 **/
export default function Page() {
  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        padding: "50px",
      }}
    >
      <Card />
    </div>
  );
};

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
      className="container"
      style={{
        position: "relative",
        width: "350px",
        height: "auto",
        transition: "all 0.1s",
      }}
    >
      {/* 오버레이 요소 */}
      <div
        className="overlay"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
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
        className="card"
        style={{
          transform: transform,
          width: "350px",
          padding: "20px",
          backgroundColor: "yellow",
          borderRadius: "20px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          transition: "transform 0.1s ease-out",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "200px",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Image
            style={{
              borderRadius: "10px",
              objectFit: "cover",
            }}
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

        <div
          style={{
            paddingTop: "16px",
            paddingBottom: "16px",
            paddingLeft: "12px",
            paddingRight: "12px",
            marginTop: "20px",
            color: "black",
            fontFamily: "Arial, sans-serif",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            borderRadius: "10px",
          }}
        >
          <h5
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              marginBottom: "10px",
            }}
          >
            댕댕이
          </h5>
          <div style={{ fontSize: "14px", lineHeight: "1.5" }}>
            <p>귀여운 강아지입니다.</p>
            <p>이 강아지는 매우 친절하고 사랑스러운 성격을 가지고 있습니다.</p>
            <p>강아지와 함께하는 시간은 언제나 즐겁습니다.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
