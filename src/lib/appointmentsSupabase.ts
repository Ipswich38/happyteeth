import { createClient } from '@supabase/supabase-js';

const appointmentsSupabaseUrl = process.env.APPOINTMENTS_SUPABASE_URL || '';
const appointmentsSupabaseAnonKey = process.env.APPOINTMENTS_SUPABASE_ANON_KEY || '';
const appointmentsSupabaseServiceRoleKey = process.env.APPOINTMENTS_SUPABASE_SERVICE_ROLE_KEY || '';

export const appointmentsSupabase = appointmentsSupabaseUrl && appointmentsSupabaseAnonKey
  ? createClient(appointmentsSupabaseUrl, appointmentsSupabaseAnonKey)
  : null;

export const appointmentsSupabaseAdmin = appointmentsSupabaseUrl && appointmentsSupabaseServiceRoleKey
  ? createClient(appointmentsSupabaseUrl, appointmentsSupabaseServiceRoleKey)
  : null;

export interface AppointmentSubmission {
  id: string;
  type: 'appointment';
  name: string;
  cellphone: string;
  service: string;
  date: string;
  time: string;
  customTime?: string;
  isCustomTime: boolean;
  appointmentDateTime: string;
  timestamp: string;
  read: boolean;
  created_at?: string;
}

export interface ContactSubmission {
  id: string;
  type: 'contact';
  name: string;
  email: string;
  phone?: string;
  message: string;
  timestamp: string;
  read: boolean;
  created_at?: string;
}

export type Submission = AppointmentSubmission | ContactSubmission;