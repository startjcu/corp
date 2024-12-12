import "./globals.css";
import { ADLaM_Display } from 'next/font/google'

const geist = ADLaM_Display({ subsets: ['latin'], weight: '400' })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geist.className}>
        {children}
      </body>
    </html>
  );
}
