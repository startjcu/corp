import "./globals.css";
import { ADLaM_Display } from 'next/font/google'
import { AntdRegistry } from '@ant-design/nextjs-registry';

const geist = ADLaM_Display({ subsets: ['latin'], weight: '400' })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geist.className}>
        <AntdRegistry>
          {children}
        </AntdRegistry>
      </body>
    </html>
  );
}
