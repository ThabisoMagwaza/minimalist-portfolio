import type { Metadata } from 'next';

import StyledComponentsRegistry from '@/lib/registy';
import GlobalStyles from '@/components/GlobalStyles';
import NavBar from '@/components/NavBar';

import { publicSans } from '@/lib/fonts';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo.svg" type="image/svg+xml" />
      </head>
      <body className={`${publicSans.className}`}>
        <StyledComponentsRegistry>
          <NavBar />
          {children}
          <GlobalStyles />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
