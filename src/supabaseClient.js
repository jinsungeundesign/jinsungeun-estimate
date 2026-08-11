import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// .env 파일에 키를 아직 안 넣었다면 null로 두어, 앱이 죽지 않고
// "로그인 기능 준비 중" 상태로만 보이게 함
export const supabase =
  supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : null;

// 현장관리(hyunjang-ops) 앱의 Supabase 프로젝트 — 별도 프로젝트라 클라이언트도 따로 둔다.
// 견적문의가 오면 여기로도 잠재고객을 넣어, 이 견적 앱을 안 쓰는 직원도
// 현장관리 고객관리 화면에서 바로 확인할 수 있게 한다.
const leadsUrl = import.meta.env.VITE_LEADS_SUPABASE_URL;
const leadsAnonKey = import.meta.env.VITE_LEADS_SUPABASE_ANON_KEY;

export const leadsSupabase =
  leadsUrl && leadsAnonKey ? createClient(leadsUrl, leadsAnonKey) : null;
