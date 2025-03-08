'use client';

import { ReactNode } from 'react';

interface ProtectedLayoutProps {
  children: ReactNode;
}

export default function ProtectedLayout({ children }: ProtectedLayoutProps) {
  return (
    <div className="flex min-h-screen">
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}