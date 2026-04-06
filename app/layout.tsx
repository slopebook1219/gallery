import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import HeaderWithMenu from './component/_item/HeaderWithMenu';

export const metadata = {
  title: {
    default: '坂本大幹 | ポートフォリオ',
    template: '%s | 坂本大幹',
  },
  description:
    '坂本大幹の公式ポートフォリオサイトです。モノクロに変化するインタラクティブなギャラリーを展示しています。',
  verification: {
    google: 'KvWNGfmzKsf_3XpITugU_7fl0Yd-ENN8NTcQDL5rTIg',
  },
};

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <HeaderWithMenu />
        {children}
      </body>
    </html>
  );
}

//
