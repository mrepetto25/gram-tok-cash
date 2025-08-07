'use client';
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { trackClick } from './clickTracker';

export default function Home() {
  const searchParams = useSearchParams();
  const ref = searchParams.get('ref');

  useEffect(() => {
    if (ref) trackClick(ref);
  }, [ref]);

  return <h1>GramTok Cash Home</h1>;
}
