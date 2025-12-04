import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ervnriwyzzclszvcbnpa.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVydm5yaXd5enpjbHN6dmNibnBhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ4NTE0MjMsImV4cCI6MjA4MDQyNzQyM30.Tr-9ct5ONU1AvxoTwyuDStUV_o7cewRbYgqOlLDdebU';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);