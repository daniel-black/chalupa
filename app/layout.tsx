import './globals.css';
import { Roboto_Mono } from '@next/font/google';
import Navbar from './Navbar';

const font = Roboto_Mono();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={font.className}>
      <head />
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
