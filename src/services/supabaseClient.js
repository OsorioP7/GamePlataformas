import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://fhwqvterfmbmyjsoxntz.supabase.co";
const supabaseKey = "sb_publishable_FAkBMwABxiM_mNCj92JfHw_CCVazwaR";

export const supabase = createClient(supabaseUrl, supabaseKey);