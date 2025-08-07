import { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';

export default function Dashboard() {
  const [clicks, setClicks] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await supabase.from('clicks').select('*');
      setClicks(data);
    })();
  }, []);

  return (
    <div>
      <h1>Dashboard de Clics</h1>
      <ul>{clicks.map(c => <li key={c.id}>{c.referrer} - {c.timestamp}</li>)}</ul>
    </div>
  );
}
