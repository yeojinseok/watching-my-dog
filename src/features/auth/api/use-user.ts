import { useQuery } from "@tanstack/react-query";
import { browserSupabaseClient } from "@/utils/supabase/client";
import { userQueryKey } from "./query-key";

async function fetchUser() {
  const { data: authData, error: authError } =
    await browserSupabaseClient.auth.getUser();
  if (authError) throw authError;

  const email = authData.user?.email;

  if (!email) return null;

  const { data: user, error: userError } = await browserSupabaseClient
    .from("users")
    .select("*")
    .eq("email", email)
    .single();

  if (userError) throw userError;

  return user;
}

export function useUser() {
  return useQuery({
    queryKey: userQueryKey.all,
    queryFn: fetchUser,
    staleTime: 1000 * 60 * 60 * 24,
    gcTime: 1000 * 60 * 60 * 24,
  });
}
