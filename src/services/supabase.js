import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://xnixfmczjhgdbnwpopmc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhuaXhmbWN6amhnZGJud3BvcG1jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE3NjAzNDksImV4cCI6MjAzNzMzNjM0OX0.8WUP7TxD2DnLBRsDbXd7KfVVuk4gHWFsgILoa3v6TZA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
