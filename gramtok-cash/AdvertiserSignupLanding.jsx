'use client';
import { useState } from 'react';
import { supabase } from './supabaseClient';
import { createHubSpotContact } from './hubspot';

export default function AdvertiserSignupLanding() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await supabase.from('advertisers').insert([formData]);
    await createHubSpotContact({ ...formData, type: 'advertiser' });
    alert('¡Registro exitoso!');
    setFormData({ name: '', email: '' });
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Nombre" onChange={handleChange} required />
      <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
      <button type="submit">{loading ? 'Enviando...' : 'Registrarme'}</button>
    </form>
  );
}
