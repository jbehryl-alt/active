import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;
const runtimeSupabaseUrl = supabaseUrl;

if (!runtimeSupabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase client is not configured. Check REACT_APP_SUPABASE_URL and REACT_APP_SUPABASE_ANON_KEY.');
}

export const supabase =
  runtimeSupabaseUrl && supabaseAnonKey
    ? createClient(runtimeSupabaseUrl, supabaseAnonKey, {
        auth: {
          autoRefreshToken: true,
          persistSession: true,
          detectSessionInUrl: false,
        },
      })
    : null;
