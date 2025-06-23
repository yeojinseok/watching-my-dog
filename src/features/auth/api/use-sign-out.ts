import { useMutation, useQueryClient } from "@tanstack/react-query";
import { browserSupabaseClient } from "@/utils/supabase/client";
import { userQueryKey } from "./query-key";

export function useSignOut() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      const { error } = await browserSupabaseClient.auth.signOut();
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: userQueryKey.all });
    },
  });
}
