export async function createHubSpotContact({ email, name, type }) {
  await fetch('/api/hubspot', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, name, type })
  });
}