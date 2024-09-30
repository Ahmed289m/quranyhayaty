import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://sivqgrzeeciubokhtuug.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNpdnFncnplZWNpdWJva2h0dXVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc1MjI4NDEsImV4cCI6MjA0MzA5ODg0MX0.Bp0Tof6RpYJUyceX88_EZbEH59YwgCBj9O6JX2MnPnU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
