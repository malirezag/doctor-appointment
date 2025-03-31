import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://cdpreiqjaztmyyvzzxcu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNkcHJlaXFqYXp0bXl5dnp6eGN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI4MzE3MTUsImV4cCI6MjA1ODQwNzcxNX0.cuOQEVk5TWH8AcKe4B0Mlys1Yesx20QA3NUivLQwoNo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
