'use client';
import * as React from 'react';

export default function Page({ params }: { params: { slug: string } }) {
  return <h1>Portfolio {params.slug}</h1>;
}
