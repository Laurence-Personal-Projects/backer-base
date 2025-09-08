// app/layout.tsx
import '@/styles/globals.css';
import "animate.css";
import type { ReactNode } from 'react';
import type { Metadata } from "next";
import { ThemeProvider } from '@/app/components/theme-provider';
import { Theme as RadixTheme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import Header from '@/app/components/layout/Header';
import Footer from '@/app/components/layout/Footer';
import AnimationModule from '@/app/components/AnimationModule';

export const metadata: Metadata = {
  title: "Backer Base",
  description: "A Dynamic Platform Connecting Dreams with Individual & Corporate Support.",
  icons: {
    icon: "/images/logo-icon-@2x.png",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-poppins">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <RadixTheme appearance="dark">
            {/*For page animations */}
            <AnimationModule />
            <Header />
            <main className="w-full max-w-full">{children}</main>
            <Footer />
          </RadixTheme>
        </ThemeProvider>
      </body>
    </html>
  );
}
