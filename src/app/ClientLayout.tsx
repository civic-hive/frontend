// src/app/ClientLayout.tsx (Client Component)
"use client";

import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ContextProvider from '@/lib/context';

export default function ClientLayout({
  children,
  cookies
}: {
  children: React.ReactNode;
  cookies: string | null;
}) {
  return (
    <ContextProvider cookies={cookies}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1 bg-background">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </ThemeProvider>
    </ContextProvider>
  );
}