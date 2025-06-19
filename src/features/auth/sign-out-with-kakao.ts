import { browserSupabaseClient } from "@/utils/supabase/client";

export async function signOut() {
  const { error } = await browserSupabaseClient.auth.signOut();
  if (error) {
    console.error("로그아웃 에러:", error.message);
  }
}
