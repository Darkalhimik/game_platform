import type { Metadata } from "next";
import "../app/globals.css";

export const metadata: Metadata = {
  title: "Game Platform",
  description: "Local network game platform for solo and multiplayer games",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-white antialiased">
        {children}
      </body>
    </html>
  );
}