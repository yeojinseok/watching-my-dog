import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function POST() {
  const supabase = await createClient();
  await supabase.auth.signOut();

  // 클라이언트에서 리다이렉트 처리, 서버는 성공 응답만 반환
  return NextResponse.json({ success: true });
}
