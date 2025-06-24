"use client";
import { signInWithKakao } from "@/features/auth/sign-in-with-kakao";
import { Button } from "@/components/ui/button";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FFF3A3]">
      <div className="flex-1 flex flex-col items-center justify-center w-full">
        <h1 className="text-4xl font-bold text-[#C2A13D] text-center mb-2">
          우리 강아지를 <br />
          봐아요
          <span role="img" aria-label="dog">
            🐶
          </span>
        </h1>
        <p className="text-base text-[#C2A13D]/60 text-center mb-12">
          내 강아지 카드도 만들고 친구들과
          <br />
          공유해 보세요!
        </p>
        <div className="flex justify-center w-full">
          <Button
            onClick={signInWithKakao}
            className="w-full max-w-[340px] h-14 rounded-2xl px-6 bg-[#FEE500] hover:bg-[#ffe066] text-[#3C1E1E] text-lg font-semibold flex items-center gap-2 shadow justify-center"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse cx="12" cy="12" rx="12" ry="12" fill="#3C1E1E" />
              <path
                d="M7.5 12h9M12 7.5v9"
                stroke="#FEE500"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            카카오 로그인
          </Button>
        </div>
      </div>
    </div>
  );
}
