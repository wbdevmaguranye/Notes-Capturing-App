
import { createClient } from '@supabase/supabase-js';

// Create a single supabase client for interacting with your database
// const supabase = createClient('https://xyzcompany.supabase.co', 'public-anon-key')
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh2b3F0cW90ZXV3aWd0Y3p4Y256Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5MzU0Mzg2OSwiZXhwIjoyMDA5MTE5ODY5fQ.fpP6EI-wUtk5oy0rlgzrg_PKC9da67N4hTD1Md1nrfk";
const SUPABASE_URL ="https://hvoqtqoteuwigtczxcnz.supabase.co";
const useSupabase = () =>{
const supabase = createClient(SUPABASE_URL,SUPABASE_KEY);
return{
    supabase,
}
}
export default useSupabase