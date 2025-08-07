import { supabase } from './supabaseClient';
export const trackClick = async (ref) => {
  if (!ref) return;
  await supabase.from('clicks').insert([
    { referrer: ref, timestamp: new Date().toISOString() }
  ]);
};