import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types
export interface Submission {
  id: string;
  type: 'contact' | 'appointment';
  name: string;
  email?: string;
  phone?: string;
  cellphone?: string;
  message?: string;
  service?: string;
  date?: string;
  timestamp: string;
  read: boolean;
  created_at?: string;
}