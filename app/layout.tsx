import { Roboto_Mono } from '@next/font/google';
import Navbar from './Navbar';
import './globals.css';

const font = Roboto_Mono();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={font.className}>
      <head />
      <body className='bg-yellow-50'>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
