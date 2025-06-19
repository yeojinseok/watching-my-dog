import { browserSupabaseClient } from "@/utils/supabase/client";

export async function signInWithKakao() {
  const { data, error } = await browserSupabaseClient.auth.signInWithOAuth({
    provider: "kakao",
    options: {
      redirectTo: `${window.location.origin}/auth/callback`,
    },
  });

  if (error) {
    console.error("카카오 로그인 에러:", error.message);
  }
}
