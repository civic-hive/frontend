// src/app/layout.tsx (Server Component)
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { headers } from "next/headers";
import ClientLayout from "@/app/ClientLayout";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookies = headers().get('cookie');

  return (
    <html lang="en">
      <body className={`${inter.className} bg-background`}>
        <ClientLayout cookies={cookies}>{children}</ClientLayout>
      </body>
    </html>
  );
}