import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  let next = searchParams.get("next") ?? "/";
  if (!next.startsWith("/")) {
    next = "/";
  }
  if (code) {
    const supabase = await createClient();

    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      // 유저 정보 가져오기
      const {
        data: { user },
      } = await supabase.auth.getUser();

      //TODO: 유저 회원가입 로직 추가
      if (user) {
        const { data: profile, error: profileError } = await supabase
          .from("users")
          .select("*")
          .eq("email", user.email ?? "")
          .single();

        if (!profile || profileError) {
          const { error: insertError } = await supabase.from("users").insert({
            email: user.email,
            provider: user.app_metadata?.provider ?? "kakao",
            provider_id: user.id,
            name: user.user_metadata?.name ?? "Unknown User",
            profile_image: user.user_metadata?.avatar_url ?? null,
          });
          if (insertError) {
            // 회원가입 실패 시 에러 페이지로 리다이렉트
            return NextResponse.redirect(`${origin}/auth/auth-code-error`);
          }
        }
      }

      const forwardedHost = request.headers.get("x-forwarded-host");
      const isLocalEnv = process.env.NODE_ENV === "development";
      if (isLocalEnv) {
        return NextResponse.redirect(`${origin}${next}`);
      } else if (forwardedHost) {
        return NextResponse.redirect(`https://${forwardedHost}${next}`);
      } else {
        return NextResponse.redirect(`${origin}${next}`);
      }
    }
  }
  return NextResponse.redirect(`${origin}/auth/auth-code-error`);
}
