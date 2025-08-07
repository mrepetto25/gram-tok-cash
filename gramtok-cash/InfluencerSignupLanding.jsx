'use client';
import { useState } from 'react';
import { supabase } from './supabaseClient';
import { createHubSpotContact } from './hubspot';

export default function InfluencerSignupLanding() {
  const [formData, setFormData] = useState({ name: '', email: '', instagram: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await supabase.from('influencers').insert([formData]);
    await createHubSpotContact({ ...formData, type: 'influencer' });
    alert('¡Registro exitoso!');
    setFormData({ name: '', email: '', instagram: '' });
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Nombre" onChange={handleChange} required />
      <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
      <input name="instagram" placeholder="@usuarioInstagram" onChange={handleChange} required />
      <button type="submit">{loading ? 'Enviando...' : 'Registrarme'}</button>
    </form>
  );
}
