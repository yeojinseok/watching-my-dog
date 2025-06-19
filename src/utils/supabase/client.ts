import { createBrowserClient as createClient } from "@supabase/ssr";
import { Database } from "./types/supabase";

function createBrowserClient() {
  // Create a supabase client on the browser with project's credentials
  return createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}

export const browserSupabaseClient = createBrowserClient();
