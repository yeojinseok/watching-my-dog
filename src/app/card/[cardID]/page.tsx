"use client";
import { Card } from "./card";

/**
 * 카드 상세 페이지
 **/
export default function Page() {
  return (
    <div className="flex flex-wrap gap-10 flex-1 justify-center p-12">
      {/* XXX: 확인을 위한 임시 데이터 */}
      {/* TODO: 서버에서 데이터 불러와서 연동하기 */}
      <Card
        bgColor="bg-blue-400"
        imageSrc="https://img.freepik.com/premium-photo/adorable-white-pomeranian-puppy-spitz_463999-7.jpg?semt=ais_hybrid&w=740"
        title="댕댕이"
        description={`귀여운 강아지입니다.\n이 강아지는 매우 친절하고 사랑스러운 성격을 가지고 있습니다.\n강아지와 함께하는 시간은 언제나 즐겁습니다.`}
      />
      <Card
        bgColor="bg-red-400"
        imageSrc="https://img.freepik.com/premium-photo/adorable-white-pomeranian-puppy-spitz_463999-7.jpg?semt=ais_hybrid&w=740"
        title="댕댕이"
        description={`귀여운 강아지입니다.\n이 강아지는 매우 친절하고 사랑스러운 성격을 가지고 있습니다.\n강아지와 함께하는 시간은 언제나 즐겁습니다.`}
      />
      <Card
        bgColor="bg-green-400"
        imageSrc="https://img.freepik.com/premium-photo/adorable-white-pomeranian-puppy-spitz_463999-7.jpg?semt=ais_hybrid&w=740"
        title="댕댕이"
        description={`귀여운 강아지입니다.\n이 강아지는 매우 친절하고 사랑스러운 성격을 가지고 있습니다.\n강아지와 함께하는 시간은 언제나 즐겁습니다.`}
      />
      <Card
        bgColor="bg-yellow-400"
        imageSrc="https://img.freepik.com/premium-photo/adorable-white-pomeranian-puppy-spitz_463999-7.jpg?semt=ais_hybrid&w=740"
        title="댕댕이"
        description={`귀여운 강아지입니다.\n이 강아지는 매우 친절하고 사랑스러운 성격을 가지고 있습니다.\n강아지와 함께하는 시간은 언제나 즐겁습니다.`}
      />
      <Card
        bgColor="bg-purple-400"
        imageSrc="https://img.freepik.com/premium-photo/adorable-white-pomeranian-puppy-spitz_463999-7.jpg?semt=ais_hybrid&w=740"
        title="댕댕이"
        description={`귀여운 강아지입니다.\n이 강아지는 매우 친절하고 사랑스러운 성격을 가지고 있습니다.\n강아지와 함께하는 시간은 언제나 즐겁습니다.`}
      />
      <Card
        bgColor="bg-pink-400"
        imageSrc="https://img.freepik.com/premium-photo/adorable-white-pomeranian-puppy-spitz_463999-7.jpg?semt=ais_hybrid&w=740"
        title="댕댕이"
        description={`귀여운 강아지입니다.\n이 강아지는 매우 친절하고 사랑스러운 성격을 가지고 있습니다.\n강아지와 함께하는 시간은 언제나 즐겁습니다.`}
      />
      <Card
        bgColor="bg-indigo-400"
        imageSrc="https://img.freepik.com/premium-photo/adorable-white-pomeranian-puppy-spitz_463999-7.jpg?semt=ais_hybrid&w=740"
        title="댕댕이"
        description={`귀여운 강아지입니다.\n이 강아지는 매우 친절하고 사랑스러운 성격을 가지고 있습니다.\n강아지와 함께하는 시간은 언제나 즐겁습니다.`}
      />
      <Card
        bgColor="bg-gray-400"
        imageSrc="https://img.freepik.com/premium-photo/adorable-white-pomeranian-puppy-spitz_463999-7.jpg?semt=ais_hybrid&w=740"
        title="댕댕이"
        description={`귀여운 강아지입니다.\n이 강아지는 매우 친절하고 사랑스러운 성격을 가지고 있습니다.\n강아지와 함께하는 시간은 언제나 즐겁습니다.`}
      />
    </div>
  );
}
