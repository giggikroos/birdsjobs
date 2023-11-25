import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bird Jobs',
  description: 'Find Work You Love',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
