'use client';
import * as React from 'react';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Header from '@/components/Header';

export default function Home() {
  return (
    <main>
      <Header />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
