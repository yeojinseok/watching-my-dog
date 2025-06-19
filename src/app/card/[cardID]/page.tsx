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
}

const 회전_각도 = 30;
const 원근감_비율 = 800;

const Card = () => {
  const [transform, setTransform] = React.useState<string>(
    "perspective(350px) rotateX(0deg) rotateY(0deg)"
  );
  const cardRef = React.useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();

    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    // 회전 각도 계산 (-30도 ~ 30도 범위)
    const rotateY = 회전_각도 * (0.5 - x);
    const rotateX = 회전_각도 * (y - 0.5);

    setTransform(
      `perspective(${원근감_비율}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    );
  };

  const handleMouseLeave = () => {
    setTransform(`perspective(${원근감_비율}px) rotateX(0deg) rotateY(0deg)`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
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
          style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "10px" }}
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
  );
};
