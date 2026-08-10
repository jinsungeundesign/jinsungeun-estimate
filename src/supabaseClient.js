import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// .env 파일에 키를 아직 안 넣었다면 null로 두어, 앱이 죽지 않고
// "로그인 기능 준비 중" 상태로만 보이게 함
export const supabase =
  supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : null;
